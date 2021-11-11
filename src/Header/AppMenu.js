import React from "react";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/appMenuData.js";
import "./AppMenu.scss";
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

const AppMenu = () => {
  return (
    <div className="appmenu-container">
      <div className="appmenu">
        <AppMenuItem />
      </div>
    </div>
  );
};

export default AppMenu;
