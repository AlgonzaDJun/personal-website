import connectDB from "@/libs/mongodb";
import Porto from "@/models/porto";
import { NextResponse } from "next/server";
import multer from "multer";
import cloudinary from "@/libs/cloudinary";

export const POST = async (request) => {
  const data = await request.json();

  const image = data.image;
  await connectDB();
  
  await Porto.create(data);
  return NextResponse.json({ message: "Porto created successfully" });
};

export const GET = async () => {
  await connectDB();
  const portos = await Porto.find();
  return NextResponse.json({ portos });
};
