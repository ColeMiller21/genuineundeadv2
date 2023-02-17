import React from "react";
import MainButton from "../../MainButton";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import TekoHeading from "../../TekoHeading";

const Message = () => {
  return (
    <section className="min-h-screen w-full flex border-b border-t border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem]">
      <div className="w-full min-h-full flex flex-col justify-center gap-[1.5rem] lg:gap-[3rem] relative overflow-y-hidden">
        <MainHeaderWrapper styles="lg:my-[1rem] ">
          <span className="">
            WE <i>BELIEVE</i> IN A <TekoHeading>BETTER</TekoHeading> WEB3. A
            MORE
            <i> GENUINE </i> WEB3. THESE ARE <TekoHeading>VALUES</TekoHeading>{" "}
            AT OUR CORE AND <i>PRINCIPLES</i> BY WHICH WE ADHERE TO.
          </span>
        </MainHeaderWrapper>
      </div>
    </section>
  );
};

export default Message;
