"use client";
import React, { useState } from "react";
import Image from "./Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "@tinymce/tinymce-react";

const Form = ({ data }) => {
  const [base64Images, setBase64Images] = useState([]); // State untuk menyimpan
  const [loadingUpload, setLoadingUpload] = useState("");

  const [portos, setPortos] = useState({
    title: data.title,
    description: data.description,
    images: data.images,
    webLink: data.webLink,
    gitLink: data.gitLink,
  });

  const handleChange = (e) => {
    setPortos({
      ...portos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // console.log(portos);
    // return;
    const dataSubmit = {
      ...portos,
      images: base64Images,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/portos/${data._id}`,
      {
        method: "PUT",
        body: JSON.stringify(dataSubmit),
      }
    );
    setLoadingUpload("loading");
    const coba = await response.json();
    setLoadingUpload("complete");
    toast.success("Berhasil Update Portofolio!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log(coba);
  };

  return (
    <div>
      <form action="">
        {loadingUpload === "complete" ? <ToastContainer /> : <></>}
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
            name="title"
            onChange={handleChange}
          />
        </div>

        <Image
          base64Images={base64Images}
          setBase64Images={setBase64Images}
          imagesLink={portos.images}
        />

        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">
            Deskripsi Portofolio
          </label>
          <Editor
            apiKey="12v7l0i8ghhs8s6bry98ospo2xag6879cjbpjzcdlkwzkorx"
            initialValue={portos.description}
            onChange={(evt) => {
              setPortos({
                ...portos,
                description: evt.target.getContent(),
              });
            }}
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
            name="gitLink"
            value={portos.gitLink}
            onChange={handleChange}
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
            name="webLink"
            value={portos.webLink}
            onChange={handleChange}
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

export default Form;
