import React, {
  createRef,
  useState,
  useContext,
  createContext,
  useRef,
} from "react";
import "./HeaderBar.scss";
import {
  SideBarContext,
  languageStateContext,
  themeStateContext,
  searchTextContext,
} from "../App";
import MicSearchModal from "./MicSearchModal";
import AppMenuDropdown from "./AppMenuDropdown";
import SettingDropdown from "./SettingDropdown";
import * as data from "./HeaderData/headerBarData.js";
import { useEffect } from "react/cjs/react.development";
import { Link, useSearchParams } from "react-router-dom";

export const LogIn = () => {
  const { languageState } = useContext(languageStateContext);
  return (
    <div className="login-container">
      <div className="user-icon">{data.data_Login.login.image}</div>
      <div className="login-text">
        {data.language_Login[languageState].login}
      </div>
    </div>
  );
};

export const Logo = () => {
  const { themeState } = useContext(themeStateContext);
  const { isOpenSideBar, setIsOpenSideBar } = useContext(SideBarContext);

  return (
    <div className="logo-container">
      <div
        className="menu"
        onClick={() => {
          isOpenSideBar ? setIsOpenSideBar(false) : setIsOpenSideBar(true);
        }}
      >
        {data.data_Logo.sidebarOpen.image}
      </div>
      <Link to="/">{data.data_Logo.logo.image[themeState]}</Link>
    </div>
  );
};

const Search = () => {
  const { stateHover, setStateHover } = useContext(stateHoverContext);
  const [isOpenMicSearch, setIsOpenMicSearch] = useState(false);
  const { languageState } = useContext(languageStateContext);
  const { themeState } = useContext(themeStateContext);
  // const { searchText, setSearchText } = useContext(searchTextContext);
  const [searchText, setSearchText] = useState();

  const searchHoverRef = createRef();
  const micHoverRef = createRef();

  // useEffect(() => {
  //   console.log("render");
  // }, []);

  return (
    <div className="search-inputbox-container">
      <input
        placeholder={data.language_Search[languageState].search}
        className={themeState}
        onChange={(e) => {
          let q = e.target.value;
          if (q) {
            setSearchText(q);
          } else {
            setSearchText();
          }
        }}
      />
      <Link
        to={`result?q=${encodeURI(searchText)}`}
        className={"search-button search-button-" + themeState}
        state={{ query: "adfa", q: "saeara" }}
        onClick={() => {}}
      >
        <div //search button
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "search", searchHoverRef, setStateHover);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, searchHoverRef, setStateHover);
          }}
          onClick={() => {}}
        >
          {data.data_Search.search.image}
          <div
            className={
              stateHover === "search"
                ? "hover-description on-hover"
                : "hover-description"
            }
            ref={searchHoverRef}
          >
            {data.language_Search[languageState].search}
          </div>
        </div>
      </Link>

      <Link to="test">
        <div
          className="mic-button"
          onMouseEnter={(e) => {
            handlerMouseEnter(e, "mic", micHoverRef, setStateHover);
          }}
          onMouseLeave={(e) => {
            handlerMouseLeave(e, micHoverRef, setStateHover);
          }}
          onClick={() => {
            setIsOpenMicSearch(true);
          }}
        >
          {data.data_Search.searchWithYourVoice.image}
          <div
            className={
              stateHover === "mic"
                ? "hover-description on-hover"
                : "hover-description"
            }
            ref={micHoverRef}
          >
            {data.language_Search[languageState].searchWithYourVoice}
          </div>
        </div>
      </Link>

      {isOpenMicSearch && (
        <MicSearchModal setIsOpenMicSearch={setIsOpenMicSearch} />
      )}
    </div>
  );
};

const UserItems = () => {
  const [isOpenAppMenuModal, setIsOpenAppMenuModal] = useState(false);
  const [isOpenSettingDropdown, setIsOpenSettingDropdown] = useState(false);
  const { stateHover, setStateHover } = useContext(stateHoverContext);
  const { languageState } = useContext(languageStateContext);

  const appMenuHoverRef = createRef();
  const settingHoverRef = createRef();

  return (
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
          handlerMouseEnter(e, "app_menu", appMenuHoverRef, setStateHover);
        }}
        onMouseLeave={(e) => {
          handlerMouseLeave(e, appMenuHoverRef, setStateHover);
        }}
        onClick={() => {
          setIsOpenAppMenuModal(true);
        }}
      >
        {data.data_UserItems.youtubeApps.image}
        <div
          className={
            stateHover === "app_menu"
              ? "hover-description on-hover"
              : "hover-description"
          }
          ref={appMenuHoverRef}
        >
          {data.language_UserItems[languageState].youtubeApps}
        </div>
      </div>
      <div
        className="setting-space"
        style={{ width: "0px", position: "relative" }}
      >
        {isOpenSettingDropdown && (
          <SettingDropdown
            setIsOpenSettingDropdown={setIsOpenSettingDropdown}
          />
        )}
      </div>
      <div
        className="setting-icon"
        onMouseEnter={(e) => {
          handlerMouseEnter(e, "setting", settingHoverRef, setStateHover);
        }}
        onMouseLeave={(e) => {
          handlerMouseLeave(e, settingHoverRef, setStateHover);
        }}
        onClick={() => {
          setIsOpenSettingDropdown(() => true);
        }}
      >
        {data.data_UserItems.settings.image}
        <div
          className={
            stateHover === "setting"
              ? "hover-description on-hover"
              : "hover-description"
          }
          ref={settingHoverRef}
        >
          {data.language_UserItems[languageState].settings}
        </div>
      </div>
      <LogIn />
    </div>
  );
};
const handlerMouseEnter = (e, state, hoverRef, setStateHover) => {
  if (hoverRef) {
    if (!hoverRef.current.contains(e.target)) {
      setStateHover(state);
    }
  }
};
const handlerMouseLeave = (e, hoverRef, setStateHover) => {
  if (hoverRef) {
    if (!hoverRef.current.contains(e.target)) {
      setStateHover("none");
    }
  }
};

const getThemeStyle = (theme) => {
  let themeStyle = {};
  if (theme === "lightTheme") {
    themeStyle = { backgroundColor: "white", color: "black" };
  } else if (theme === "darkTheme") {
    themeStyle = {
      backgroundColor: "#212121",
      color: "white",
    };
  }
  return themeStyle;
};
export const stateHoverContext = createContext({});
const HeaderBar = () => {
  const [stateHover, setStateHover] = useState("none");
  const { themeState } = useContext(themeStateContext);

  return (
    <div className="headerbar" style={getThemeStyle(themeState)}>
      <Logo />
      <stateHoverContext.Provider value={{ stateHover, setStateHover }}>
        <Search />
        <UserItems />
      </stateHoverContext.Provider>
    </div>
  );
};

export default HeaderBar;
