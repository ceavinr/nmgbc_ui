import React from "react";

const Text = (props) => {
    return (
        <div className={`text-xs md:text-sm lg:text-xl font-Stanberry ${props.id === 0 ? "bg-[#d0ebf9] text-[#2b3990] tracking-wider mx-4 lg:mt-6 lg:mb-12 px-6 py-8 rounded-3xl" : "ml-7 lg:ml-28"}`}>
            {props.text}
        </div>
    );
}

export default Text;
