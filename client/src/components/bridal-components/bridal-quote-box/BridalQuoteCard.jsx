import React from "react";
import Button from "../../../UI/button/Button";
import bride from "../../../assets/bridal-filler-pics/quote-box-bride.jpeg";

export default function BridalQuoteCard(props) {
  return (
    <div className="bg-zinc-300 w-screen flex flex-col items-center">
      <div className="m-4 flex flex-col items-center">
        <h2 className="font-IBM-Plex-Serif text-xl">
          Ready to start your makeup Journey?
        </h2>
        <img
          className="m-4 w-96 rounded-md"
          src={bride}
          alt="a man putting a wedding ring on a womans finger"
        />
        <p className="font-IBM-Plex-Serif m-4 font-semibold">
          I am here to make your wedding the best it can be and fulfill your
          wildest dreams!
        </p>
        <div>
          <Button handleDisplay={props.handleDisplay} whereTo="booking">
            Request a Quote!
          </Button>
        </div>
      </div>
    </div>
  );
}
