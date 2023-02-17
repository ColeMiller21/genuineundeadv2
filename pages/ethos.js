import React from "react";
import BeGenuine from "../components/sections/Ethos/BeGenuine";
import Message from "../components/sections/Ethos/Message";
import IWantYou from "../components/sections/Ethos/IWantYou";
import Values from "../components/sections/Ethos/Values";
import SEO from "../components/SEO";

const ethos = () => {
  return (
    <>
      <SEO
        title="Ethos | Genuine Undead"
        description="24x24 pixel PFP you have never seen. 5995 Classic, 3996 Cyberpunk and 8 Legendary. Over 200 hand drawn traits, rich variety. ERC-721A contract."
      />
      <BeGenuine />
      <Message />
      <IWantYou />
      <Values />
    </>
  );
};

export default ethos;
