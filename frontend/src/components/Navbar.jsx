import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`font-Volkswagen text-white w-screen flex justify-center h-12 md:h-20 items-center ${
        location.pathname === "/" ? "bg-[#BFEEFF]" : "bg-[#b7dbf8]"
      }`}
    >
      <img
        className="absolute w-screen h-20 md:h-32 lg:h-40"
        src="/img/cloud-navbar.png"
        alt=""
      ></img>
      <div className="flex justify-between items-center w-full max-w-[2000px]">
        <div className="flex md:ml-8 ml-4 gap-2 lg:gap-4 cursor-pointer">
          <div
            className="relative w-[40px] md:w-[60px]"
            onClick={() => navigate("/")}
          >
            <img src="/img/logo.png" alt="" />
          </div>
          <div
            className="relative w-[40px] md:w-[60px]"
            onClick={() => navigate("/")}
          >
            <img src="/img/amsa_ui.png" alt="" />
          </div>
        </div>
        <div className="relative flex md:mr-14 mr-4 gap-6 text-xs md:text-xl lg:text-2xl font-Stanberry">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/registration">Registration</a>
          <a href="https://bit.ly/GuidelineNMGBC2023" target={"blank"}>
            Booklet
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
