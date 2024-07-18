import React from "react";
import "../styles/porto.css";
import Card from "./Card";
import Link from "next/link";

const getPorto = async () => {
  const response = await fetch(`http://localhost:3000/api/portos/`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

const page = async () => {
  const data = await getPorto();
  const { portos } = data;

  // console.log(portos);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="button">
          <Link href="admin/porto/add">Tambah Portofolio</Link>
        </button>
      </div>

      <div className="d-flex gap-4 flex-wrap mt-4">
        {/* <Card /> */}
        {portos.length > 0 ? (
          portos.map((porto) => {
            return (
              <Card
                title={porto.title}
                description={porto.description}
                image={porto.images[0]?.url}
                id={porto._id}
              />
            );
          })
        ) : (
          <>loading...</>
        )}
      </div>
    </div>
  );
};

export default page;
