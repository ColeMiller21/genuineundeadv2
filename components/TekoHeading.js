import React from "react";

const TekoHeading = ({ children }) => {
  return (
    <span className="font-teko font-extrabold text-[2.75rem] md:text-[3.75rem] lg:text-[4.75rem] xl:text-[5.25rem] xxl:text-[6.25rem]">
      {children}
    </span>
  );
};

export default TekoHeading;
