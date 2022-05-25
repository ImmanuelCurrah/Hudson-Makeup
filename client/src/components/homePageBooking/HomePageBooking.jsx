import Button from "../../UI/button/Button";

export default function HomePageBooking(props) {
  const { buttonName } = props;
  return (
    <div>
      <Button handleDisplay={props.handleDisplay} whereTo="booking">
        {buttonName}
      </Button>
    </div>
  );
}
