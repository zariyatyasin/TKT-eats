 
 
 
 
import Chef from "@/model/chef";
import Review from "@/model/reviews";
import connect from "@/utils/db";import { Types } from "mongoose";

import { NextResponse } from "next/server";
interface Chef {
  _id: Types.ObjectId; // or `string` if `_id` is a string
  name: string;
  bio: string;
  profileImage: string | null;
  experience: string;
  cuisines: string[];
  location: string;
  description: string;
  contact: {
    phone: string;
    email: string;
  };
  images: Array<{
    url: string;
    caption: string | null;
    altText: string | null;
  }>;
}

// Define the type for the review count aggregation result
interface ReviewCount {
  _id: Types.ObjectId; // The chef ID
  count: number;
}


export const GET = async () => {
  await connect();

  try {
    // Step 1: Get all chefs
    const allChefs: Chef[] = await Chef.find().lean();

    // Step 2: Get the count of reviews for each chef
    const reviewCounts: ReviewCount[] = await Review.aggregate([
      {
        $group: {
          _id: "$chef", // Group by the chef ID (assuming the field is called 'chef' in Review schema)
          count: { $sum: 1 }, // Count the number of reviews for each chef
        },
      },
    ]);

    // Step 3: Map review counts to chefs
    const chefsWithReviewCounts = allChefs.map((chef) => {
      const chefReviews = reviewCounts.find(
        (review) => review._id.toString() === chef._id.toString()
      );
      return {
        ...chef,
        reviewCount: chefReviews ? chefReviews.count : 0, // Add review count to each chef
      };
    });

    return new NextResponse(JSON.stringify({ data: chefsWithReviewCounts }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in fetching chefs: " + error.message, {
      status: 500,
    });
  }
};
export const POST = async (request: Request) => {
  // Connect to the database
  await connect();

  try {
    // Parse the request body to get the chef data
    const body = await request.json();

    // Create a new chef document using the request body
    const newChef = new Chef({
      name: body.name,
      bio: body.bio,
      profileImage: body.profileImage,
      experience: body.experience,
      cuisines: body.cuisines,
      location: body.location,
      description:body.description,
      contact: {
        phone: body.contact.phone,
        email: body.contact.email,
      },
      images:body.images,
      menus: body.menus,
    });

    // Save the chef to the database
    const savedChef = await newChef.save();

    // Return a success response with the saved chef data
    return new NextResponse(JSON.stringify(savedChef), { status: 201 });
  } catch (error: any) {
    // Handle any errors and return an error response
    return new NextResponse("Error creating chef: " + error.message, {
      status: 500,
    });
  }
};