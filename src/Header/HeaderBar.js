import React, { createRef, useCallback, useState, useContext } from "react";
import { FcMenu } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { BsMicFill, BsGrid3X3Gap } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

import logo from "../images/yt_logo_rgb_light.png";
import "./HeaderBar.scss";
import { SideBarContext } from "../App";
import MicSearchModal from "./MicSearchModal";
import AppMenuDropdown from "./AppMenuDropdown";
import SettingDropdown from "./SettingDropdown";

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

export const Logo = () => {
  const { isOpenSideBar, setIsOpenSideBar } = useContext(SideBarContext);

  return (
    <div className="logo-container">
      <div
        className="menu"
        onClick={() => {
          isOpenSideBar ? setIsOpenSideBar(false) : setIsOpenSideBar(true);
        }}
      >
        <FcMenu />
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

const HeaderBar = () => {
  const [stateHover, setStateHover] = useState("none");
  const [isOpenMicSearch, setIsOpenMicSearch] = useState(false);
  const [isOpenAppMenuModal, setIsOpenAppMenuModal] = useState(false);
  const [isOpenSettingDropdown, setIsOpenSettingDropdown] = useState(false);
  const searchHoverRef = createRef();
  const micHoverRef = createRef();
  const appMenuHoverRef = createRef();
  const settingHoverRef = createRef();

  const handlerMouseEnter = useCallback((e, state, hoverRef) => {
    if (hoverRef) {
      if (!hoverRef.current.contains(e.target)) {
        setStateHover(state);
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
      <Logo />
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
          onClick={() => {
            setIsOpenMicSearch(true);
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
          className="appmenu-space"
          style={{ width: "0px", position: "relative" }}
        >
          {isOpenAppMenuModal && (
            <AppMenuDropdown setIsOpenAppMenuModal={setIsOpenAppMenuModal} />
          )}
        </div>
        <div
          className="app-menu-icon"
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "app_menu", appMenuHoverRef);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, appMenuHoverRef);
          }}
          onClick={() => {
            setIsOpenAppMenuModal(true);
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
          className="setting-space"
          style={{ width: "0px", position: "relative" }}
        >
          <SettingDropdown
            setIsOpenSettingDropdown={setIsOpenSettingDropdown}
          />
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
      {isOpenMicSearch && (
        <MicSearchModal setIsOpenMicSearch={setIsOpenMicSearch} />
      )}
    </div>
  );
};

export default HeaderBar;
