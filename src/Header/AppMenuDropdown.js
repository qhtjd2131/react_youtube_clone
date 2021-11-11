import React, { createRef, useEffect } from "react";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/appMenuData.js";
import "./AppMenuDropdown.scss";
const AppMenuItem = () => {
  return data.appMenu_data.map((i, index) => (
    <>
      <div className="side-item" key={index} onClick={(e) => {}}>
        <div className="appmenu-item-icon">{i.image}</div>
        <div className="appmenu-item-label">{i.title}</div>
      </div>
      {(index === 0 || index === 2) && <Line />}
    </>
  ));
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
  }, [ref]);
};

const AppMenu = ({ setIsOpenAppMenuModal }) => {
  const appMenuRef = createRef();
  console.log("hi im AppMenu");
  useOutSideClick(appMenuRef, setIsOpenAppMenuModal);

  return (
    <div className="appmenu-container" ref={appMenuRef}>
      {console.log("rerender AppMenu")}
      <div className="appmenu">
        <AppMenuItem />
      </div>
    </div>
  );
};

export default AppMenu;
