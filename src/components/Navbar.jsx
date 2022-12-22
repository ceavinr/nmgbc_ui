import React from "react";

function Navbar() {
  return (
    <div className="font-Volkswagen text-white w-screen flex justify-between h-12 md:h-20 items-center md:px-24 px-6 bg-[#B59DED]">
      <div className="w-[40px] md:w-[60px]">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="flex gap-6 text-xs md:text-xl lg:text-2xl">
        <a href="/">About</a>
        <a href="/registration">Registration</a>
        <a href="/booklet">Booklet</a>
      </div>
    </div>
  );
}

export default Navbar;
