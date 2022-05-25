import Button from "../../UI/button/Button";

export default function HomePageBooking(props) {
  const { buttonName } = props;
  return (
    <div>
      <Button whereTo="booking">{buttonName}</Button>
    </div>
  );
}
