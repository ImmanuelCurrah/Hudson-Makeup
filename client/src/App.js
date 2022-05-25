import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AboutMe from "./screens/about/AboutMe";
import Booking from "./screens/booking/Booking";
import Bridal from "./screens/bridal/Bridal";
import Home from "./screens/home/Home";
import Portfolio from "./screens/portfolio/Portfolio";
import loadingImage from "./assets/loading/loading.png";
import logo from "./assets/logo/hudson-valley-makeup-logo.png";

function App() {
  const [display, setDisplay] = useState(false);

  if (display) {
    return (
      <div className="w-screen flex flex-col items-center">
        <img src={logo} alt="logo for website" />
        <img
          className="h-24 animate-spin"
          src={loadingImage}
          alt="loading circle"
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home handleDisplay={setDisplay} />} />
        <Route
          path="/about%20me"
          element={<AboutMe handleDisplay={setDisplay} />}
        />
        <Route
          path="/booking"
          element={<Booking handleDisplay={setDisplay} />}
        />
        <Route path="/bridal" element={<Bridal handleDisplay={setDisplay} />} />
        <Route
          path="/portfolio"
          element={<Portfolio handleDisplay={setDisplay} />}
        />
      </Routes>
    </div>
  );
}

export default App;
