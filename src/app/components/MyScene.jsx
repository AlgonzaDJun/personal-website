"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Scene from "./Scene";

export const MyScene = () => {
  const Loading = () => (
    <div className="w-100 h-100 pt-5" style={{ minWidth: "360px" }}>
      <div className="custom-loader mt-5"></div>
    </div>
  );
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas shadows flat linear>
          <Scene />
          {/* <OrbitControls /> */}
        </Canvas>
      </Suspense>
    </>
  );
};
