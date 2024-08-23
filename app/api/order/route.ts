import Chef from "@/model/chef";
import Order from "@/model/order";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    // Connect to the database
    await connect();
  
    try {
      // Parse the request body to get the order data
      const body = await request.json();
 
    
     
      // Create a new order document using the request body
      const newOrder = new Order({
        name: body.name,
        address: body.address,
        phone: body.phone,
        notes:body.notes,
        email: body.email,
        date: body.date,
        time: body.time,
        items: body.items,
        totalCost: body.totalCost,
        chefName: body.chefName,
        chefId: body.chefId,
      });
  
 
      const savedOrder = await newOrder.save();
 
    
     
      return new NextResponse(JSON.stringify({
         message: "Chef menu created successfully",
        data: savedOrder, status: 201 }));
    } catch (error: any) {
      // Handle any errors and return an error response
      return NextResponse.json(
        { message:error.message },
        { status: 500 }
      );
    }
  };