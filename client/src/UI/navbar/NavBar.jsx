import { useNavigate } from "react-router-dom";
import { navOptions } from "../nav-options/navOptions";

export default function NavBar(props) {
  const navigate = useNavigate();

  return (
    <div className="h-32 bg-white flex flex-row justify-around items-end">
      {navOptions.map((navElement, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer mb-5 font-IBM-Plex-Serif border:none hover:border-b-2 border-black ease-in-out duration-75"
            onClick={() => {
              props.handleDisplay(true);
              setTimeout(() => {
                if (navElement === "Welcome") {
                  navigate("/");
                } else {
                  navigate(`/${navElement}`);
                }
                props.handleDisplay(false);
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
