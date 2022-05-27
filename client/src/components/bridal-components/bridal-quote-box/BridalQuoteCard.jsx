import React from "react";
import Button from "../../../UI/button/Button";

export default function BridalQuoteCard() {
  return (
    <div className="bg-zinc-300 w-screen">
      <div className="m-4">
        <h2 className="font-IBM-Plex-Serif text-xl">
          Ready to start your makeup Journey?
        </h2>
        <p className="font-IBM-Plex-Serif m-4 font-semibold">
          I am here to make your wedding the best it can be and fulfill your
          wildest dreams!
        </p>
        <div>
          <Button>Request a Quote!</Button>
        </div>
      </div>
    </div>
  );
}
