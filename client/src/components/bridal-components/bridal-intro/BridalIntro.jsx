import bride from "../../../assets/bridal-filler-pics/bridal-top.png";

export default function BridalIntro() {
  return (
    <div className="flex flex-row m-4 items-center justify-evenly">
      <img
        className="h-52 rounded-md"
        src={bride}
        alt="a bride holding flowers"
      />
      <div className="m-4">
        <h2 className="m-2 font-IBM-Plex-Serif text-xl">
          Some catchy little phrase
        </h2>
        <p className="text-left font-IBM-Plex-Serif font-semibold">
          The bridal makeup I do is more natural looking, bringing our your
          beauty to shine as big as the love in your heart. Like the look, all
          the products I will be using are natural as well. I only use clean,
          non toxic, high quality makeup to nurture your health as well as your
          beauty. I will make the makeup process a fun, stress free one. Leave
          all the planning up to me! Can’t wait to be your supporter.
        </p>
      </div>
    </div>
  );
}
