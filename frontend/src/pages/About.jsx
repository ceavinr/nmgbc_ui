import React from "react";
import Card from "../components/Card";
import Event2 from "../components/Event2";
import Rgb from "../components/Rgb";

function About() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[url('../public/img/bg.png')] bg-transparen pb-20 pt-1 font-Volkswagen">
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
        <section className="" id="bio">
          <div className="flex left-0 p-4 bg-white h-32 w-1/2 mb-14">
            <div className="inline-block rounded-full text-white bg-[#c9c6bc] ml-4 mr-8 px-6 py-4 my-4 text-3xl">1</div>
            <Rgb title="Biology" subtitle="competition"></Rgb>
          </div>
          <Card isCompe={true}>
            <div className="text-xs md:text-sm lg:text-xl text-[#2b3990] tracking-wider">
              <p>
                Biology competition is one of the competitions organized by
                NMGBC which includes four stages where each stage will filter
                the number of participants, with the topic of this competition
                will be the same as NMGBC's theme.
              </p>
              <br />
              <ul className="space-y-3">
                <li>
                  <span className="underline">Preliminary round</span>
                  <br /> Each team will work on Multiple Choice Question (MCQ)
                  simultaneously
                </li>
                <li>
                  <span className="underline">Semifinal round</span> <br />
                  Each team will answer some questions according to the post
                  where the post has limited amount of time and all of the post
                  will be taken on based on the rotation
                </li>
                <li>
                  <span className="underline">Final round</span> <br />
                  The team will travel around designated place to go to the post
                  where each post has questions with different value and cost to
                  answer
                </li>
                <li>
                  <span className="underline">Grand final</span> <br />
                  Quiz and Student Oral Case Analysis (SOCA) based on NMGBC 2023
                  theme
                </li>
              </ul>
            </div>
          </Card>
        </section>
        <section className="lg:px-52" id="poster">
          <h1 className="my-4 text-xl lg:text-3xl">Public Poster</h1>
          <Card isCompe={true}>
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
                  <span className="underline">Semifinal round</span> <br />
                  Poster presentation
                </li>
                <li>
                  <span className="underline">Final round</span> <br />
                  Offline campaign presentation
                </li>
              </ul>
            </div>
          </Card>
        </section>
        <section className="lg:px-52" id="speech">
          <h1 className="my-4 text-xl lg:text-3xl">Health Speech Contest</h1>
          <Card isCompe={true}>
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
                  <span className="underline">Semifinal round</span> <br />
                  Offline impromptu speech
                </li>
                <li>
                  <span className="underline">Final round</span> <br />
                  Offline speech and QnA session
                </li>
              </ul>
            </div>
          </Card>
        </section>
        <section className="lg:px-52" id="event">
          <h1 className="my-4 text-xl lg:text-3xl">Other Events</h1>
          <Card isCompe={false}>
            <div className="text-xs md:text-sm lg:text-xl">
              <ul className="space-y-3 divide-y-2 divide-[#FFCF4C] divide-dashed">
                <li className="py-1 md:py-2">
                  <span className="underline">Medical Seminar</span>
                  <br /> Dilaksanakan pada NMGBC 2023 Day 1, mata acara ini akan
                  dilaksanakan secara daring. Medical Seminar, selayaknya suatu
                  webinar, akan membawa topik seputar pertumbuhan dan
                  perkembangan anak dan bekerja sama dengan dokter spesialis
                  anak. Acara ini diadakan dengan tujuan agar para peserta NMGBC
                  2023 dapat mengikuti acara ini tidak hanya mengikuti lomba,
                  tetapi juga dapat menambah wawasan mereka.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline">Campus Tour</span> <br />
                  Campus Tour akan dilaksanakan di NMGBC 2023 Day 2, secara
                  luring. Para peserta akan diberikan kesempatan untuk
                  mengelilingi Kampus Depok Universitas Indonesia dengan
                  menggunakan bus. Peserta hanya akan turun di satu area, yaitu
                  Gedung Rektorat sebagai simbol utama UI. Kegiatan ini
                  bertujuan untuk mengenalkan para peserta dengan lingkungan UI
                  dan juga dapat mempromosikan UI itu sendiri.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline">Meet Your Doctor</span> <br />
                  Rangkaian acara ini akan dilaksanakan pada NMGBC 2023 Day 3,
                  secara luring. Peserta akan kami ajak untuk berpartisipasi
                  dalam empat situasi yang dapat dirasakan seorang dokter dalam
                  kesehariannya. Peserta akan berperan seolah-olah menjadi
                  seorang dokter yang harus menyelesaikan masalah dengan pihak
                  lain yang akan diperagakan oleh panitia dari NGBC 2023.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline">Workshop</span> <br />
                  Dilaksanakan juga secara luring, mata acara ini berada pada
                  NMGBC 2023 Day 3. Workshop akan memberikan pelatihan kepada
                  para peserta NMGBC 2023 mengenai pertumbuhan dan perkembangan
                  anak, khususnya mengenai cara skrining pertumbuhan dan
                  perkembangan anak-anak. Dalam pelatihannya, kami akan
                  menyediakan beberapa kasus yang harus peserta tentukan kondisi
                  gizi anak-anak dalam kasus tersebut.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline">Talkshow</span> <br />
                  Dilaksanakan juga secara luring, mata acara ini berada pada
                  NMGBC 2023 Day 3. Workshop akan memberikan pelatihan kepada
                  para peserta NMGBC 2023 mengenai pertumbuhan dan perkembangan
                  anak, khususnya mengenai cara skrining pertumbuhan dan
                  perkembangan anak-anak. Dalam pelatihannya, kami akan
                  menyediakan beberapa kasus yang harus peserta tentukan kondisi
                  gizi anak-anak dalam kasus tersebut.
                </li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default About;
