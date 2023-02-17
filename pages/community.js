import React from "react";
import Community from "../components/sections/Community/Community";
import Utility from "../components/sections/Community/Utility";
import Marketplace from "../components/sections/Community/Marketplace";
import Discord from "../components/sections/Community/Discord";
import ReadMore from "../components/sections/Community/ReadMore";
import SEO from "../components/SEO";

const community = () => {
  return (
    <>
      <SEO
        title="Community | Genuine Undead"
        description="24x24 pixel PFP you have never seen. 5995 Classic, 3996 Cyberpunk and 8 Legendary. Over 200 hand drawn traits, rich variety. ERC-721A contract."
      />
      <Community />
      <Utility />
      <Marketplace />
      <Discord />
      <ReadMore />
    </>
  );
};

export default community;
