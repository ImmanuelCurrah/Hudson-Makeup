import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { RiNumber6 } from "react-icons/ri";
import Button from "../../../UI/button/Button";

export default function BridalProcess() {
  return (
    <div className="bg-zinc-200 w-screen">
      <div className="m-4">
        <h2 className="font-IBM-Plex-Serif text-xl">My Process</h2>
      </div>
      <div className="m-4 flex flex-col items-start">
        <RiNumber1 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
        <RiNumber2 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
        <RiNumber3 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
        <RiNumber4 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
        <RiNumber5 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
        <RiNumber6 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
      </div>
      <div className="m-4">
        <Button>Get started!</Button>
      </div>
    </div>
  );
}
