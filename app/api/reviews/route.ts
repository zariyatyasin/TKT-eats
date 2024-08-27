import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
 
import connect from "@/utils/db";
import Review from "@/model/reviews";

// Define the request body type
interface ReviewRequestBody {
  user: string; // ObjectId as a string for the user
  chef: string; // ObjectId as a string for the chef
  rating: number; // Rating value between 1 and 5
  comment: string; // Review comment text
}

// Define the POST request handler
export const POST = async (request: NextRequest) => {
  // Connect to the database
  await connect();

  try {
    // Parse the request body and type it as ReviewRequestBody
    const body: ReviewRequestBody = await request.json();

    // Create a new review document using the request body
    const newReview = new Review({
      user: body.user, // ObjectId of the user
      chef: body.chef, // ObjectId of the chef
      rating: body.rating, // Rating between 1 to 5
      comment: body.comment, // Review comment text
    });

    // Save the review to the database
    const savedReview = await newReview.save();

    // Return a success response with the saved review data
    return new NextResponse(JSON.stringify(savedReview), { status: 201 });
  } catch (error: any) {
    // Handle any errors and return an error response
    return new NextResponse("Error creating review: " + error.message, {
      status: 500,
    });
  }
};
