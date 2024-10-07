/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const ImageBackground: React.FC = () => {
  return (
    <div 
    >
      <img
        src="/bg.webp"
        alt="bg-image"
        className="fixed top-1/2 left-1/2 w-full h-full
         object-cover -translate-x-1/2 -translate-y-1/2 -z-10"
      />
    </div>
  );
};

export default ImageBackground;
