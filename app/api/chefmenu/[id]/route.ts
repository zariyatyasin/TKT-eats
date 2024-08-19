import connect from "@/utils/db";
import { NextResponse } from "next/server";
 
 
import ChefMenu from "@/model/chefmenu";

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
      const { id } = params; // Extract `id` from `params`
      const body = await request.json();
  
      const updatedChefMenu = await ChefMenu.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedChefMenu) {
        return new NextResponse("Menu item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Menu successfully Updated",
          data: updatedChefMenu,
        }),
        { status: 201 }
      ); 
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef menu",
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
  
      const deletedChefMenu = await ChefMenu.findByIdAndDelete(id);
  
      if (!deletedChefMenu) {
        return new NextResponse("Menu item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Menu successfully Updated",
        
        }),
        { status: 201 }
      ); 
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef menu",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };


  export const GET = async (request: Request,{ params }: { params: { id: string } }) => {
    await connect();
  
    try {
        const { id } = params;  // Assuming you pass the ID as a URL parameter
  
      const chefMenu = await ChefMenu.findById(id).populate('chef');
  
      if (!chefMenu) {
        return new NextResponse("Menu item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Menu successfully Updated",
          data: chefMenu,
        }),
        { status: 201 }
      );     } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef menu",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };
  