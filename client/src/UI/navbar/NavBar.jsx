export default function NavBar() {
  const navOptions = ["Welcome", "About Me", "Booking", "Bridal", "Portfolio"];

  return (
    <div className="h-32 bg-white flex flex-row justify-around items-end">
      {navOptions.map((navElement, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer mb-5 font-IBM-Plex-Serif border:none hover:border-b-2 border-black ease-in-out duration-100"
          >
            {navElement}
          </div>
        );
      })}
    </div>
  );
}
