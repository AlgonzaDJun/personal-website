// "use client";
import React, { Suspense } from "react";
import "../css/header.css";
import { HiHand } from "react-icons/hi";
import { MyScene } from "./MyScene";
// import Spline from "@splinetool/react-spline";
// import Image from "next/image";

// const Spline = React.lazy(() => import("@splinetool/react-spline"));
// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-100 h-100 pt-5" style={{ minWidth: "360px" }}>
//       <div className="custom-loader mt-5"></div>
//     </div>
//   ),
// });

export default function Header() {
  return (
    <div className="w-100 h-100 mt-md-5 mt-5">
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
            <div className="my-3">Saya Algonza Dewangga Arjunantyo</div>
            <div>Software Developer</div>
          </div>
        </div>
        <div
          className="position-relative mt-2 w-100 d-md-flex align-items-center justify-content-center"
          style={{ padding: "1.75rem", textAlign: "center" }}
        >
          <div
            className="position-absolute rounded-circle shadow-lg latar-belakang"
            style={{ zIndex: "0", height: "350px", width: "360px" }}
          ></div>
          <div className="position-absolute w-100">
            <div
              style={{
                height: "384px",
                zIndex: "1",
                maxWidth: "360px",
                maxHeight: "384px",
              }}
              className="spline mx-auto"
            >
              {/* <Suspense
                fallback={
                  <div
                    className="w-100 h-100 mt-5 display-1"
                    style={{ minWidth: "360px" }}
                  >
                    Loading...
                  </div>
                }
              > */}
              {/* <Spline scene="https://prod.spline.design/7F8rkyLYHVlUx44t/scene.splinecode" /> */}
              {/* </Suspense> */}
              <MyScene />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
