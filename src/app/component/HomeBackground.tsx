import React from "react";
// import Video from "../../../public/home-video.mp4"

const HomeBackground = () => {
  return (
    <div
  className='w-full h-screen relative before:content-[""] before:absolute before:top-0 
  before:left-0 before:w-full before:h-full before:z-10 before:opacity-50 
  after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-full after:bg-gradient-to-t after:from-black after:to-transparent'
>
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 -z-10"
        autoPlay
        loop
        muted
        playsInline poster="/home-video.mp4"
      >
        <source src="/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeBackground;
