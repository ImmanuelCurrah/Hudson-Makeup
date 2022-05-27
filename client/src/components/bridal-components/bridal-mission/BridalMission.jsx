import bride from "../../../assets/bridal-filler-pics/bridal-mission.png";

export default function BridalMission() {
  return (
    <div className="bg-white w-screen flex flex-row justify-evenly items-center">
      <div className="m-4">
        <div>My mission is to help you...</div>
        <div>
          <ul>
            <li>Break out</li>
            <li>feel your best</li>
            <li>be beautiful</li>
            <li>shine</li>
            <li>relax</li>
            <li>Have fun</li>
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
