 
 
 
 
import Chef from "@/model/chef";
import ChefMenu from "@/model/chefmenu";
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


export const GET = async (request: Request) => {
  await connect();

  try {
   
    
    const params = new URL(request.url);
    const searchParams = new URLSearchParams(params.search);
    
     
    const limitInt = parseInt(searchParams.get("limit") || "50");
    const pageInt = parseInt(searchParams.get("page") || "1");
    const searchQuery = searchParams.get("search") || "";
    const locationQuery =  searchParams.get("location") || "" 
    const cuisinesQuery = searchParams.get("cuisines") || "" 
    
 
 
    
    const cuisinesArray = cuisinesQuery ? cuisinesQuery.split(",").map(cuisine => cuisine.trim()) : [];

    const query: any = {};

    if (searchQuery) {
      query.$or = [
        { name: { $regex: searchQuery, $options: "i" } },
        { location: { $regex: searchQuery, $options: "i" } },
        { cuisines: { $regex: searchQuery, $options: "i" } }
      ];
    }

    if (locationQuery) {
      query.location = { $regex: locationQuery, $options: "i" };
    }
   

    if (cuisinesArray.length > 0) {
      query.cuisines = { $in: cuisinesArray.map(cuisine => new RegExp(cuisine, "i")) };
    }

    // Find chefs whose menus match the search query
    const menuChefs = await ChefMenu.find({
      name: { $regex: searchQuery, $options: "i" }
    }).distinct("chef");

   

    if (menuChefs.length > 0) {
      query.$or = query.$or || [];
      query.$or.push({ _id: { $in: menuChefs } });
    }
   
    const totalChefs = await Chef.countDocuments(query);
    const totalPages = Math.ceil(totalChefs / limitInt);

    const allChefs: Chef[] = await Chef.aggregate([
      {
        $addFields: {
          order: { $ifNull: ["$displayOrder", Number.MAX_SAFE_INTEGER] }
        }
      },
      {
        $match: query
      },
      { $sort: { order: 1 } },
      { $skip: (pageInt - 1) * limitInt },
      { $limit: limitInt }
    ]);

    const reviewCounts: ReviewCount[] = await Review.aggregate([
      {
        $group: {
          _id: "$chef",
          count: { $sum: 1 }
        }
      }
    ]);

    const chefsWithReviewCounts = allChefs.map((chef) => {
      const chefReviews = reviewCounts.find(
        (review) => review._id.toString() === chef._id.toString()
      );
      return {
        ...chef,
        reviewCount: chefReviews ? chefReviews.count : 0
      };
    });

    return new NextResponse(
      JSON.stringify({
        data: chefsWithReviewCounts,
        currentPage: pageInt,
        chefsPerPage: limitInt,
        totalChefs: totalChefs,
        totalPages: totalPages
      }),
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(`Error in fetching chefs: ${error.message}`, {
        status: 500
      });
    } else {
      return new NextResponse("Unknown error occurred", { status: 500 });
    }
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