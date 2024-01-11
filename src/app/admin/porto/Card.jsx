"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({
  title,
  description,
  image = "https://i.ibb.co/gRpP2Lm/icons8-online-128.png",
  id,
}) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/portos/${id}`, {
      method: "DELETE",
    });
    toast.success("Berhasil Hapus Portofolio!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    router.refresh();
  };

  return (
    <div>
      <ToastContainer/>
      <div
        className="animate__animated animate bounce card "
        style={{
          width: "18rem",
        }}
      >
        <div className="container mt-3">
          <img src={image} className="card-img-top " alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title ms-1">{title}</h5>
          <p className="card-text ms-1">{description}</p>

          <Link
            href={{
              pathname: "/admin/porto/" + id,
            }}
            className="btn btn-primary mb-1 mt-1"
          >
            <div className="d-flex align-items-center gap-2">
              <MdModeEdit />
              Edit
            </div>
          </Link>
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-primary mb-1 mt-1 "
          >
            <div className="d-flex align-items-center gap-2">
              <MdDelete />
              Hapus
            </div>
          </button>
        </div>
        Ï
      </div>
    </div>
  );
};

export default Card;
