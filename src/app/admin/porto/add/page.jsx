"use client";
import React, { useState } from "react";
import Image from "../[id]/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [base64Images, setBase64Images] = useState([]); // State untuk menyimpan

  const [loadingUpload, setLoadingUpload] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    gitLink: "",
    webLink: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const dataSubmit = {
      ...form,
      images: base64Images,
    };

    const response = await fetch(`http://localhost:3000/api/portos`, {
      method: "POST",
      body: JSON.stringify(dataSubmit),
    });
    setLoadingUpload("loading");
    const data = await response.json();
    setLoadingUpload("complete");
    toast.success("Berhasil Upload Portofolio!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // console.log(data);
    setForm({
      title: "",
      description: "",
      gitLink: "",
      webLink: "",
    });
  };

  return (
    <div style={{ color: "black" }} className="position-relative">
      {loadingUpload === "complete" ? <ToastContainer /> : <></>}
      <form action="" encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="judulPorto" className="form-label">
            Judul Portofolio
          </label>
          <input
            type="text"
            className="form-control"
            id="judulPorto"
            placeholder="Judul Portofolio anda"
            value={form.title}
            name="title"
            onChange={handleOnChange}
          />
        </div>

        <Image base64Images={base64Images} setBase64Images={setBase64Images} />

        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">
            Deskripsi Portofolio
          </label>
          <textarea
            className="form-control"
            id="deskripsi"
            name="description"
            rows="3"
            value={form.description}
            onChange={handleOnChange}
          ></textarea>
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
            value={form.gitLink}
            name="gitLink"
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="linkLive" className="form-label">
            Link URL live
          </label>
          <input
            type="text"
            className="form-control"
            id="linkLive"
            placeholder="name@example.com"
            value={form.webLink}
            name="webLink"
            onChange={handleOnChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
