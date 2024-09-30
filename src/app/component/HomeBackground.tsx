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
      <div className="absolute bottom-1 left-3/4 z-20 text-8xl h-full">
        <div className="absolute top-[12%] right-[-1%] xl:right-[-5%] 2xl:right-[-55%] ml-auto mr-0">
          <nav>
            <ul
              className="flex justify-evenly text-base text-slate-100 border-b
            border-t h-10 p-2 w-screen shadow
    hover:backdrop-brightness-75
     active:backdrop-brightness-75"
            >
              <li className="text-slate-100 ">
                <a href="/" className="text-slate-100 ">
                  {" "}
                  КІМНАТИ
                </a>
              </li>
              <li className="">
                <a href="/" className="text-slate-100 ">
                  {" "}
                  ПРЕДМЕТИ
                </a>
              </li>
              <li className="">
                <a href="/" className="text-slate-100 ">
                  {" "}
                  БРЕНДИ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <svg className="w-full h-full z-50">
          <text
            style={{ transformOrigin: "55% 55%" }}
            className="sm:flex-none md:block rotate-90
             stroke-slate-400 font-custom animate-textAnimate"
            x="50%"
            y="60%"
            textAnchor="middle"
          >
            <tspan>F</tspan>
            <tspan>U</tspan>
            <tspan>R</tspan>
            <tspan>N</tspan>
            <tspan>I</tspan>
            <tspan>T</tspan>
            <tspan>U</tspan>
            <tspan>R</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default HomeBackground;
