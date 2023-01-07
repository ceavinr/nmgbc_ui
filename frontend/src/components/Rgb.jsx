import React from "react";

const Rgb = (props) => {
    return (
        <div className="md:text-xl lg:text-2xl inline-block">
            {props.title.split('').map((char, idx) => 
                <div className={`inline-block pr-3 ${
                    idx % 2 === 0 ? "-rotate-12" : "rotate-12"
                }`}>
                    <h2 className={`${
                        idx % 6 === 0 ? "text-[#8a69d4]" :
                        idx % 6 === 1 ? "text-[#fb4d44]" :
                        idx % 6 === 2 ? "text-[#03befe]" :
                        idx % 6 === 3 ? "text-[#00c59f]" :
                        idx % 6 === 4 ? "text-[#fdcc4d]" :
                        "text-[#f98cd5]"} inline text-xl lg:text-6xl`}>{char}
                    </h2>
                </div>
            )}
            {props.subtitle && (
                <h2 className="tracking-wider text-[#f79176] text-2xl pl-1">{props.subtitle}</h2>
            )}
        </div>
    );
}

export default Rgb;
