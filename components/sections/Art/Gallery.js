import React from "react";
import MainButton from "../../MainButton";
import MainHeaderWrapper from "../../MainHeaderWrapper";
import MainParagraphWrapper from "../../MainParagraphWrapper";
import TekoHeading from "../../TekoHeading";

const Gallery = () => {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0 overflow-hidden">
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 text-container relative ">
        <div className="flex flex-col gap-[2.5rem] w-full lg:w-[60%] ">
          <h2
            className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col `}
          >
            {" "}
            <span className="whitespace-nowrap z-10">
              GALLERY <i>QUALITY</i>
            </span>
            <span>
              PIXEL <TekoHeading>ART</TekoHeading>
            </span>
          </h2>
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing.
          </p>
          <MainButton page={false} styles="min-w-[250px] mb-0">
            GALLERY (COMING-SOON)
          </MainButton>
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex justify-center items-center flex-1">
        <img
          src="/images/carousel/cowboy.png"
          alt="GALLERY QUALITY GU"
          className="w-[75%] lg:w-[60%] aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
