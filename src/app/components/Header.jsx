"use client";
import React, { Suspense } from "react";
import "../css/header.css";
import { HiHand } from "react-icons/hi";
import Spline from "@splinetool/react-spline";
// import Image from "next/image";

// const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Header() {
  return (
    <div className="w-100 h-100 mt-md-3 ">
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

              <div className="animate-wave">
                <HiHand height={500} />
              </div>
            </div>
            <div>Saya Arjun</div>
            <div>Software Developer</div>
          </div>
        </div>
        <div
          className="position-relative mt-2 w-100 d-md-flex align-items-center justify-content-center"
          style={{ padding: "1.75rem", textAlign: "center" }}
        >
          <div
            className="position-absolute rounded-circle shadow-lg latar-belakang"
            style={{ zIndex: "0", height: "350px", width: "300px" }}
          ></div>
          <div className="position-absolute">
            <div style={{ height: "384px" }}>
              {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Spline scene="https://prod.spline.design/7F8rkyLYHVlUx44t/scene.splinecode" />
              {/* </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
