"use client"
import React, { useState } from "react";
import Image from "./Image";
import connectDB from "@/libs/mongodb";

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

  const [porto, setPorto] = useState({
    title: "",
    description: "",
    gitLink: "",
    webLink: "",
  });

  return (
    <div style={{ color: "black" }}>
      <form action="">
        <div className="mb-3">
          <label htmlFor="judulPorto" className="form-label">
            Judul Portofolio
          </label>
          <input
            type="text"
            className="form-control"
            id="judulPorto"
            placeholder="Judul Portofolio anda"
            value={portos.title}
          />
        </div>

        <Image />

        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">
            Deskripsi Portofolio
          </label>
          <textarea className="form-control" id="deskripsi" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="linkGithub" className="form-label">
            Link Github
          </label>
          <input
            type="text"
            className="form-control"
            id="linkGithub"
            placeholder="wwww.github.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="linkLive" className="form-label">
            Link URL live apabila ada
          </label>
          <input
            type="text"
            className="form-control"
            id="linkLive"
            placeholder="name@example.com"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
