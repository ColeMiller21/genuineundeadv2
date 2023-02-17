import React from "react";

import MainButton from "../../MainButton";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

//OVER 200 HAND DRAWN TRAITS
let content = `OVER 200 HAND \n DRAWN TRAITS`;
const heading1a = "OVER";
const heading1b = "200";
const heading1c = "HAND";
const heading2a = "DRAWN";
const heading2b = "TRAITS";

let content2 = `The principle of what can be achieved in a 24 x 24 pixel format. Unsurpassed detail, depth and fidelity 
makes GU the best pixel art collection to ever exist.`;

const Art = ({ t }) => {
  return (
    <section className="min-h-[100vh] lg:min-h-screen w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden">
      <div
        className={`w-full lg:w-[50%] lg:min-h-[50%] bg-[url('/images/background/golem-light.png')] dark:bg-[url('/images/background/golem.png')] bg-cover bg-center flex items-center justify-center flex-1`}
      >
        <Parallax speed={-20} className="w-full hidden lg:flex justify-center">
          {" "}
          <img
            src="/images/gu/viking-rose.png"
            className="w-[60%] aspect-square"
            alt="Viking"
          />{" "}
        </Parallax>
        <img
          src="/images/gu/viking-rose.png"
          className="w-[70%] aspect-square lg:hidden"
          alt="Viking"
        />{" "}
      </div>
      <div className="w-full min-h-[50%] lg:w-[50%] lg:min-h-full lg:my-[50px] flex flex-col justify-center z-10 relative text-container px-[1.6rem] mt-[20px]">
        <MainHeaderWrapper>
          <span>
            {t("aHeading1a")} <TekoHeading> {t("aHeading1b")} </TekoHeading>{" "}
            {t("aHeading1c")}
          </span>
          <span>
            <i>{t("aHeading2a")} </i>
            {t("aHeading2b")}
          </span>
        </MainHeaderWrapper>
        <MainParagraphWrapper width="w-[90%] lg:w-[80%]">
          {t("aContent")}
        </MainParagraphWrapper>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("theArt")}
        </MainButton>
      </div>
    </section>
  );
};

export default withTranslation("home")(Art);
