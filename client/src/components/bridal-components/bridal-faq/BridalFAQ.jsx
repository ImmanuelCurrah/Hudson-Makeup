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
          <h3 className="font-IBM-Plex-Serif">
            What is the biggest party you can do?
          </h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            The max group I can do is around six people. This is becausee I am
            working by myself for the time being. I am committed to making sure
            that I can take care of each person and giving them the time they
            deserve to feel beautiful.
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">
            Where and when do trials happen?
          </h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            Trials will take place about one month before the event. The trial
            location will be decided during the booking phase. If the
            destination decided upon is far away, a travel fee may apply.
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">
            How should I prepare for the trial and day of?
          </h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            Just be yourself! I am here to make your makeup journey as stress
            free and relaxing as possible. However that looks for you, I can
            make it happen. This is about you!
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">Do you travel?</h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            I am based in the Hudson Valley. Travel is something I am open too.
            There is a travel fee that is outlined.
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">
            Do you use only clean and natural products?
          </h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            Yes! I am extremely committed to staying as natural as possible.
            There are no synthetic makeups in my kit. Everything is ethically
            and naturally sourced.
          </p>
        </div>
        <div>
          <h3 className="font-IBM-Plex-Serif">
            Can I add more people to the contract?
          </h3>
          <p className="font-IBM-Plex-Serif font-semibold">
            Currently I can only do small parties. But if you want to add more
            people to your party please reach out and we can discuss details
            further!
          </p>
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
