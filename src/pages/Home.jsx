import React from "react";
import Hero from "../components/Hero";
import Event from "../components/Event";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="divide-y-2 divide-[#FFCF4C] divide-dashed">
        <Event odd={true}>Biology Competition</Event>
        <Event>Public Poster</Event>
        <Event odd={true}>Speech</Event>
        <Event>Event</Event>
      </div>
    </div>
  );
}

export default Home;
