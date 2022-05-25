import Layout from "../../components/layout/Layout";
import sarah from "../../assets/pictures/about-me-front-pic.jpeg";
import sarah2 from "../../assets/pictures/sarah-on-rock.jpeg";

export default function AboutMe() {
  return (
    <Layout>
      <div className="w-screen">
        <img
          className="h-96 m-4"
          src={sarah}
          alt="a selfie of a woman who is the artist"
        />
      </div>
      <div className="text-left m-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam
          illo ipsam atque fugiat nesciunt eius repellat, odit repellendus
          tempora. Consequuntur illo error ipsa, officia et veritatis est
          placeat rerum? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Beatae ullam illo ipsam atque fugiat nesciunt eius repellat,
          odit repellendus tempora. Consequuntur illo error ipsa, officia et
          veritatis est placeat rerum? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Beatae ullam illo ipsam atque fugiat nesciunt eius
          repellat, odit repellendus tempora. Consequuntur illo error ipsa,
          officia et veritatis est placeat rerum? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Beatae ullam illo ipsam atque fugiat
          nesciunt eius repellat, odit repellendus tempora. Consequuntur illo
          error ipsa, officia et veritatis est placeat rerum?
        </p>
      </div>
      <div className="w-screen flex flex-row justify-end">
        <img
          className="h-96 m-4"
          src={sarah2}
          alt="the artist of the website standing on a rock with her arms out"
        />
      </div>
    </Layout>
  );
}
