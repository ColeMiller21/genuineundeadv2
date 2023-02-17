import React from "react";
import MainButton from "../../MainButton";
import { withTranslation } from "next-i18next";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";

const Marketplace = () => {
  return (
    <section className="min-h-screen w-full flex border-b border-t border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem]">
      <div className="w-full min-h-full flex flex-col justify-center gap-[1.5rem] lg:gap-[3rem] relative overflow-y-hidden">
        <MainHeaderWrapper styles="lg:my-[1rem] ">
          <span className="">
            HOLDING A <i> GENUINE UNDEAD</i> TOKEN GRANTS
            <TekoHeading> MEMBERSHIP</TekoHeading> TO A <i>ONE</i> OF A KIND
            DECENTRALIZED <TekoHeading>COMMUNITY.</TekoHeading>
          </span>
        </MainHeaderWrapper>
        <MainButton
          page={false}
          link="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221"
        >
          MARKETPLACE
        </MainButton>
      </div>
    </section>
  );
};

export default Marketplace;
