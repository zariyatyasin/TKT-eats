import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/model/user";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  // Connect to the database
  await connect();
  const { email, password } = await request.json();

 

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
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