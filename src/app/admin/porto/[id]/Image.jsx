"use client";
import { useState } from "react";

const Image = ({ base64Images, setBase64Images, imagesLink }) => {
  const handleFileUpload = (e, index) => {
    setViewFirstImg(true);
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = document.getElementById(`preview${index}`);
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // const newBase64Images = [...base64Images, reader.result];
      setBase64Images((prev) => {
        return [...prev, reader.result];
      });
    };
  };

  // const handleFileOld = (e) => {
  //   setViewFirstImg(true);
  //   // Handle aksi upload file di sini
  //   // Misalnya, Anda dapat menggunakan FormData untuk mengirim file ke server
  //   const file = e.target.files[0];
  //   const readerNew = new FileReader();

  //   // Menyiapkan pratinjau gambar sebelum diunggah
  //   readerNew.onload = function (event) {
  //     const img = document.getElementById(e.target.id);
  //     img.src = event.target.result;
  //   };

  //   // Membaca file sebagai URL
  //   readerNew.readAsDataURL(file);

  //   readerNew.onloadend = () => {
  //     const newImages = [...base64Images, readerNew.result];
  //     setBase64Images(newImages);
  //   };
  // };

  const imagesElements = imagesLink.map((image, index) => (
    <div key={index}>
      <img
        className="w-25"
        id={`preview${index}`}
        alt={`Preview${index}`}
        src={image.url}
      />
      <input
        type="file"
        name={`image${index}`}
        onChange={(e) => handleFileUpload(e, index)}
        className="form-control"
        id={`preview${index}`}
      />
    </div>
  ));

  const [images, setImages] = useState(imagesElements);
  const [viewFirstImg, setViewFirstImg] = useState(false);

  const handleAddImage = () => {
    // Menambah input field dan label baru untuk gambar
    const newIndex = images.length + 1;
    const newImages = [
      ...images,
      <div key={newIndex}>
        <img
          className="w-25"
          id={`preview${newIndex}`}
          alt={`Preview${newIndex}`}
        />
        <input
          type="file"
          name={`image${newIndex}`}
          onChange={(e) => handleFileUpload(e, newIndex)}
          className="form-control"
        />
      </div>,
    ];
    setImages(newImages);
  };

  // console.log(base64Images);

  return (
    <>
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
