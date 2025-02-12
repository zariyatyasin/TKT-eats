import Chef from "@/model/chef";
import Order from "@/model/order";
import ChefMenu from "@/model/chefmenu"; // Import the ChefMenu model
import Promocode from "@/model/promocode"; // Import the Promocode model
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connect();

  try {
    const body = await request.json();

    console.log("the modu", body);
    
    let totalCost = 0;
    for (const item of body.items) {
      const menuItem = await ChefMenu.findById(item.id);
      if (menuItem) {
        totalCost += menuItem.price * item.quantity;
      }
    }
    
    // Calculate service fee (3%)
    const serviceFee = totalCost * 0.03;
    
    // Only process promocode if it exists
    if (body.promocode) {
      const codeLowerCase = body.promocode.toLowerCase();
      const promocode = await Promocode.findOne({ code: codeLowerCase, isActive: true });
      if (!promocode) {
        return NextResponse.json(
          { message: "Promocode not found or not active" },
          { status: 400 }
        );
      }
      
      if (promocode.expirationDate && promocode.expirationDate < new Date()) {
        return NextResponse.json(
          { message: "Promocode has expired" },
          { status: 400 }
        );
      }

      if (Array.isArray(promocode.chefs) && promocode.chefs.length > 0 && !promocode.chefs.includes(body.chefId)) {
        return NextResponse.json(
          { message: "Promocode not applicable for this chef" },
          { status: 400 }
        );
      }

      if (promocode.discountType === 'fixed') {
        totalCost -= promocode.discountValue;
      } else if (promocode.discountType === 'percentage') {
        totalCost -= (totalCost * promocode.discountValue) / 100;
      }
    }

    // Add service fee to final total
    totalCost += serviceFee;

    const newOrder = new Order({
      name: body.name,
      address: body.address,
      phone: body.phone,
      notes: body.notes,
      email: body.email,
      date: body.date,
      time: body.time,
      items: body.items,
      totalCost: totalCost,
      serviceFee: serviceFee,
      chefName: body.chefName,
      chefId: body.chefId,
      ...(body.userId && { userId: body.userId }),
    });

    const savedOrder = await newOrder.save();
   
    return new NextResponse(JSON.stringify({
       message: "Order created successfully",
      data: savedOrder, status: 201 }));
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
};
export const GET = async (request: Request) => {
  // Connect to the database
  await connect();

  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { message: "User ID query parameter is required" },
        { status: 400 }
      );
    }

    // Find orders by userId
    const orders = await Order.find({ userId });

    if (orders.length === 0) {
      return NextResponse.json(
        { message: "No orders found for this user ID" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Orders fetched successfully",
      data: orders,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
};