 
import { NextResponse } from "next/server";
 
 
import Chef from "@/model/chef";
import connect from "@/utils/db";
import ChefMenu from "@/model/chefmenu";
import Review from "@/model/reviews";

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
      const { id } = params; // Extract `id` from `params`
      const body = await request.json();
  
      const updatedChef = await Chef.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedChef) {
        return new NextResponse("Chef item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Chef successfully Updated",
          data: updatedChef,
        }),
        { status: 201 }
      ); 
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef Chef",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };


  export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
        const { id } = params;  // Assuming you pass the ID as a URL parameter
  
      const deletedChef = await Chef.findByIdAndDelete(id);
  
      if (!deletedChef) {
        return new NextResponse("Chef item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Chef successfully Updated",
        
        }),
        { status: 201 }
      ); 
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef Chef",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };


  export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
        const { id } = params;  // Extract `id` from `params`
  
        // Fetch the chef's details by ID
        const GetChef = await Chef.findById(id);

        // Fetch all menus associated with the chef by ID
        const menus = await ChefMenu.find({ chef: id });
        const allreviews = await Review.find({ chef: id });

        
        if (!GetChef) {
            return new NextResponse("Chef not found", { status: 404 });
        }
        const totalReviews = await Review.countDocuments({ chef: id });

        // Return the chef's details along with their menus
        return new NextResponse(
            JSON.stringify({
                message: "Chef successfully retrieved",
                chef: GetChef,
                menus: menus,
                totalReviews: totalReviews,
                allreviews
            }),
            { status: 200 }
        );
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                message: "Error retrieving chef",
                error: error.message,
            }),
            { status: 500 }
        );
    }
};
  
