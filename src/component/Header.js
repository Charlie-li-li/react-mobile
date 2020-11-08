import React from "react";
import logo from "../img/logo.png";
import logoTwo from "../img/logo2.png";
import banner from "../img/banner.png";

function Header() {
  return (
    <header>
      <div className="top">
        <img src={logo} alt="logo" />
        <img src={logoTwo} alt="logo" />
      </div>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </header>
  );
}

export default Header;
