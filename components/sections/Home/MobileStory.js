import React from "react";
import MainButton from "../../MainButton";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";

const MobileStory = ({ t }) => {
  return (
    <section className="min-h-[120vh] w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden lg:hidden">
      <div
        className={`w-full lg:w-[50%] lg:min-h-[50%] bg-[url('/images/background/boney-light.png')] dark:bg-[url('/images/background/boney.png')] bg-cover bg-center flex items-center justify-center flex-1`}
      >
        <img
          src="/images/gu/miner.png"
          className="w-[70%] aspect-square"
          alt="Viking"
        />{" "}
      </div>
      <div className="w-full h-[40%] lg:min-h-[50%] lg:w-[50%] lg:min-h-full flex flex-col justify-center lg:my-[50px] text-container relative px-[1.6rem] pb-[100px] mt-[20px]">
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
    </section>
  );
};

export default withTranslation("home")(MobileStory);
