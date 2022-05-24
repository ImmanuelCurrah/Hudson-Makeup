import Footer from "../../UI/footer/Footer";
import NavBar from "../../UI/navbar/NavBar";
export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center">{props.children}</div>
      <Footer />
    </div>
  );
}
