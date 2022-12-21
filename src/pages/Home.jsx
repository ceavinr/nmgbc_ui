import React from "react";
import Hero from "../components/Hero";
import Event from "../components/Event";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <Hero />
      <div className="divide-y-2 divide-[#FFCF4C] divide-dashed">
        <Event odd={true}>Biology Competition</Event>
        <Event>Public Poster</Event>
        <Event odd={true}>Speech</Event>
        <Event>Event</Event>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
