import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navOptions } from "../nav-options/navOptions";
import loadingImage from "../../assets/loading/loading.png";
import logo from "../../assets/logo/hudson-valley-makeup-logo.png";

export default function NavBar() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (loading) {
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
    <div className="h-32 bg-white flex flex-row justify-around items-end">
      {navOptions.map((navElement, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer mb-5 font-IBM-Plex-Serif border:none hover:border-b-2 border-black ease-in-out duration-75"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                if (navElement === "Welcome") {
                  navigate("/");
                } else {
                  navigate(`/${navElement}`);
                }
              }, 1000);
            }}
          >
            {navElement}
          </div>
        );
      })}
    </div>
  );
}
