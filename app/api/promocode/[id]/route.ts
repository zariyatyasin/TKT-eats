import { NextResponse } from "next/server";
import Promocode from "@/model/promocode";
import connect from "@/utils/db";

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
      const { id } = params; // Extract `id` from `params`
      const body = await request.json();
  
      // Prepare the update object
      const updateData: any = { $set: {}, $unset: {} };
  
      // Populate $set and $unset based on the request body
      for (const key in body) {
        if (body[key] !== undefined) {
          updateData.$set[key] = body[key];
        }
      }
  
      // Identify fields to unset (remove) if they are not in the request body
      const fieldsToUnset = ['chef']; // Add any other fields you want to potentially unset
      fieldsToUnset.forEach(field => {
        if (!(field in body)) {
          updateData.$unset[field] = "";
        }
      });
  
      // Remove $unset if no fields are to be unset
      if (Object.keys(updateData.$unset).length === 0) {
        delete updateData.$unset;
      }
  
      const updatedPromocode = await Promocode.findByIdAndUpdate(
        id,
        updateData,
        { new: true } // Return the updated document
      );
  
      if (!updatedPromocode) {
        return new NextResponse("Promocode not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Promocode successfully updated",
          data: updatedPromocode,
        }),
        { status: 200 }
      );
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          message: "Error updating promocode",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  };

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  await connect();

  try {
    const { id } = params; // Extract `id` from `params`

    const deletedPromocode = await Promocode.findByIdAndDelete(id);

    if (!deletedPromocode) {
      return new NextResponse("Promocode not found", { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({
        message: "Promocode successfully deleted",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Error deleting promocode",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};