import Layout from "../../components/layout/Layout";
import logo from "../../assets/logo/hudson-valley-makeup-logo.png";
import HomePageBooking from "../../components/homePageBooking/HomePageBooking";

export default function Home() {
  return (
    <Layout>
      <img
        src={logo}
        alt="hands shaped in a heart with name of company and artist underneath"
      />
      <p className="font-IBM-Plex-Serif mb-16">
        "Making beauty more clean by using all natural products"
      </p>
      <HomePageBooking />
    </Layout>
  );
}
