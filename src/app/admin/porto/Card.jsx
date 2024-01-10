import Link from "next/link";
import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

const Card = () => {
  return (
    <div>
      <div
        class="animate__animated animate bounce card "
        style={{
          width: "18rem",
        }}
      >
        <div class="container mt-3">
          <img
            src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
            class="card-img-top "
            alt="..."
          />
        </div>
        <div class="card-body">
          <h5 class="card-title ms-1">Judul Portofolio</h5>
          <p class="card-text ms-1">
            See more bootstrap code snippets on my website
          </p>

          <Link
            href={{
              pathname: "/admin/porto/" + 1,
            }}
            class="btn btn-primary mb-1 mt-1"
          >
            <div className="d-flex align-items-center gap-2">
              <MdModeEdit />
              Edit
            </div>
          </Link>
          <a href="" class="btn btn-primary mb-1 mt-1 ">
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
