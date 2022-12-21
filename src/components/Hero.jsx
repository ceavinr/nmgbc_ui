import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-screen bg-[#BFEEFF] pb-12">
      <Navbar />

      <div className="flex flex-col-reverse md:flex-row items-center justify-center font-Volkswagen">
        <div className="flex flex-col items-center gap-4">
          <img src="/img/hero.png" alt="" />
          <div className="flex gap-2 md:gap-12 text-sm md:text-xl lg:text-2xl text-[#E46871]">
            <a
              href="/registration"
              className="border-2 rounded-full border-black p-1 md:px-4 md:py-2"
            >
              Registration
            </a>
            <a
              href="/video"
              className="border-2 rounded-full border-black py-1 px-6 md:px-8 md:py-2"
            >
              Video
            </a>
          </div>
        </div>
        <div className="w-1/2 md:w-full lg:w-2/5">
          <img src="/img/hero-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
