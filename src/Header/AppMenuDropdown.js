import React, { createRef, useContext, useEffect } from "react";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/appMenuData.js";
import "./AppMenuDropdown.scss";
import { languageStateContext, themeStateContext } from "../App";
const AppMenuItem = () => {
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);
  return Object.keys(data.appMenu_language[languageState]).map((i, index) => {
    const image = data.appMenu_data[i].image;
    const text = data.appMenu_language[languageState][i];
    return (
      <div key={index}>
        <div
          className={"side-item " + "side-item-" + themeState}
          onClick={(e) => {}}
        >
          <div className="appmenu-item-icon">{image}</div>
          <div className="appmenu-item-label">{text}</div>
        </div>
        {(index === 0 || index === 2) && <Line />}
      </div>
    );
  });
};

export const useOutSideClick = (ref, setStateFunction) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current) {
        if (!ref.current.contains(e.target)) {
          setStateFunction(false);
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, setStateFunction]);
};

const AppMenu = ({ setIsOpenAppMenuModal }) => {
  const appMenuRef = createRef();
  const { themeState } = useContext(themeStateContext);
  useOutSideClick(appMenuRef, setIsOpenAppMenuModal);

  return (
    <div className="appmenu-container" ref={appMenuRef}>
      <div className={"appmenu " + "appmenu-" + themeState}>
        <AppMenuItem />
      </div>
    </div>
  );
};

export default AppMenu;
