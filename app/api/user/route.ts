import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/model/user";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  // Connect to the database
  await connect();
  const { name,email, password } = await request.json();

 

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};



export const GET = async (request: Request) => {
  // Connect to the database
  await connect();
  
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
};