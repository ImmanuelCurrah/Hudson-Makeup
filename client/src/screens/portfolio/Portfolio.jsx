import Layout from "../../components/layout/Layout";
import { pictures } from "../../assets/portfolio-data/portfolioData";

export default function Portfolio(props) {
  return (
    <Layout handleDisplay={props.handleDisplay}>
      <div className="m-4 font-IBM-Plex-Serif text-3xl">Portfolio</div>
      <div className="grid grid-cols-3 gap-4 m-4">
        {pictures.map((pic, index) => {
          return (
            <img
              className="h-96 opacity-70 hover:opacity-100"
              key={index}
              src={pic.picture}
              alt={pic.description}
            />
          );
        })}
      </div>
    </Layout>
  );
}
