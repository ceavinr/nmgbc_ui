import React, { useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";

function Booklet() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[url('../public/img/bg.png')] pb-1 md:pb-2 pt-1 font-Volkswagen flex flex-col items-center">
        <section className="lg:px-52 text-center mt-6 lg:mt-24 mb-12 max-w-[2000px]">
          <Card>
            <div className="mb-4 lg:mb-8">
              <Title title="Booklet"></Title>
            </div>
            <div className="w-[240px] h-[320px] md:w-[520px] md:h-[720px]">
              <iframe
                src="https://drive.google.com/file/d/12sjVroWnpR-WbnYefIVCz-c5AKonjnQn/preview"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Booklet;
