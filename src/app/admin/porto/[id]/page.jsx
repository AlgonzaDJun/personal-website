
import React from "react";
import Image from "./Image";
import connectDB from "@/libs/mongodb";
import Form from "./Form";

const getPorto = async (id) => {
  await connectDB();
  const response = await fetch(`http://localhost:3000/api/portos/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

const page = async ({ params }) => {

  const { id } = params;
  const data = await getPorto(id);
  const { portos } = data;

  return (
    <div style={{ color: "black" }}>
      <Form data={portos} />
    </div>
  );
};

export default page;
