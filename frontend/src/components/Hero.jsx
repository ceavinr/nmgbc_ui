import React from "react";
import Event from "./Event";

function Hero() {
  return (
    <div className="min-h-screen w-screen bg-[#BFEEFF] pb-12">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-center font-Volkswagen">
        <div className="flex flex-col items-center gap-4">
          <img src="/img/hero.png" alt="" />
          <div className="flex gap-2 lg:gap-12 text-sm md:text-xl lg:text-2xl text-[#E46871]">
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
        <div className="-mr-52">
          <img className="" src="/img/hero-2.png" alt="" />
        </div>
      </div>

      <div className="divide-y-2 divide-[#FFCF4C] divide-dashed">
        <Event className="text-[#26C8FF]" link="about/#bio" odd={true}>
          <span>Biology Competition</span>
        </Event>
        <Event className="text-[#0BC8A4]" link="about/#bio">
          <span>Public Poster</span>
        </Event>
        <Event className="text-[#F98CD5]" link="about/#speech" odd={true}>
          <span>Speech</span>
        </Event>
        <Event className="text-[#E46862]" link="">
          Event
        </Event>
      </div>
    </div>
  );
}

export default Hero;
