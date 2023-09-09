"use client";
// import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import "../css/profile.css";
// import Scene from "./Scene";
import Image from "next/image";

export const MyScene = () => {
  const Loading = () => (
    <div className="w-100 h-100 pt-5" style={{ minWidth: "360px" }}>
      <div className="custom-loader mt-5"></div>
    </div>
  );
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Image
          src="/images/arjuna.png"
          height={200}
          width={200}
          className="image-profile"
          style={{ margin: "auto" }}
        />
        {/* <Canvas shadows flat linear> */}
        {/* <Scene /> */}
        {/* <OrbitControls /> */}
        {/* </Canvas> */}
      </Suspense>
    </>
  );
};
