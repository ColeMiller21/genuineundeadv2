import React from "react";
import TekoHeading from "../../TekoHeading";
import Accordion from "../../Accordian";
import { coreValues } from "../../../public/data/CoreValues";

const Values = () => {
  return (
    <section
      id="faqs"
      className="flex flex-col h-full w-full border-b border-black dark:border-white lg:px-[3.2rem]"
    >
      <div className="flex flex-col items-center w-full my-24 ">
        <h2 className="text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem]  leading-none font-didot flex mb-[80px]">
          {" "}
          <TekoHeading>CORE </TekoHeading> <i>VALUES</i>
        </h2>
        <div className="flex justify-center w-full">
          <Accordion faqQuestions={coreValues} />
        </div>
      </div>
    </section>
  );
};

export default Values;
