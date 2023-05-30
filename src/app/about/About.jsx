import React from "react";
import "../css/about.css";

export const About = () => {
  const isiCard = [
    {
      judul: "Siapa Saya ?",
      deskripsi: "Perkenalkan, Nama saya, Algonza Dewangga Arjunantyo",
    },
    {
      judul: "Pendidikan ?",
      deskripsi:
        "Universitas Negeri Surabaya, S1 Teknik Informatika Angkatan 2020(Angkatan Corona kwkwkw)",
    },
    {
      judul: "Ketertarikan ?",
      deskripsi:
        "Saya tertarik di bidang web developer, full stack. namun lebih ke arah backend, tapi suka frontend juga jika bosan.",
    },
  ];
  return (
    <div className="w-100 h-100 mt-md-4 d-block p-3 d-md-flex justify-content-md-center align-items-md-center flex-column about">
      <div className="p-4">
        <div className="display-3 fw-bold about-text">
          <div>About Me</div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        {isiCard.map((item, index) => {
          return (
            <div className="p-4 mt-5">
              <div className="card border-0">
                <div className="card-2">
                  <h4 className="">{item.judul}</h4>
                </div>
                <div className="ps-4 pt-4 pb-3" id="about">
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
