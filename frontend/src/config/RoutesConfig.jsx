import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import About from "../pages/About";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RoutesConfig;
