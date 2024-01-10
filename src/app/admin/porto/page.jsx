import React from "react";
import "../styles/porto.css";
import Card from "./Card";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="button">
          <Link href="admin/porto/add">
            Tambah Portofolio
          </Link>
        </button>
      </div>

      <div className="d-flex gap-4 flex-wrap mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default page;
