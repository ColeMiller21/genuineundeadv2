import React from "react";

const MainParagraphWrapper = ({ children, width }) => {
  return (
    <p
      className={`text-[.94rem] ${
        width ? width : "w-[90%] lg:w-[60%]"
      } leading-[1.4rem] mb-[60px]`}
    >
      {children}
    </p>
  );
};

export default MainParagraphWrapper;
