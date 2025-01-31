import React from "react";

const Card = (props) => {
  return (
    // #FFF3BF
    <div
      className={`flex-[1] bg-[#dff4fa] drop-shadow-lg rounded-3xl ${
        props.isCompe && "mx-6 lg:mx-24"
      } align-center justify-center`}
    >
      <div className="sm:flex flex-1 items-center justify-between md:w-full mx-auto h-full flex-col">
        <div className="space-y-4 lg:text-2xl px-5 py-5 justify-center relative z-10 ">
          {props.children}
        </div>
        {props.isCompe && (
          <div className="lg:text-2xl px-5 pt-5 pb-12">
            <a
              href="/registration"
              className="border-2 rounded-full border-black text-[#E46871] p-1 md:px-4 md:py-2"
            >
              Register now!
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
