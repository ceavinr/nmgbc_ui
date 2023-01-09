import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`font-Volkswagen text-white w-screen flex justify-between h-12 md:h-20 items-center ${
        location.pathname === "/" ? "bg-[#BFEEFF]" : "bg-[#b7dbf8]"
      }`}
    >
      <img
        className="absolute w-screen h-20 md:h-32 lg:h-40"
        src="/img/cloud-navbar.png"
        alt=""
      ></img>
      <div
        className="relative md:ml-8 ml-4 w-[40px] md:w-[60px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="relative flex md:mr-14 mr-4 gap-6 text-xs md:text-xl lg:text-2xl font-Stanberry">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/registration">Registration</a>
        <a href="/booklet">Booklet</a>
      </div>
    </div>
  );
}

export default Navbar;
