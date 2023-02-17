import Landing from "../components/sections/Home/Landing";
import { useRef, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Collection from "../components/sections/Home/Collection";
import Art from "../components/sections/Home/Art";
import Story from "../components/sections/Home/Story";
import Ethos from "../components/sections/Home/Ethos";
import FAQ from "../components/sections/Home/FAQ";
import Carousel from "../components/sections/Home/Carousel";
import MobileStory from "../components/sections/Home/MobileStory";
import SEO from "../components/SEO";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "navigation",
        "common",
      ])),
      locale,
    },
  };
}

export default function Home(props) {
  const { t: translate } = useTranslation();
  const landingRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <>
      <SEO
        title="Home | Genuine Undead"
        description="24x24 pixel PFP you have never seen. 5995 Classic, 3996 Cyberpunk and 8 Legendary. Over 200 hand drawn traits, rich variety. ERC-721A contract."
      />
      <div className="page-container">
        <Landing pageRefs={{ landingRef, titleRef }} />
        {/* <Carousel /> */}
        <Collection />
        <Art />
        <MobileStory />
        <Story />
        <Ethos />
        <FAQ />
      </div>
    </>
  );
}
