import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Card from "../components/Card";

function Home() {
  return (
    <div className="min-h-screen bg-[#BFEEFF]">
      <Hero />

      <div className="flex w-screen flex-col">
        <div className="flex flex-col items-center lg:px-20 font-Volkswagen lg:py-12 ">
          <Card>
            <div className="flex justify-center items-center ">
              <iframe
                className="lg:w-[1024px] lg:h-[576px] md:w-[516px] md:h-[290.25px] w-[258px] h-[145.125px]"
                width="1024"
                height="576"
                src="https://www.youtube.com/embed/0lzPSDMh8_8?controls=0&title=0&rel=0&?modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Card>
        </div>
        <div className="flex flex-col items-center lg:px-20 font-Volkswagen py-12">
          <Card>
            <div className="flex flex-col items-center lg:px-20 font-Volkswagen lg:py-12">
              {/* <Title title={"Our Sponsors"} /> */}
              <h1 className="text-xs md:text-base">SPONSORED BY</h1>
              <div className="lg:w-[1024px] md:w-[516px] w-[258px]">
                <img src="/img/pln.png" alt="" />
              </div>
              <div className="lg:w-[512px] md:w-[258px] w-[129px]">
                <img src="/img/bsi.jpg" alt="" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
