import React, { createRef } from "react";
import "./SettingDropdown.scss";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/SettingData.js";
import { useOutSideClick } from "./AppMenuDropdown";

const SettingDropdown = ({ setIsOpenSettingDropdown }) => {
  const settingDropdownRef = createRef();
  useOutSideClick(settingDropdownRef, setIsOpenSettingDropdown);
  return (
    <div className="setting-dropdown-container" ref={settingDropdownRef}>
      <div className="setting-dropdown">
        {data.settingDropdown_data.map((i, index) => (
          <>
            <div className="side-item" key={index}>
              <div className="setting-dropdown-item-icon">{i.image}</div>
              <div className="setting-dropdown-item-label">{i.title}</div>
              {i.nextpage && <div className="next-page-button">{">"}</div>}
            </div>
            {index === 7 && <Line />}
          </>
        ))}
      </div>
    </div>
  );
};

export default SettingDropdown;
