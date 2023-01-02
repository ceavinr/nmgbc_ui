import React from "react";
import Card from "../components/Card";
import Event2 from "../components/Event2";

function About() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#BFEEFF] bg-transparen lg:p-24 pb-20 pt-1 px-8 font-Volkswagen">
        <section className="lg:px-52 text-center my-12">
          <h1 className="my-4 text-2xl lg:text-5xl">About NMGBC 2023</h1>
          <Card>
            <p className="text-xs md:text-sm lg:text-xl">
              National Medical and General Biology Competition (NMGBC) is the
              biggest annual event held by Asian Medical Students' Association
              Universitas Indonesia (AMSA-UI). NMGBC gathers high school
              students from all around Indonesia, where they compete in several
              different competitions, namely the general & medical biology quiz,
              as well as the public poster and health speech contest.
              <br />
              <br />
              Each year, a specific theme regarding human health becomes the
              focus of the competition. This year's NMGBC brings up the novel
              theme of "Child Growth and Development". This issue still remains
              relevant for decades, and is still a major burden for the economy
              and healthcare of our beloved country, Indonesia. According to
              Studi Status Gizi Indonesia (SSGI) 2021, the prevalence of
              stunting in children is 24.4%, while underweight is 17%, and
              wasting is 7.1%. In hopes of increasing the knowledge and
              awareness of the community regarding these concerns, we have
              decided to delve deeper into this topic through NMGBC 2023
            </p>
          </Card>
        </section>
        <section className="lg:px-52" id="bio">
          <h1 className="my-4 text-xl lg:text-3xl">Biology Competition</h1>
          <Card isEvent={true}>
            <div className="text-xs md:text-sm lg:text-xl">
              <p>
                Biology competition adalah salah satu lomba yang diselenggarakan
                oleh NMGBC yang mana meliputi empat tahap dimana masing-masing
                tahap akan ada penyaringan jumlah peserta, tentu topik dari
                perlombaan ini adalah biologi.
              </p>
              <br />
              <ul className="space-y-3">
                <li>
                  <span className="underline">Preliminary round</span>
                  <br /> Multiple Choice Question: 1 team akan mengerjakan
                  secara bergantian
                </li>
                <li>
                  <span className="underline">Semi final</span> <br />
                  Teng-teng Quiz: Setiap peserta akan mengerjakan sesuai pos
                  yang mana 1 pos memiliki waktu pengerjaan selama 1 menit
                </li>
                <li>
                  <span className="underline">Final</span> <br />
                  Reli Quiz: Tim akan berkeliling di lingkungan Rumpun Ilmu
                  Kesehatan untuk menuju pos yang mana tiap pos terdapat soal
                  dengan bobot nilai berbeda
                </li>
                <li>
                  <span className="underline">Grand final</span> <br />
                  Cerdas cermat dan presentasi kasus dengan tema Tumbuh Kembang
                </li>
              </ul>
            </div>
          </Card>
        </section>
        <section className="lg:px-52" id="poster">
          <h1 className="my-4 text-xl lg:text-3xl">Public Poster</h1>
          <Card isEvent={true}>
            <div className="text-xs md:text-sm lg:text-xl">
              <p>
                NMGBC 2023 is the fourth year that the public poster competition
                is held. This year's competition invites participants to not
                only produce creative posters, but also create and participate
                in a social campaign. Our public poster competition holds three
                main values. which are Creative, Innovative, Solutive.
              </p>
              <br />
              <ul className="space-y-3">
                <li>
                  <span className="underline">Preliminary round</span>
                  <br /> Online Poster scoring and voting
                </li>
                <li>
                  <span className="underline">Semi final</span> <br />
                  Poster presentation
                </li>
                <li>
                  <span className="underline">Final</span> <br />
                  Offline campaign presentation
                </li>
              </ul>
            </div>
          </Card>
        </section>
        <section className="lg:px-52" id="speech">
          <h1 className="my-4 text-xl lg:text-3xl">Health Speech Contest</h1>
          <Card isEvent={true}>
            <div className="text-xs md:text-sm lg:text-xl">
              <p>
                Health Speech Contest was first held in NMGBC 2022, henceforth
                marking NMGBC 2023 as the second year of its appearance.
                Comprised of three online and offline rounds, Health Speech
                Contest challenges individuals to present a speech derived from
                a previously researched paper in accordance with the
                committee-selected themes of Child Growth and Development.
              </p>
              <br />
              <ul className="space-y-3">
                <li>
                  <span className="underline">Preliminary round</span>
                  <br /> Essay and video submission
                </li>
                <li>
                  <span className="underline">Semi final</span> <br />
                  Offline impromptu speech
                </li>
                <li>
                  <span className="underline">Final</span> <br />
                  Offline speech and QnA session
                </li>
              </ul>
            </div>
          </Card>
        </section>
        {/* <Event2 /> */}
      </div>
    </>
  );
}

export default About;
