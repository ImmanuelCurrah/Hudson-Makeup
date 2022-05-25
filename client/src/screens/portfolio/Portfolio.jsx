import Layout from "../../components/layout/Layout";
import { pictures } from "../../assets/portfolio-data/portfolioData";

export default function Portfolio() {
  return (
    <Layout>
      <div>Portfolio</div>
      <div className="grid grid-cols-3 gap-4 m-4">
        {pictures.map((pic, index) => {
          return (
            <img
              className="h-96"
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
