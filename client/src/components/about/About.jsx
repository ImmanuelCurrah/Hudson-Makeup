import sarah from "../../assets/pictures/Sarah.jpeg";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-96 mt-8 mb-8 rounded-md"
        src={sarah}
        alt="a picture of a woman next to a lake a blue sky"
      />
      <p className=" mx-8 font-IBM-Plex-Serif font-semibold">
        Sarah is... Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Vero nulla mollitia dignissimos delectus architecto aut eos quas
        reprehenderit illum voluptas, error facilis perferendis assumenda
        tenetur officia molestias odit tempora deserunt. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Quae laudantium expedita aperiam
        error nesciunt ex velit tenetur, sapiente laborum eum commodi assumenda
        placeat iusto magnam numquam reprehenderit suscipit culpa quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam
        commodi. Nam dicta quos voluptatum sapiente perferendis facere minus non
        voluptatem, rerum labore voluptas, expedita deserunt natus illo! Quis,
        quidem.
      </p>
    </div>
  );
}
