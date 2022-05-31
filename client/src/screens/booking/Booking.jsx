import BookingForm from "../../components/booking-form/BookingForm";
import Layout from "../../components/layout/Layout";

export default function Booking(props) {
  return (
    <Layout handleDisplay={props.handleDisplay}>
      <div className="m-4 font-IBM-Plex-Serif text-2xl">
        "My mission is to make your bridal makeup experience as stress free as
        possible!"
      </div>
      <BookingForm />
    </Layout>
  );
}
