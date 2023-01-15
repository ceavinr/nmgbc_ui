import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Text from "../components/Text";

function About() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[url('../public/img/bg.png')] pb-1 md:pb-2 pt-1 font-Volkswagen flex flex-col items-center">
        <section className="lg:px-52 text-center mt-6 lg:mt-24 mb-12 max-w-[2000px]">
          <Card>
            <div className="mb-4 lg:mb-8">
              <Title title="About NMGBC 2023"></Title>
            </div>
            <p className="text-xs md:text-sm lg:text-xl font-Stanberry">
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
        <section className="my-7 max-w-[2000px]" id="bio">
          <div className="flex left-0 p-4 bg-white h-26 lg:h-40 w-screen lg:w-3/4 2xl:w-1/2 my-7">
            <div className="inline-block rounded-full text-white bg-[#c9c6bc] ml-2 lg:ml-4 mr-4 lg:mr-8 px-4 lg:px-6 py-2 lg:py-4 my-5 lg:my-8 text-xl md:text-2xl lg:text-3xl">
              1
            </div>
            <Title title="Biology" subtitle="competition"></Title>
          </div>
          <Card isCompe={true}>
            <Text
              id={0}
              text="Biology competition is one of the competitions organized by NMGBC
                              which includes four stages where each stage will filter the number of participants,
                              with the topic of this competition will be the same as NMGBC's theme."
            ></Text>
            <ul className="px-4 lg:px-20">
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#03befe] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  1
                </div>
                <span className="text-[#03befe] lg:text-4xl drop-shadow-lg">
                  Preliminary round
                </span>
                <Text
                  id={1}
                  text="Each team will work on Multiple Choice Question (MCQ) simultaneously"
                ></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#8a69d4] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  2
                </div>
                <span className="text-[#8a69d4] lg:text-4xl drop-shadow-lg">
                  Semifinal round
                </span>
                <Text
                  id={1}
                  text="Each team will answer some questions according to the post where the
                                  post has limited amount of time and all of the post will be taken on based
                                  on the rotation"
                ></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#f98cd5] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  3
                </div>
                <span className="text-[#f98cd5] lg:text-4xl drop-shadow-lg">
                  Final round
                </span>
                <Text
                  id={1}
                  text="The team will travel around designated place to go to the post where each
                                  post has questions with different value and cost to answer"
                ></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#f9d564] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  4
                </div>
                <span className="text-[#f9d564] lg:text-4xl drop-shadow-lg">
                  Grand final
                </span>
                <Text
                  id={1}
                  text="Quiz and Student Oral Case Analysis (SOCA) based on NMGBC 2023 theme"
                ></Text>
              </li>
            </ul>
          </Card>
        </section>
        <section className="my-7 max-w-[2000px]" id="poster">
          <div className="flex left-0 p-4 bg-white h-28 lg:h-40 w-screen lg:w-3/4 2xl:w-1/2 my-7">
            <div className="inline-block rounded-full text-white bg-[#c9c6bc] ml-2 lg:ml-4 mr-4 lg:mr-8 px-3 lg:px-6 py-2 lg:py-4 my-5 lg:my-8 text-xl md:text-2xl lg:text-3xl">
              2
            </div>
            <Title title="Public Poster" subtitle="competition"></Title>
          </div>
          <Card isCompe={true}>
            <Text
              id={0}
              text="NMGBC 2023 is the fourth year that the public poster competition
                is held. This year's competition invites participants to not
                only produce creative posters, but also create and participate
                in a social campaign. Our public poster competition holds three
                main values. which are Creative, Innovative, Solutive."
            ></Text>
            <ul className="px-4 lg:px-20">
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#03befe] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  1
                </div>
                <span className="text-[#03befe] lg:text-4xl drop-shadow-lg">
                  Preliminary round
                </span>
                <Text id={1} text="Online Poster scoring and voting"></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#8a69d4] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  2
                </div>
                <span className="text-[#8a69d4] lg:text-4xl drop-shadow-lg">
                  Semifinal round
                </span>
                <Text id={1} text="Poster presentation"></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#f98cd5] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  3
                </div>
                <span className="text-[#f98cd5] lg:text-4xl drop-shadow-lg">
                  Final round
                </span>
                <Text id={1} text="Offline campaign presentation"></Text>
              </li>
            </ul>
          </Card>
        </section>
        <section className="my-7 max-w-[2000px]" id="speech">
          <div className="flex left-0 p-4 bg-white h-28 lg:h-40 w-screen lg:w-3/4 2xl:w-1/2 my-7">
            <div className="inline-block rounded-full text-white bg-[#c9c6bc] ml-2 lg:ml-4 mr-4 lg:mr-8 px-3 lg:px-6 py-2 lg:py-4 my-5 lg:my-8 text-xl md:text-2xl lg:text-3xl">
              3
            </div>
            <Title title="Health Speech" subtitle="contest"></Title>
          </div>
          <Card isCompe={true}>
            <Text
              id={0}
              text="Health Speech Contest was first held in NMGBC 2022, henceforth
                marking NMGBC 2023 as the second year of its appearance.
                Comprised of three online and offline rounds, Health Speech
                Contest challenges individuals to present a speech derived from
                a previously researched paper in accordance with the
                committee-selected themes of Child Growth and Development."
            ></Text>
            <ul className="px-4 lg:px-20">
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#03befe] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  1
                </div>
                <span className="text-[#03befe] lg:text-4xl drop-shadow-lg">
                  Preliminary round
                </span>
                <Text id={1} text="Essay and video submission"></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#8a69d4] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  2
                </div>
                <span className="text-[#8a69d4] lg:text-4xl drop-shadow-lg">
                  Semifinal round
                </span>
                <Text id={1} text="Offline impromptu speech"></Text>
              </li>
              <li className="my-2">
                <div className="inline-block rounded-full text-white bg-[#f98cd5] lg:ml-4 mr-2 lg:mr-8 px-1.5 lg:px-6 lg:py-4 lg:text-3xl drop-shadow-lg">
                  3
                </div>
                <span className="text-[#f98cd5] lg:text-4xl drop-shadow-lg">
                  Final round
                </span>
                <Text id={1} text="Offline speech and QnA session"></Text>
              </li>
            </ul>
          </Card>
        </section>
        <section className="my-7 max-w-[2000px] mt-20 mx-48" id="event">
          <Card isCompe={false}>
            <div className="text-center">
              <Title title="Other Events"></Title>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-Stanberry">
              <ul className="space-y-3 divide-y-2 divide-[#FFCF4C] divide-dashed">
                <li className="py-1 md:py-2">
                  <span className="underline text-lg md:text-xl lg:text-2xl font-Volkswagen">
                    Medical Seminar
                  </span>
                  <br /> Dilaksanakan pada NMGBC 2023 Day 1, mata acara ini akan
                  dilaksanakan secara daring. Medical Seminar, selayaknya suatu
                  webinar, akan membawa topik seputar pertumbuhan dan
                  perkembangan anak dan bekerja sama dengan dokter spesialis
                  anak. Acara ini diadakan dengan tujuan agar para peserta NMGBC
                  2023 dapat mengikuti acara ini tidak hanya mengikuti lomba,
                  tetapi juga dapat menambah wawasan mereka.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline text-lg md:text-xl lg:text-2xl font-Volkswagen">
                    Campus Tour
                  </span>{" "}
                  <br />
                  Campus Tour akan dilaksanakan di NMGBC 2023 Day 2, secara
                  luring. Para peserta akan diberikan kesempatan untuk
                  mengelilingi Kampus Depok Universitas Indonesia dengan
                  menggunakan bus. Peserta hanya akan turun di satu area, yaitu
                  Gedung Rektorat sebagai simbol utama UI. Kegiatan ini
                  bertujuan untuk mengenalkan para peserta dengan lingkungan UI
                  dan juga dapat mempromosikan UI itu sendiri.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline text-lg md:text-xl lg:text-2xl font-Volkswagen">
                    Meet Your Doctor
                  </span>{" "}
                  <br />
                  Rangkaian acara ini akan dilaksanakan pada NMGBC 2023 Day 3,
                  secara luring. Peserta akan kami ajak untuk berpartisipasi
                  dalam empat situasi yang dapat dirasakan seorang dokter dalam
                  kesehariannya. Peserta akan berperan seolah-olah menjadi
                  seorang dokter yang harus menyelesaikan masalah dengan pihak
                  lain yang akan diperagakan oleh panitia dari NGBC 2023.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline text-lg md:text-xl lg:text-2xl font-Volkswagen">
                    Workshop
                  </span>{" "}
                  <br />
                  Dilaksanakan juga secara luring, mata acara ini berada pada
                  NMGBC 2023 Day 3. Workshop akan memberikan pelatihan kepada
                  para peserta NMGBC 2023 mengenai pertumbuhan dan perkembangan
                  anak, khususnya mengenai cara skrining pertumbuhan dan
                  perkembangan anak-anak. Dalam pelatihannya, kami akan
                  menyediakan beberapa kasus yang harus peserta tentukan kondisi
                  gizi anak-anak dalam kasus tersebut.
                </li>
                <li className="py-1 md:py-2">
                  <span className="underline text-lg md:text-xl lg:text-2xl font-Volkswagen">
                    Talkshow
                  </span>{" "}
                  <br />
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
