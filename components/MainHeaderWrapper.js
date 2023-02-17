import React from "react";

const MainHeaderWrapper = ({ children, styles }) => {
  return (
    <h2
      className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col mb-[30px] md:mb-[50px] lg:mb-[80px] ${styles}`}
    >
      {children}
    </h2>
  );
};

export default MainHeaderWrapper;
