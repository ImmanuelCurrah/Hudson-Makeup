import Layout from "../../components/layout/Layout";
import { pictures } from "../../assets/portfolio-data/portfolioData";
import Button from "../../UI/button/Button";

export default function Portfolio(props) {
  if (pictures.length === 0) {
    return (
      <Layout handleDisplay={props.handleDisplay}>
        <div className="flex flex-row items-center justify-between w-4/5 m-4">
          <div className="font-IBM-Plex-Serif text-3xl">Portfolio</div>
          <Button handleDisplay={props.handleDisplay} whereTo="booking">
            Get a Quote
          </Button>
        </div>
        <div className="font-IBM-Plex-Serif text-2xl m-48">
          Pictures coming soon!
        </div>
        <div className="h-96"></div>
      </Layout>
    );
  }

  return (
    <Layout handleDisplay={props.handleDisplay}>
      <div className="flex flex-row items-center justify-between w-4/5 m-4">
        <div className="font-IBM-Plex-Serif text-3xl">Portfolio</div>
        <Button handleDisplay={props.handleDisplay} whereTo="booking">
          Get a Quote
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 m-4 phone:flex flex-col items-center">
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
