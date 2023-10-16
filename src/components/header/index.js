import React from "react";
import "./header.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-right">
        <a>
          <img
            className="header-logo"
            src=""
            alt="logo"
          />
        </a>
        <h1 className="header-title">Ferhat Sümer</h1>
      </div>
      <nav>
        <div className="header-nav-right">
          <FiSettings />
          <a href="" target="_blank">
            <h4></h4>
          </a>
          <AiOutlineLogin />

          <a href="" target="_blank">
            <h4></h4>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;