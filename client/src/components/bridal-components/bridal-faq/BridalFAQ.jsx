import { GiVineFlower } from "react-icons/gi";

export default function BridalFAQ() {
  return (
    <div>
      <div className="m-4">
        <h2 className="font-IBM-Plex-Serif text-xl">FAQ</h2>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
      <div className="grid grid-cols-2 gap-16 m-4 phone:flex flex-col items-center">
        <div>
          <h3 className="font-IBM-Plex-Serif">Here is a test question</h3>
          <p className="font-IBM-Plex-Serif font-semibold">answer</p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">Question</h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            Here is another long drawn out sample text because I am super sick
            of using lorem crap over and over and I want to see something that
            makes sense in someway on the page
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">
            Here is a longer test question for length
          </h3>
          <p className="font-IBM-Plex-Serif font-semibold">answer</p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">Question</h3>
          <p className="font-IBM-Plex-Serif font-semibold">answer</p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">Question</h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            Here is a longer test answer for length to get an idea of what a
            real answer to a real question would look like on the page
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">Question</h3>
          <p className="font-IBM-Plex-Serif font-semibold">answer</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <GiVineFlower className="text-5xl m-4" />
      </div>
      <div className="flex flex-row items-center justify-center">
        <p className="font-IBM-Plex-Serif font-semibold mb-4">
          Have a question you don't see? Ask me
        </p>
        <p className="mb-4 font-IBM-Plex-Serif font-semibold ml-1 cursor-pointer border-b border-black hover:text-zinc-400">
          here.
        </p>
      </div>
    </div>
  );
}
