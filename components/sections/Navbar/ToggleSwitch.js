import React from "react";

const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <div className="flex items-center justify-center w-full gap-[5px]">
      <span>Light</span>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onClick={toggleTheme}
            defaultChecked={theme === "dark"}
          />
          <div className="block bg-black w-14 h-8 rounded-full white-border"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
      <span>Dark</span>
    </div>
  );
};

export default ToggleSwitch;
