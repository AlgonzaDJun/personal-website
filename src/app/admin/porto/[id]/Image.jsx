"use client";
import { useState } from "react";

const Image = ({ base64Images, setBase64Images, imagesLink }) => {

  const handleFileUpload = (e) => {
    setViewFirstImg(true);
    // Handle aksi upload file di sini
    // Misalnya, Anda dapat menggunakan FormData untuk mengirim file ke server
    const file = e.target.files[0];
    const reader = new FileReader();

    // Menyiapkan pratinjau gambar sebelum diunggah
    reader.onload = function (event) {
      const img = document.getElementById(`preview${images.length}`);
      img.src = event.target.result;
      //   const base64Image = event.target.result;
      //   const newImages = [...base64Images, base64Image];
      //   setBase64Images(newImages);
    };

    // Membaca file sebagai URL
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const newImages = [...base64Images, reader.result];
      setBase64Images(newImages);
    };
  };

  const [images, setImages] = useState([
    imagesLink.map((images, index) => (
      <div key={index}>
        <img
          className="w-25"
          id={`preview${images.length}`}
          alt={`Preview${images.length}`}
          src={images.url}
        />
        <input
          type="file"
          name={`image${images.length}`}
          onChange={handleFileUpload}
          className="form-control"
        />
      </div>
    )),
  ]); // State untuk menyimpan gambar yang diunggah
  const [viewFirstImg, setViewFirstImg] = useState(false);

  const handleAddImage = () => {
    // Menambah input field dan label baru untuk gambar
    const newImages = [
      ...images,
      <div key={images.length}>
        <img
          className="w-25"
          id={`preview${images.length}`}
          alt={`Preview${images.length}`}
        />
        <input
          type="file"
          name={`image${images.length}`}
          onChange={handleFileUpload}
          className="form-control"
        />
      </div>,
    ];
    setImages(newImages);
  };

  // console.log(base64Images);

  return (
    <>
      {/* <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Input Gambar
        </label>
        <img
          id={`preview${images.length}`}
          alt={`Preview${images.length}`}
          className={viewFirstImg ? "w-25" : "d-none"}
        />
        <input
          type="file"
          name={`image${images.length}`}
          onChange={handleFileUpload}
          className="form-control"
        />
      </div> */}
      {images.map((image, index) => (
        <div key={index}>
          {image}
          <label className="form-label" htmlFor={`image${index}`}>
            Gambar {index + 1}
          </label>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleAddImage}
      >
        Tambah Gambar
      </button>
      <input
        type="file"
        name="image"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
    </>
  );
};

export default Image;
