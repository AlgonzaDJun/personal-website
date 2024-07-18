"use client";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "./Image";
import { Editor } from "@tinymce/tinymce-react";

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
      {loadingUpload === "loading" ? (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "100",
          }}
        >
          <div
            className="spinner-border text-success"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      {loadingUpload === "complete" ? <ToastContainer /> : <></>}
      <h2>Tambah Portofolio</h2>
      <hr />
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
          {/* <textarea
            className="form-control"
            id="deskripsi"
            name="description"
            rows="3"
            value={form.description}
            onChange={handleOnChange}
          ></textarea> */}
          <Editor
            apiKey="12v7l0i8ghhs8s6bry98ospo2xag6879cjbpjzcdlkwzkorx"
            initialValue={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.getContent() })
            }
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
          />
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
