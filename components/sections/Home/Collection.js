import React, { useEffect } from "react";
import MainButton from "../../MainButton";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";

const Collection = ({ t }) => {
  return (
    <section className="min-h-screen w-full flex border-b border-t border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem]">
      <div className="w-full min-h-full flex flex-col justify-center gap-[.75rem] lg:gap-[3rem] collection-container relative overflow-y-hidden">
        <h2
          className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col mb-[30px] md:mb-[30px] lg:mb-[40px] lg:my-[1rem]`}
        >
          <span className="">
            {t("cHeading1a")} <i>{t("cHeading1b")} </i>
            <TekoHeading>{t("cHeading1c")} </TekoHeading> {t("cHeading1d")}
          </span>
          <span>{t("cHeading2")}</span>
          <span>{t("cHeading3")}</span>
        </h2>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("viewCollection")}
        </MainButton>
      </div>
    </section>
  );
};

export default withTranslation("home")(Collection);
