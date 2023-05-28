import React from "react";
import "../css/header.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-100 h-100">
      <div
        className="d-block d-md-flex h-100 w-100 flex-row align-items-center justify-content-center"
        style={{ padding: "1.25rem" }}
      >
        <div
          className="h-100 w-100 fw-bold text-4xl md:text-5xl md:mx-auto md:pl-36 space-y-3 justify-content-center align-items-center d-flex flex-column text-start"
          style={{ padding: "1.75rem" }}
        >
          <div>
            <div className="d-flex align-items-center">
              <div>Hai</div>
              <div className="animate-wave">👋</div>
            </div>
            <div>Saya Arjun</div>
            <div>Software Developer</div>
          </div>
        </div>
        <div
          className="position-relative mt-2 w-100 d-md-flex align-items-center justify-content-center"
          style={{ padding: "1.75rem", textAlign:'center'}}
        >
          <div
            className="position-absolute rounded-circle shadow-lg"
            style={{ zIndex: "0", height: "384px", width: "300px" }}
          ></div>
          <div className="position-absolute">
            <img
              src="https://www.pngmart.com/files/3/Man-PNG-File.png"
              className=""
              style={{ height: "384px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
