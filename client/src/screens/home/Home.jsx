import Layout from "../../components/layout/Layout";
import logo from "../../assets/logo/hudson-valley-makeup-logo.png";

export default function Home() {
  return (
    <Layout>
      <img
        src={logo}
        alt="hands shaped in a heart with name of company and artist underneath"
      />
    </Layout>
  );
}
