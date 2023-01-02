import React from "react";

function About() {
  return (
    <>
      <div className="bg-[url('../public/img/cloudbox.png')] absolute bg-no-repeat bg-cover w-full min-h-screen">
        <div className="h-screen flex w-screen bg-[#BFEEFF] bg-transparen p-24 font-Volkswagen">
          <div className="bg-[#FFF3BF]d p-12 text-center">
            <h1 className="my-4 text-5xl">About NMGBC 2023</h1>
            <p className="text-xl">
              National Medical and General Biology Competition (NMGBC) is the
              biggest annual event held by Asian Medical Students' Association
              Universitas Indonesia (AMSA-UI). NMGBC gathers high school
              students from all around Indonesia, where they compete in several
              different competitions, namely the general & medical biology quiz,
              as well as the public poster and health speech contest. Each year,
              a specific theme regarding human health becomes the focus of the
              competition. This year's NMGBC brings up the novel theme of "Child
              Growth and Development". This issue still remains relevant for
              decades, and is still a major burden for the economy and
              healthcare of our beloved country, Indonesia. According to Studi
              Status Gizi Indonesia (SSGI) 2021, the prevalence of stunting in
              children is 24.4%, while underweight is 17%, and wasting is 7.1%.
              In hopes of increasing the knowledge and awareness of the
              community regarding these concerns, we have decided to delve
              deeper into this topic through NMGBC 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
