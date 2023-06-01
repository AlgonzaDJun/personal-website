"use client";
import React, { useState } from "react";
import "../css/about.css";

export const About = () => {
  const [cardDesc, setCardDesc] = useState(false)

  const isiCard = [
    {
      judul: "Siapa Saya ?",
      deskripsi: "Perkenalkan, Nama saya, Algonza Dewangga Arjunantyo",
      image: "/images/thinking-bro.png",
    },
    {
      judul: "Pendidikan ?",
      deskripsi:
        "Universitas Negeri Surabaya, S1 Teknik Informatika Angkatan 2020(Angkatan Corona kwkwkw)",
      image: "/images/Graduation-bro.png",
    },
    {
      judul: "Ketertarikan ?",
      deskripsi:
        "Saya tertarik di bidang web developer, full stack. namun lebih ke arah backend, tapi suka frontend juga jika bosan.",
      image: "/images/Code-typing-bro.png",
    },
  ];
  return (
    <div className="w-100 h-100 mt-md-4 d-block p-3 d-md-flex justify-content-md-center align-items-md-center flex-column about">
      <div className="p-4">
        <div className="display-3 fw-bold about-text">
          <div>About Me</div>
        </div>
      </div>
      <div className="w-100 d-flex flex-wrap justify-content-around align-items-center">
        <div className="mt-5">
          <div
            className="card border-0"
          >
            <div
              className="card-2 h-100 w-100 d-flex flex-column"
              style={{ backgroundImage: `url(${isiCard[0].image})` }}
            >
              <h4 className="judul-card fw-bold fs-3 mt-auto">
                {isiCard[0].judul}
              </h4>
            </div>
            <div className="ps-4 card-desc">
              <h5 id="about" className="lh-base">
                {isiCard[0].deskripsi}
              </h5>
            </div>
          </div>
        </div>
        {/* {isiCard.map((item, index) => {
          return (
            <div key={index} className="p-4 mt-5">
              <div className="card border-0">
                <div
                  className="card-2"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h4 className="">{item.judul}</h4>
                </div>
                <div className="ps-4 pt-4 pb-3">
                  <h5 id="about" className="lh-base">
                    {item.deskripsi}
                  </h5>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
