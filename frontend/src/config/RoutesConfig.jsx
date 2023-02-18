import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import About from "../pages/About";
import Booklet from "../pages/Booklet";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/about" element={<About />} />
      <Route path="/booklet" element={<Booklet />} />
    </Routes>
  );
};

export default RoutesConfig;
