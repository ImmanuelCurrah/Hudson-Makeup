import bride from "../../../assets/bridal-filler-pics/bridal-mission.png";
import { BsFlower3 } from "react-icons/bs";

export default function BridalMission() {
  return (
    <div className="bg-white w-screen flex flex-row justify-evenly items-center phone:flex-col">
      <div className="m-4">
        <div className="font-IBM-Plex-Serif text-xl">
          My mission is to help you...
        </div>
        <br />
        <div>
          <ul className="font-IBM-Plex-Serif font-semibold text-left">
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Feel as beautiful as possible</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Bring your beauty vision to life</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Feel relaxed and comfortable</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Stay healthy and glowing from the inside</li>
            </div>
            <div className="flex flex-row items-center mx-">
              <BsFlower3 className="m-2" />
              <li>Feel fresh, light, and lovely on your big day</li>
            </div>
          </ul>
        </div>
      </div>
      <img
        className="w-96 m-4 rounded-md phone:w-80"
        src={bride}
        alt="a bride and her spouse on a rocky outcrop"
      />
    </div>
  );
}
