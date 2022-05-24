import NavBar from "../../UI/navbar/NavBar";
export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
}
