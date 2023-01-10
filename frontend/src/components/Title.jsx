import React from "react";

const Title = (props) => {
  return (
    <div className="inline-block mt-2">
      {props.title.split("").map((char, idx) => (
        <div
          className={`inline-block pr-1 md:pr-2 lg:pr-3 ${
            idx % 2 === 0 ? "-rotate-12" : "rotate-12"
          }`}
        >
          <h2
            className={`${
              idx % 6 === 0
                ? "text-[#8a69d4]"
                : idx % 6 === 1
                ? "text-[#fb4d44]"
                : idx % 6 === 2
                ? "text-[#03befe]"
                : idx % 6 === 3
                ? "text-[#00c59f]"
                : idx % 6 === 4
                ? "text-[#fdcc4d]"
                : "text-[#f98cd5]"
            } inline text-2xl md:text-5xl lg:text-7xl drop-shadow-lg`}
          >
            {char}
          </h2>
        </div>
      ))}
      {props.subtitle && (
        <h2 className="tracking-wider text-[#f79176] text-xl md:text-2xl lg:text-4xl pl-1">
          {props.subtitle}
        </h2>
      )}
    </div>
  );
};

export default Title;
