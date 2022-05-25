import { navOptions } from "../nav-options/navOptions";
import logo from "../../assets/logo/hudson-valley-makeup-logo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="h-48 bg-zinc-200 flex items-center">
      <div className="w-full flex flex-row justify-between mx-8 items-center">
        <div>
          {navOptions.map((navElement, index) => {
            return (
              <div
                className="flex flex-row justify-start cursor-pointer hover:text-white"
                key={index}
              >
                {navElement}
              </div>
            );
          })}
        </div>
        <div>
          <img
            onClick={() => {
              navigate("/");
            }}
            className="h-32 cursor-pointer mb-2"
            src={logo}
            alt="hands making a heart with name of artist underneath"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p>Woodstock, NY</p>
          <p>{`(914)-336-0733`}</p>
          <p className="cursor-pointer hover:text-white">
            sarahgfelder@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
