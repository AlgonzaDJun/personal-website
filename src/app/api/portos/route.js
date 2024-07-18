import connectDB from "@/libs/mongodb";
import Porto from "@/models/porto";
import { NextResponse } from "next/server";
import multer from "multer";
import cloudinary from "@/libs/cloudinary";

export const POST = async (request) => {
  await connectDB();
  const data = await request.json();
  // let imageUrl = [];

  try {
    const { images } = data;

    const uploadPromises = images.map(async (image) => {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: "personal_website",
      });
      return { url: uploadedImage.secure_url };
    });

    const uploadedImages = await Promise.all(uploadPromises);

    const newData = {
      ...data,
      images: uploadedImages,
    };

    const porto = await Porto.create(newData);
    return NextResponse.json({
      message: "Porto created successfully",
      porto,
      // newData,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
};

export const GET = async (request) => {
  await connectDB();
  const portos = await Porto.find();
  return NextResponse.json({ portos });
};
