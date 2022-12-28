import React from "react";
import "./App.css";
import RoutesConfig from "./config/RoutesConfig";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen">
      <main>
        <Navbar />
        <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
}

export default App;
