import React from "react";

const Section = ({ children }) => {
  return (
    <section className="min-h-screen w-full flex flex-col  lg:flex-row gap-[2.5rem] border-b border-black dark:border-white overflow-hidden px-[3.2rem]">
      {children}
    </section>
  );
};

export default Section;
