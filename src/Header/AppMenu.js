import React, { createRef, useEffect } from "react";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/appMenuData.js";
import "./AppMenu.scss";
import { FaSadCry } from "react-icons/fa";
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

const AppMenu = ({setIsOpenAppMenuModal}) => {
    const appMenuRef = createRef();
    useEffect(()=>{
        const handleOutsideClick = (e)=>{
            if(appMenuRef.current){
                if(!appMenuRef.current.contains(e.target)){
                    setIsOpenAppMenuModal(false);
                }
            }
        }
        window.addEventListener("mousedown", handleOutsideClick);

        return ()=>{
            window.removeEventListener("mousedown", handleOutsideClick)
        }
    })
  return (
    <div className="appmenu-container" ref={appMenuRef}>
      <div className="appmenu">
        <AppMenuItem />
      </div>
    </div>
  );
};

export default AppMenu;
