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
