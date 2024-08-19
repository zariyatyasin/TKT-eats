import Order from "@/model/order"; // Replace with the actual path to your Order model
import connect from "@/utils/db";
import { NextResponse } from "next/server";

 
export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  // Connect to the database
  await connect();

  try {
    const { id } = params;

    // Find the order by its ID
    const order = await Order.findById(id);

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify({
      message: "Order fetched successfully",
      data: order,
    }), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error fetching order: " + error.message, {
      status: 500,
    });
  }
};
