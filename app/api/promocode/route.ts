import Promocode from "@/model/promocode";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  // Connect to the database
  await connect();

  try {
    // Parse the request body to get the promocode data
    const body = await request.json();

    // Check if a promocode with the same code already exists
    const existingPromocode = await Promocode.findOne({ code: body.code });
    if (existingPromocode) {
      return NextResponse.json(
        { message: "Promocode with this code already exists" },
        { status: 400 }
      );
    }

    // Create a new promocode document using the request body
    const newPromocode = new Promocode({
      code: body.code,
      discountType: body.discountType,
      discountValue: body.discountValue,
      expirationDate: body.expirationDate,
      isActive: body.isActive,
      chefs: body.chefs, // Optional field
    });

    // Save the promocode to the database
    const savedPromocode = await newPromocode.save();

    // Return a success response with the saved promocode data
    return new NextResponse(
      JSON.stringify({
        message: "Promocode created successfully",
        data: savedPromocode,
      }),
      { status: 201 }
    );
  } catch (error: any) {
    // Handle any errors and return an error response
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
};