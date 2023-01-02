import React from "react";
import Card from "../components/Card";

function Event2() {
  return (
    <section className="flex flex-col items-center justify-center lg:my-32">
      <h1 className="text-2xl lg:text-5xl mb-5 font-bold">Events</h1>
      <div className="flex gap-4 md:gap-2 lg:gap-8 flex-col md:flex-row w-4/5 md:w-[650px] lg:w-3/4 justify-items-center text-base italic text-center lg:text-xl">
        <Card isEvent={true}>
          <h2 className="text-base md:text-xl lg:text-2xl">
            Biology Competition
          </h2>
          <p className="text-xs md:text-sm lg:text-xl">
            Biology competition adalah salah satu lomba yang diselenggarakan
            oleh NMGBC yang mana meliputi empat tahap dimana masing-masing tahap
            akan ada penyaringan jumlah peserta, tentu topik dari perlombaan ini
            adalah biologi.
          </p>
        </Card>

        <Card isEvent={true}>
          <h2 className="text-base md:text-xl lg:text-2xl">Public Poster</h2>
          <p className="text-xs md:text-sm lg:text-xl">
            NMGBC 2023 is the fourth year that the public poster competition is
            held. This year's competition invites participants to not only
            produce creative posters, but also create and participate in a
            social campaign. Our public poster competition holds three main
            values. which are Creative, Innovative, Solutive.
          </p>
        </Card>
        <Card isEvent={true}>
          <h2 className="text-base md:text-xl lg:text-2xl">
            Health Speech Contest
          </h2>
          <p className="text-xs md:text-sm lg:text-xl">
            Health Speech Contest was first held in NMGBC 2022, henceforth
            marking NMGBC 2023 as the second year of its appearance. Comprised
            of three online and offline rounds, Health Speech Contest challenges
            individuals to present a speech derived from a previously researched
            paper in accordance with the committee-selected themes of Child
            Growth and Development.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Event2;
