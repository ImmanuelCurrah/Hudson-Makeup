import bride from "../../../assets/bridal-filler-pics/bridal-mission.png";
import { BsFlower3 } from "react-icons/bs";

export default function BridalMission() {
  return (
    <div className="bg-white w-screen flex flex-row justify-evenly items-center">
      <div className="m-4">
        <div className="font-IBM-Plex-Serif text-xl">
          My mission is to help you...
        </div>
        <br />
        <div>
          <ul className="font-IBM-Plex-Serif font-semibold text-left">
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Break out</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Relax</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Be Beautiful</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Have fun</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Stay stress free</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Shine</li>
            </div>
          </ul>
        </div>
      </div>
      <img
        className="w-96 m-4 rounded-md"
        src={bride}
        alt="a bride and her spouse on a rocky outcrop"
      />
    </div>
  );
}
