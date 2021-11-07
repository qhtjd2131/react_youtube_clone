import React from "react";
import { FcMenu } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { BsMicFill, BsGrid3X3Gap } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

import logo from "../images/yt_logo_rgb_light.png";
import "./HeaderBar.scss";
export const LogIn = () => {
  return (
    <div className="login-container">
      <div className="user-icon">
        <FaRegUserCircle />
      </div>
      <div className="login-text">로그인</div>
    </div>
  );
};
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
          {/* <div className="hover-description">검색</div> */}
        </div>
        <div className="mic-button">
          <BsMicFill />
          <div className="hover-description">음성으로 검색</div>
        </div>
      </div>
      <div className="user-item-container">
        <div className="app-menu-icon">
          <BsGrid3X3Gap />
          <div className="hover-description">Yotube 앱</div>
        </div>
        <div className="setting-icon">
          <GoKebabVertical />
          <div className="hover-description">설정</div>
        </div>
        <LogIn />
      </div>
    </div>
  );
};

export default HeaderBar;
