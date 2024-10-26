import CustomMenu from "@/model/custommenu";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  // Connect to the database
  await connect();

  try {
    // Parse the request body to get the custom menu data
    const body = await request.json();

    // Create a new CustomMenu document using the request body
    const newCustomMenu = new CustomMenu({
      requestType: body.requestType,
      mealType: body.mealType,
      bookingDate: body.bookingDate,
      bookingTime: body.bookingTime,
      additionalNotes: body.additionalNotes,
      dietaryRestrictions: body.dietaryRestrictions,
      preparationPreferences: body.preparationPreferences,
      foodStyle: body.foodStyle,
      allergies: body.allergies,
      preferredIngredients: body.preferredIngredients,
      mealsPerWeek: body.mealsPerWeek,
      servingsPerMeal: body.servingsPerMeal,
      mealPrepFrequency: body.mealPrepFrequency,
      cuisineType: body.cuisineType,
      menuTheme: body.menuTheme,
      budget: body.budget,
      guestCount: body.guestCount,
      chefId: body.chefId, // Add chefId from the request body
      chefName: body.chefName, // Add chefName from the request body
      name: body.name, // Add name from the request body
      email: body.email, // Add email from the request body
      phone: body.phone, // Add phone from the request body
      address: body.address, // Add address from the request body
    });

    // Save the CustomMenu to the database
    const savedCustomMenu = await newCustomMenu.save();

    // Return a success response with the saved custom menu data
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Custom menu created successfully",
        data: savedCustomMenu,
      }),
      { status: 201 }
    );
  } catch (error: any) {
    // Handle any errors and return an error response
    return NextResponse.json(
      { 
        success: false,
        message: error.message 
      },
      { status: 500 }
    );
  }
};