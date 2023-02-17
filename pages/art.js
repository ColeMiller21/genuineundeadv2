import React from "react";
import Landing from "../components/sections/Art/Landing";
import Gallery from "../components/sections/Art/Gallery";
import PFP from "../components/sections/Art/PFP";
import Curation from "../components/sections/Art/Curation";
import SEO from "../components/SEO";

const art = () => {
  return (
    <>
      <SEO
        title="Art | Genuine Undead"
        description="24x24 pixel PFP you have never seen. 5995 Classic, 3996 Cyberpunk and 8 Legendary. Over 200 hand drawn traits, rich variety. ERC-721A contract."
      />
      <Landing />
      <Gallery />
      <PFP />
      <Curation />
    </>
  );
};

export default art;
