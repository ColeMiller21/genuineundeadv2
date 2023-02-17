import React from "react";
import MainButton from "../../MainButton";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const Ethos = ({ t }) => {
  return (
    <section className="min-h-[110vh] lg:min-h-screen  w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden">
      <div
        className={`w-full lg:w-[50%] lg:min-h-[50%] bg-[url('/images/background/zombie-light.png')] dark:bg-[url('/images/background/zombie.png')] bg-cover bg-center flex items-center justify-center flex-1`}
      >
        <Parallax speed={-20} className="w-full hidden lg:flex justify-center">
          {" "}
          <img
            src="/images/gu/zombie.png"
            className="w-[60%] aspect-square"
            alt="Zombie"
          />{" "}
        </Parallax>
        <img
          src="/images/gu/zombie.png"
          className="w-[70%] aspect-square lg:hidden"
          alt="Zombied"
        />{" "}
      </div>
      <div className="w-full min-h-[50%] lg:w-[50%] lg:min-h-full lg:my-[50px] flex flex-col justify-center z-10 relative text-container px-[1.6rem] mt-[20px]">
        <MainHeaderWrapper>
          {" "}
          <span>
            {t("eHeading1a")} <i>{t("eHeading1b")}</i>
          </span>
          <span>
            {t("eHeading2a")} <TekoHeading>{t("eHeading2b")}</TekoHeading>{" "}
          </span>
        </MainHeaderWrapper>{" "}
        <MainParagraphWrapper width="w-[90%] lg:w-[80%]">
          {t("eContent")}
        </MainParagraphWrapper>
        <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
          {t("ourEthos")}
        </MainButton>
      </div>
    </section>
  );
};

export default withTranslation("home")(Ethos);

{
  /* <section className="min-h-screen w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden">
<div
  className={`w-full lg:w-[50%] lg:min-h-[50%] bg-[url('/images/background/zombie-light.png')] dark:bg-[url('/images/background/zombie.png')] bg-cover bg-center flex items-center justify-center flex-1`}
>
  <Parallax speed={-20} className="w-full hidden lg:flex justify-center">
    {" "}
    <img
      src="/images/gu/zombie.png"
      className="w-[70%] lg:w-[80%] xl:w-[60%] aspect-square lg:hidden"
      alt="Zombie"
    />{" "}
  </Parallax>
  <img
    src="/images/gu/zombie.png"
    className="w-[75%] aspect-square lg:hidden"
    alt="Zombie"
  />{" "}
</div>
<div className="w-full lg:w-[50%] min-h-full mt-[50px] flex flex-col justify-center my-[50px] relative text-container">
  <MainHeaderWrapper>
    {" "}
    <span>
      {t("eHeading1a")} <i>{t("eHeading1b")}</i>
    </span>
    <span>
      {t("eHeading2a")} <TekoHeading>{t("eHeading2b")}</TekoHeading>{" "}
    </span>
  </MainHeaderWrapper>{" "}
  <MainParagraphWrapper width="w-[90%] lg:w-[80%]">
    {t("eContent")}
  </MainParagraphWrapper>
  <MainButton link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221">
    {t("ourEthos")}
  </MainButton>
</div>
</section> */
}
