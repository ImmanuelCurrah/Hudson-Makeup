import bride from "../../../assets/bridal-filler-pics/bridal-top.png";

export default function BridalIntro() {
  return (
    <div className="flex flex-row m-4">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          numquam porro officia natus. Quas, laborum facilis optio dignissimos
          dolor doloribus quos, fugit exercitationem aliquam voluptatibus
          consequatur blanditiis! Harum, veritatis.
        </p>
      </div>
    </div>
  );
}
