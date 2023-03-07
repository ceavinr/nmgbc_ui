import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Card from "../components/Card";

function Home() {
  return (
    <div className="min-h-screen bg-[#BFEEFF]">
      <Hero />

      <div className="flex w-screen flex-col">
        <div className="flex flex-col items-center px-20 font-Volkswagen py-12 ">
          <Card>
            <div className="flex flex-col items-center px-20 font-Volkswagen py-12">
              {/* <Title title={"Our Sponsors"} /> */}
              <h1>SPONSORED BY</h1>
              <img src="/img/pln.png" width={1024} alt="" />
              <img src="/img/bsi.jpg" width={512} alt="" />
            </div>
          </Card>
        </div>
        <div className="flex flex-col items-center px-20 font-Volkswagen py-12 ">
          <Card>
            <div className="flex justify-center items-center">
              <iframe
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
      </div>
    </div>
  );
}

export default Home;
