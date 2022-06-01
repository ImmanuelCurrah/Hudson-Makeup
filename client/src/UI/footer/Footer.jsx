import { navOptions } from "../nav-options/navOptions";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
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
