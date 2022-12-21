import React from "react";

function Event(props) {
  return (
    <div className="bg-[#FFF3BF] px-6 py-1 md:py-2">
      <div className="flex justify-between md:justify-end items-center gap-2">
        <div className="font-Volkswagen space-y-2">
          <h1 className="md:text-right md:text-2xl">{props.children}</h1>
          <h2 className="text-sm md:text-xl md:text-right">Learn more</h2>
        </div>
        <div className="flex items-center">
          <img
            className={`w-[30px] h-[30px] md:w-[50px] md:h-[50px] transform -scale-x-100 ${
              props.odd && "invisible"
            }`}
            src="/img/footstep.jpg"
            alt=""
          />
          <img
            className={`w-[30px] h-[30px] md:w-[50px] md:h-[50px] ${
              !props.odd && "invisible"
            }`}
            src="/img/footstep.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Event;
