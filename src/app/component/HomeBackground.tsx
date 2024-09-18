import React from "react";
// import Video from "../../../public/home-video.mp4"

const HomeBackground: React.FC = () => {
  return (
    <div className="">
      <div
        className='w-full h-screen relative overflow-hidden 
      before:content-[""] before:absolute before:top-0 
    before:left-0 before:w-full before:h-full z-10 
    after:content-[""] after:absolute 
   before:opacity-30
    '
      >
        <video
          className="absolute top-1/2 left-1/2 w-full h-full
         object-cover -translate-x-1/2 -translate-y-1/2 -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute bottom-10 left-1/4 z-20">

      </div>
    </div>
  );
};

export default HomeBackground;
