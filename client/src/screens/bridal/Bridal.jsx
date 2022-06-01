import BridalCovidCard from "../../components/bridal-components/bridal-covid-policy/BridalCovidCard";
import BridalFAQ from "../../components/bridal-components/bridal-faq/BridalFAQ";
import BridalIntro from "../../components/bridal-components/bridal-intro/BridalIntro";
import BridalMission from "../../components/bridal-components/bridal-mission/BridalMission";
import BridalProcess from "../../components/bridal-components/bridal-process/BridalProcess";
import BridalQuoteCard from "../../components/bridal-components/bridal-quote-box/BridalQuoteCard";
import Layout from "../../components/layout/Layout";

export default function Bridal(props) {
  return (
    <Layout handleDisplay={props.handleDisplay}>
      <div className="font-IBM-Plex-Serif text-4xl m-4">
        All Natural Beauty for the Bridal Party
      </div>
      <BridalIntro />
      <BridalMission />
      <BridalProcess handleDisplay={props.handleDisplay} />
      <BridalFAQ />
      <BridalCovidCard />
      <BridalQuoteCard handleDisplay={props.handleDisplay} />
    </Layout>
  );
}
