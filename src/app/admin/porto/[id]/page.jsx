import React from "react";
import Image from "./Image";

const page = ({ params }) => {
  const id = params.id;

  return (
    <div style={{ color: "black" }}>
      <form action="">
        <div className="mb-3">
          <label for="judulPorto" className="form-label">
            Judul Portofolio
          </label>
          <input
            type="text"
            className="form-control"
            id="judulPorto"
            placeholder="Judul Portofolio anda"
          />
        </div>

        <Image />

        <div className="mb-3">
          <label for="deskripsi" className="form-label">
            Deskripsi Portofolio
          </label>
          <textarea className="form-control" id="deskripsi" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label for="linkGithub" className="form-label">
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
          <label for="linkLive" className="form-label">
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
