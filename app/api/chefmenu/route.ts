import connect from "@/utils/db";
import { NextResponse } from "next/server";
 
import { Types } from "mongoose";
import Chef from "@/model/chef";  // Import the Chef model
import ChefMenu from "@/model/chefmenu";

 

const ObjectId = Types.ObjectId;

export const POST = async (request: Request) => {
  // Connect to the database
  await connect();

  try {
    // Parse the request body to get the chef menu data
    const body = await request.json();

    // Create a new ChefMenu document using the request body
    const newChefMenu = new ChefMenu({
      chef: body.chef, // Reference to the Chef
      name: body.name, // Name of the menu item
      description: body.description, // Description of the menu item
      price: body.price, // Price of the menu item
      ingredients: body.ingredients, // Array of ingredients
      category: body.category,
      menuImage: body.menuImage, // Image of the menu item
      dietaryPreferences: body.dietaryPreferences, // Array of dietary preferences
      mealType: body.mealType, // Type of meal
    });

    // Save the ChefMenu to the database
    const savedChefMenu = await newChefMenu.save();

    // Return a success response with the saved chef menu data
    return new NextResponse(
      JSON.stringify({
        message: "Chef menu created successfully",
        data: savedChefMenu,
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
export const GET = async (request: Request) => {
    // Connect to the database
    await connect();
  
    try {
       
      const savedChefMenus = await ChefMenu.find().populate("chef");
  
      // Return the fetched and populated chef menus
      return new NextResponse(JSON.stringify(savedChefMenus), { status: 200 });
    } catch (error: any) {
      // Handle any errors and return an error response
      return new NextResponse("Error fetching chef menus: " + error.message, {
        status: 500,
      });
    }
  };
  
