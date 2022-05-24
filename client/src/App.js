import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./screens/about/AboutMe";
import Home from "./screens/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
