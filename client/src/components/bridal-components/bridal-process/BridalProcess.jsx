import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { RiNumber6 } from "react-icons/ri";
import Button from "../../../UI/button/Button";

export default function BridalProcess() {
  return (
    <div className="bg-zinc-200 w-screen flex flex-col items-center">
      <div className="m-4">
        <h2 className="font-IBM-Plex-Serif text-xl">My Process</h2>
      </div>
      <div className="m-4 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <RiNumber1 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
          <p className="font-IBM-Plex-Serif font-semibold">
            You’d fill out the inquire form. I can only take on smaller bridal
            parties.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiNumber2 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
          <p className="font-IBM-Plex-Serif font-semibold">
            I’d send you a quote based on your needs and we’d schedule a paid
            makeup trial.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiNumber3 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
          <p className="font-IBM-Plex-Serif font-semibold">
            During this trial we’d plan and try out your makeup look.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiNumber4 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
          <p className="font-IBM-Plex-Serif font-semibold">
            If you liked the trial, you’d put a 50% deposit or pay in full for
            the wedding makeup package.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiNumber5 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
          <p className="font-IBM-Plex-Serif font-semibold">
            The full amount is due 2 weeks before the wedding.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiNumber6 className="bg-zinc-400 h-16 w-16 rounded-full m-4" />
          <p className="font-IBM-Plex-Serif font-semibold">
            I’d come a few hours early and make your makeup a no stress,
            uplifting part of your day!
          </p>
        </div>
      </div>
      <div className="m-4">
        <Button>Get started!</Button>
      </div>
    </div>
  );
}
