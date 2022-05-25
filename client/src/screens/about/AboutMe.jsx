import Layout from "../../components/layout/Layout";
import sarah from "../../assets/pictures/about-me-front-pic.jpeg";
import sarah2 from "../../assets/pictures/sarah-on-rock.jpeg";

export default function AboutMe(props) {
  return (
    <Layout handleDisplay={props.handleDisplay}>
      <div className="w-screen flex flex-row items-center ">
        <img
          className="h-96 m-4 rounded-md"
          src={sarah}
          alt="a selfie of a woman who is the artist"
        />
        <h2 className="m-48 font-IBM-Plex-Serif text-3xl">About Me</h2>
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
          className="h-96 m-4 rounded-md"
          src={sarah2}
          alt="the artist of the website standing on a rock with her arms out"
        />
      </div>
    </Layout>
  );
}
