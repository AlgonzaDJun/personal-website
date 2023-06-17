"use client";
import React from "react";
import "../css/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const About = () => {
  const isiCard = [
    {
      id: 1,
      judul: "Siapa Saya ?",
      deskripsi:
        "Perkenalkan, Nama saya, Algonza Dewangga Arjunantyo, biasa dipanggil arjun",
      image: "/images/thinking-bro.png",
      animation: "fade-up-right",
    },
    {
      id: 2,
      judul: "Pendidikan ?",
      deskripsi:
        "Saya berasal dari Universitas Negeri Surabaya, S1 Teknik Informatika Angkatan 2020 (Angkatan Corona😆)",
      image: "/images/Graduation-bro.png",
      animation: "fade-up",
    },
    {
      id: 3,
      judul: "Ketertarikan ?",
      deskripsi:
        "Saya tertarik di bidang web developer, full stack. Lebih ke arah backend, tapi terkadang suka frontend jika bosan.",
      image: "/images/Code-typing-bro.png",
      animation: "fade-up-left",
    },
  ];
  return (
    <div
      className="w-100 h-100 mt-md-4 d-block p-3 d-md-flex justify-content-md-center align-items-md-center flex-column about mb-5"
      id="about"
    >
      <div className="p-4 mt-5 mt-md-2">
        <div className="display-3 fw-bold about-text">
          <div>About Me</div>
        </div>
      </div>
      <div className="w-100 d-flex flex-wrap justify-content-around align-items-center mb-5 mb-md-3 gap-3">
        {/* <div className="mt-5">
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
        </div> */}
        {isiCard.map((item, index) => {
          return (
            <div
              key={item.id}
              className="mt-5"
              data-aos={item.animation}
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <div className="card border-0">
                <div
                  className="card-2 h-100 w-100 d-flex flex-column"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h4 className="judul-card fw-bold fs-3 mt-auto">
                    {item.judul}
                  </h4>
                </div>
                <div className="ps-4 card-desc">
                  <h5 className="lh-base">{item.deskripsi}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
