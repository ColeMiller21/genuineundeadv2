import React from "react";
import MainButton from "../../MainButton";

const ReadMore = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 ">
        <div className="flex flex-col gap-[1.2rem] w-full lg:w-[60%] mb-[3rem]">
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam
            adipiscing vitae proin. Imperdiet nulla malesuada pellentesque elit
            eget gravida. Mauris nunc congue nisi vitae suscipit tellus. Ac odio
            tempor orci dapibus ultrices in iaculis.
          </p>
          <p className="text-[1rem]">
            lementum nisi quis eleifend quam adipiscing vitae proin. Imperdiet
            nulla malesuada. Rhoncus aenean vel elit scelerisque mauris
            pellentesque pulvinar pellentesque habitant. Ac auctor augue mauris
            augue.
          </p>
        </div>
        <div className="w-full lg:w-[60%]">
          <MainButton page={false}>READ MORE</MainButton>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1">
        <img
          src="/images/animation/holo.gif"
          alt="Read More GU"
          className="w-[75%] lg:w-[60%] aspect-square"
        />
      </div>
    </section>
  );
};

export default ReadMore;
