import React from "react";
import { HashLink } from "react-router-hash-link";

function Event(props) {
  return (
    <div className={props.className}>
      <div className=" px-6 py-1 md:py-2 flex justify-center">
        <div className="flex justify-end items-center gap-2 max-w-[2000px] w-full">
          <div className="font-Volkswagen space-y-2">
            <h1 className="pr-[40px] md:pr-[55px] text-right md:text-xl xl:text-2xl">
              {props.children}
            </h1>
            <HashLink
              smooth
              to={props.link}
              className="underline text-sm md:text-base xl:text-xl md:text-right font-Stanberry"
            >
              <div className="text-right">learn more</div>
            </HashLink>
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
    </div>
  );
}

export default Event;
