import cloudinary from "@/libs/cloudinary";
import connectDB from "@/libs/mongodb";
import Porto from "@/models/porto";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  await connectDB();
  const portos = await Porto.findById(id);

  //   console.log({ id });
  return NextResponse.json({ portos });
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  await connectDB();
  const data = await request.json();

  const { images, ...DataWithoutImg } = data;

  if (images.length === 0) {
    const newData = {
      ...DataWithoutImg,
    };

    const newPorto = await Porto.findOneAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true }
    );

    return NextResponse.json({
      message: "Porto updated successfully without image",
      dataLama: data,
      newPorto,
    });
  } else {
    const uploadPromises = images.map(async (image) => {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: "personal_website",
      });
      return { url: uploadedImage.secure_url };
    });

    const uploadedImages = await Promise.all(uploadPromises);

    // data.image is array of string, uploadedImages is array of object, so we need to map it, but we need to make sure that the index is the same, if empty use the old one
    const newData = {
      ...data,
      images: uploadedImages.map((image, index) => {
        if (image.url) {
          return image;
        } else {
        }
        return data.images[index];
      }),
    };

    const newPorto = await Porto.findOneAndUpdate({ _id: id }, newData, {
      new: true,
    });

    return NextResponse.json({
      message: "Porto updated successfully",
      dataLama: data,
      newPorto,
    });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  await connectDB();
  const porto = await Porto.findByIdAndDelete(id);
  return NextResponse.json({ message: "Porto deleted successfully", porto });
};
