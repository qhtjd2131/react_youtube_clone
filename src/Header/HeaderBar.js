import React from "react";
import { FcMenu } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { BsMicFill, BsGrid3X3Gap } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

import logo from "../images/yt_logo_rgb_light.png";
import "./HeaderBar.scss";

const HeaderBar = () => {
  return (
    <div className="headerbar">
      <div className="logo-container">
        <div className="menu">
          <FcMenu />
        </div>
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
        <div className="app-menu-icon">
          <BsGrid3X3Gap />
        </div>
        <div className="setting-icon">
          <GoKebabVertical />
        </div>
        <div className="login-container">
          <div className="user-icon">
            <FaRegUserCircle />
          </div>
          <div className="login-text">로그인</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
