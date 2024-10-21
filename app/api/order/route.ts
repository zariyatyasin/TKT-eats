import Chef from "@/model/chef";
import Order from "@/model/order";
import ChefMenu from "@/model/chefmenu"; // Import the ChefMenu model
import Promocode from "@/model/promocode"; // Import the Promocode model
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    // Connect to the database
    await connect();
  
    try {
      // Parse the request body to get the order data
      const body = await request.json();
 
      console.log("the modu", body);
      
      // Calculate the total cost
      let totalCost = 0;
      for (const item of body.items) {
        const menuItem = await ChefMenu.findById(item.id);
        if (menuItem) {
          totalCost += menuItem.price * item.quantity;
        }
      }
      console.log("this is from backend", totalCost);
     
      // Apply promocode discount if applicable
      if (body.promocode) {
        const promocode = await Promocode.findOne({ code: body.promocode, isActive: true });
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

      // Create a new order document using the request body
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
        chefName: body.chefName,
        chefId: body.chefId,
      });
  
      const savedOrder = await newOrder.save();
     
      return new NextResponse(JSON.stringify({
         message: "Order created successfully",
        data: savedOrder, status: 201 }));
    } catch (error: any) {
      // Handle any errors and return an error response
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    }
  };