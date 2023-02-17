import React from "react";

const Landing = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem] relative">
      <div className="bg-fixed bg-center bg-no-repeat bg-contain h-full w-[80%] md:w-[60%] lg:w-[40%] aspect-square bg-[url('/images/carousel/rose.png')] overflow-visible">
        <h1 className="font-didot z-10 positionCenter w-screen text-center text-[13.5vw] after:content-none after:inline-block after:w-screen ">
          <span className="font-teko font-bold text-[13.1vw]">FINE </span>
          <i>PIXEL</i>
          <span className="font-teko font-bold text-[13.1vw]"> ART</span>
        </h1>
      </div>
    </section>
  );
};

export default Landing;
