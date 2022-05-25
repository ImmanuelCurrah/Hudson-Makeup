import Layout from "../../components/layout/Layout";
import logo from "../../assets/logo/hudson-valley-makeup-logo.png";
import HomePageBooking from "../../components/homePageBooking/HomePageBooking";
import About from "../../components/about/About";

export default function Home(props) {
  return (
    <Layout handleDisplay={props.handleDisplay}>
      <img
        src={logo}
        alt="hands shaped in a heart with name of company and artist underneath"
      />
      <p className="font-IBM-Plex-Serif mb-12">
        "Making beauty more clean by using all natural products"
      </p>
      <HomePageBooking
        handleDisplay={props.handleDisplay}
        buttonName="Get a Quote!"
      />
      <About />
    </Layout>
  );
}
