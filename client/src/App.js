import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./screens/about/AboutMe";
import Booking from "./screens/booking/Booking";
import Bridal from "./screens/bridal/Bridal";
import Home from "./screens/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about%20me" element={<AboutMe />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bridal" element={<Bridal />} />
      </Routes>
    </div>
  );
}

export default App;
