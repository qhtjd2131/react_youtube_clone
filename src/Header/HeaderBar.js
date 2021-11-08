import React, { createRef, useCallback, useState } from "react";
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
  const [stateHover, setStateHover] = useState("none");
  const searchHoverRef = createRef();
  const micHoverRef = createRef();
  const appMenuHoverRef = createRef();
  const settingHoverRef = createRef();

  const handlerMouseEnter = useCallback((e, state, hoverRef) => {
    if (hoverRef) {
      if (!hoverRef.current.contains(e.target)) {
        setStateHover(state);
        console.log(window.innerWidth);
      }
    }
  }, []);
  const handlerMouseLeave = useCallback((e, hoverRef) => {
    if (hoverRef) {
      if (!hoverRef.current.contains(e.target)) {
        setStateHover("none");
      }
    }
  }, []);

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
        <div
          className="search-button"
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "search", searchHoverRef);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, searchHoverRef);
          }}
        >
          <IoIosSearch />
          <div
            className={
              stateHover === "search"
                ? "hover-description on-hover"
                : "hover-description"
            }
            ref={searchHoverRef}
          >
            검색
          </div>
        </div>
        <div
          className="mic-button"
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "mic", micHoverRef);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, micHoverRef);
          }}
        >
          <BsMicFill />
          <div
            className={
              stateHover === "mic"
                ? "hover-description on-hover"
                : "hover-description"
            }
            ref={micHoverRef}
          >
            음성으로 검색
          </div>
        </div>
      </div>
      <div className="user-item-container">
        <div
          className="app-menu-icon"
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "app_menu", appMenuHoverRef);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, appMenuHoverRef);
          }}
        >
          <BsGrid3X3Gap />
          <div
            className={
              stateHover === "app_menu"
                ? "hover-description on-hover"
                : "hover-description"
            }
            ref={appMenuHoverRef}
          >
            Yotube 앱
          </div>
        </div>
        <div
          className="setting-icon"
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "setting", settingHoverRef);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, settingHoverRef);
          }}
        >
          <GoKebabVertical />
          <div
            className={
              stateHover === "setting"
                ? "hover-description on-hover"
                : "hover-description"
            }
            ref={settingHoverRef}
          >
            설정
          </div>
        </div>
        <LogIn />
      </div>
    </div>
  );
};

export default HeaderBar;
