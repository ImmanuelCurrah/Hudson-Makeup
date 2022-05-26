import Layout from "../../components/layout/Layout";
import sarah from "../../assets/pictures/about-me-front-pic.jpeg";
import sarah2 from "../../assets/pictures/sarah-on-rock.jpeg";
import Button from "../../UI/button/Button";

export default function AboutMe(props) {
  return (
    <Layout handleDisplay={props.handleDisplay}>
      <div className="w-screen flex flex-row items-center ">
        <img
          className="h-96 m-4 rounded-md"
          src={sarah}
          alt="a selfie of a woman who is the artist"
        />
        <h2 className="m-48 font-IBM-Plex-Serif text-3xl">
          Clean Beauty Commitment
        </h2>
      </div>
      <div className="text-left m-4">
        <p>
          What makes me unique as a makeup artist, is my commitment to your
          health! After struggling with my health for years. After battling with
          PCOS and extreme fatigue, and other issues at a young age, I had to
          look at all the products I was using and unfortunately, throw them all
          away. After taking on a holistic approach to my health, I started
          learning that everything we put on us can be just as harmful as what
          we put in it. Once I learned how toxic makeup could be, I couldn’t
          unsee the harmful chemicals all the “expensive” “high quality” makeup
          and other products I was using for years had in them. I couldn’t even
          get myself to wear makeup for a long time. That was until I discovered
          clean beauty. I decided to commit to only using non toxic products for
          me and others, and that’s why I’m here today. My ethics and passion
          invite me to play only with the best products on all my clients.
        </p>
        <br />
        <p>
          The makeup and skincare products I use are all nontoxic and high
          quality. You don’t have to sacrifice your health by using toxic
          products for beautiful makeup. I’m here to prove that to you. All of
          the makeup I use is designed to help you glow from the inside out.
        </p>
      </div>
      <div className="w-screen flex flex-row justify-end items-center">
        <h2 className="m-32 font-IBM-Plex-Serif text-3xl">About Sarah</h2>
        <img
          className="h-96 m-4 rounded-md"
          src={sarah2}
          alt="the artist of the website standing on a rock with her arms out"
        />
      </div>
      <div className="text-left m-4">
        <p>
          Hello there! I’m so happy you found your way here. I am a makeup
          artist living with my partner and doggo in Woodstock, and absolutely
          love my simple beautiful life. I have been doing makeout on me, and
          friends since I was 11. It’s always come extremely naturally to me.
          It’s my happy place! I absolutely love doing makeup because it feeds
          my love of connection and creativity. My previous career was as an
          Intimacy Coach for women and couples. I have always been genuinely
          fascinated in relationships and am excited and curious about bringing
          more beauty to your greatly important day!{" "}
        </p>
        <br />
        <p>
          I have studied Buddhism greatly, and do lots of yin yoga. I truly
          believe beauty comes from the heart, and kindness is timeless makeup.
          I do not believe anyone needs makeup. Makeup to me is a form of
          expression, play, art, and brings out the beauty that’s already there.
          My goal isn’t to make you look different from who you are, but to
          bring out the beauty that’s already there.{" "}
        </p>
      </div>
      <div className="w-screen flex flex-row justify-start items-center">
        <img
          className="h-96 m-4 rounded-md"
          src={sarah2}
          alt="the artist of the website standing on a rock with her arms out"
        />
        <div className="w-screen">
          <Button>Get a Quote Today!</Button>
        </div>
      </div>
    </Layout>
  );
}
