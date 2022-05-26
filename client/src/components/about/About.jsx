import sarah from "../../assets/pictures/Sarah.jpeg";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-96 mt-8 mb-8 rounded-md"
        src={sarah}
        alt="a picture of a woman next to a lake a blue sky"
      />
      <p className=" mx-8 mb-8 font-IBM-Plex-Serif font-semibold">
        Are you a future bride who wants to bring out her natural beauty?
      </p>
      <p className=" mx-8 mb-8 font-IBM-Plex-Serif font-semibold">
        Are you health conscious?
      </p>
      <p className=" mx-8 mb-8 font-IBM-Plex-Serif font-semibold">
        Do you want to play and have a zero stress makeup experience?
      </p>
      <p className=" mx-8 mb-8 font-IBM-Plex-Serif font-semibold">
        Then you’re in the right place!
      </p>
      <p className=" mx-8 mb-8 font-IBM-Plex-Serif font-semibold">
        I am a clean makeup artist serving the Hudson Valley.
      </p>
      <p className=" mx-8 mb-8 font-IBM-Plex-Serif font-semibold">
        I’m here to help you glow from the inside out.
      </p>
    </div>
  );
}
