import React from "react";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";

const Utility = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row lg:gap-[2.5rem] border-b border-black dark:border-white overflow-hidden lg:hidden">
      <div
        className={`w-full lg:w-[50%] h-[50%] h-[50%] h-[50%]lg:min-h-[50%] flex items-center justify-center flex-1`}
      >
        <div className="flex flex-col gap-[1rem]">
          <h1 className="font-didot text-[8.5vw]">UTILITY</h1>
          <h4 className="font-didot text-[4vw]">
            <i>NOUN</i>
          </h4>
          <h4 className="text-[4vw]">/JU:'TiL.e.tv</h4>
        </div>
      </div>
      <div className="w-full h-[50%] lg:min-h-[50%] lg:w-[50%] lg:min-h-full flex flex-col justify-center lg:my-[50px] text-container relative px-[1.6rem] pb-[100px] mt-[20px] flex-1">
        <h2
          className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col`}
        >
          <span>
            THE STATE OF <i>BEING</i> <TekoHeading>USEFUL,</TekoHeading>
          </span>
          PROFITABLE, OR <i>BENEFICIAL</i>
        </h2>
      </div>
    </section>
  );
};

export default Utility;
