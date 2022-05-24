export default function NavBar() {
  const navOptions = [
    "Welcome",
    "About",
    "Booking",
    "Bridal Makeup",
    "Makeup Portfolio",
  ];

  return (
    <div className="h-32 bg-white flex flex-row justify-around items-end">
      {navOptions.map((navElement, index) => {
        return (
          <div key={index} className="cursor-pointer mb-5 font-IBM-Plex-Serif">
            {navElement}
          </div>
        );
      })}
    </div>
  );
}
