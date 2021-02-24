import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? "grid grid-rows-4 text-center items-center bg-white" : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/skills" className="p-4">
        Skills
      </Link>
      <Link to="/projects" className="p-4">
        Projects
      </Link>
    </div>
  );
};

export default Dropdown;
