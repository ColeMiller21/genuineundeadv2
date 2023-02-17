import React from "react";

const MenuButton = ({ menuOpen, theme }) => {
  return (
    <>
      <svg
        className={`ham hamRotate ham4 ${menuOpen ? "active" : ""}`}
        viewBox="0 0 100 100"
        width="50"
      >
        <path
          className="line top"
          style={{ stroke: theme === "dark" ? "#191917" : "#f8f8f4" }}
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path
          className="line middle"
          d="m 70,50 h -40"
          style={{ stroke: theme === "dark" ? "#191917" : "#f8f8f4" }}
        />
        <path
          className="line bottom"
          style={{ stroke: theme === "dark" ? "#191917" : "#f8f8f4" }}
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </>
  );
};

export default MenuButton;
