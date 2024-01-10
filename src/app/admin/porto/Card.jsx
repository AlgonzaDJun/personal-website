import Link from "next/link";
import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

const Card = ({
  title,
  description,
  image = "https://i.ibb.co/gRpP2Lm/icons8-online-128.png",
  id
}) => {
  return (
    <div>
      <div
        className="animate__animated animate bounce card "
        style={{
          width: "18rem",
        }}
      >
        <div className="container mt-3">
          <img
            src={image}
            className="card-img-top "
            alt="..."
          />
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
          <a href="" className="btn btn-primary mb-1 mt-1 ">
            <div className="d-flex align-items-center gap-2">
              <MdDelete />
              Hapus
            </div>
          </a>
        </div>
        Ï
      </div>
    </div>
  );
};

export default Card;
