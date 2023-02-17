import React from "react";
import MainButton from "../../MainButton";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

let heading1 = `A PIVOTAL `;
let heading2a = `MOMENT IN`;
const heading2b = `WEB`;

let content2 = `Created by an anonymous artist and gifted to the people, GU was born in the bear and raised by the community.
Communicating through three green papers 'The Founder' empowered a collective of like-minded, passionate and willing individuals,
all sharing the same ethos of creativity, decentralization, sustainability, inclusivity and safety.`;

//NEED TO UPDATE TSHEADING 1 TO PIVITOL AND MAKE IT ITALIC
//MARGIN BETWEEN MAIN HEADING A P IS 80PX
//MARGIN BETWEEN P AND B 60PX

const Story = ({ t }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white overflow-hidden relative px-[3.2rem] hidden lg:flex">
      <div className="w-full min-h-[50%] lg:ml-[10%] lg:w-[70%] lg:min-h-full my-[50px] flex flex-col justify-center z-10 relative text-container">
        <MainHeaderWrapper>
          <span>
            {t("sHeading1")} <i>{t("sHeading1a")}</i>{" "}
          </span>
          <span>
            {t("sHeading2a")} <TekoHeading> {t("sHeading2b")}</TekoHeading>3
          </span>
        </MainHeaderWrapper>{" "}
        <MainParagraphWrapper>{t("sContent")}</MainParagraphWrapper>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("ourStory")}
        </MainButton>
      </div>
      <div
        className={`w-full lg:w-[50%] min-h-[50%] absolute top-0 right-0 h-full z-1 bg-[url('/images/background/boney-light.png')] dark:bg-[url('/images/background/boney.png')] bg-cover bg-center flex items-center justify-center`}
      >
        <Parallax speed={-20} className="w-full flex justify-center">
          <img
            src="/images/gu/miner.png"
            className="w-[55%] aspect-square"
            alt="Miner"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default withTranslation("home")(Story);
