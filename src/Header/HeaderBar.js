import React from "react";
import { FcMenu } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { BsMicFill } from "react-icons/bs";

import logo from "../images/yt_logo_rgb_light.png";
import "./HeaderBar.scss";

const HeaderBar = () => {
  return (
    <div className="headerbar">
      <div className="logo-container">
        <FcMenu />
        <img src={logo} alt="logo" />
      </div>
      <div className="search-inputbox-container">
        <input placeholder="검색" />
        <div className="search-button">
          <IoIosSearch />
        </div>
        <div className="mic-button">
          <BsMicFill />
        </div>
      </div>
      <div className="user-item-container">


      </div>
    </div>
  );
};

export default HeaderBar;
