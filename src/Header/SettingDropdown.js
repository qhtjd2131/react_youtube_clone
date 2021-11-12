import React, { createContext, createRef, useContext, useState } from "react";
import "./SettingDropdown.scss";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/SettingData.js";
import { useOutSideClick } from "./AppMenuDropdown";

const DefaultSettingDropdown = () => {
  const { settingstate, setSettingState } = useContext(settingStateContext);
  return data.settingDropdown_data.map((i, index) => (
    <div key={index}>
      <div
        className="side-item"
        onClick={(e) => {
          if (i.nextPageState) {
            setSettingState(i.nextPageState);
          }
        }}
      >
        <div className="setting-dropdown-item-icon">{i.image}</div>
        <div className="setting-dropdown-item-label">{i.title}</div>
        {i.nextPageState && <div className="next-page-button">{">"}</div>}
      </div>
      {index === 7 && <Line />}
    </div>
  ));
};

const SettingDesign = () => {
  const { settingstate, setSettingState } = useContext(settingStateContext);
  const [settingDesignState, setSettingDesignState] = useState("dark-theme");

  return (
    <>
      <div className="setting-prev-button-container">
        <img
          src="https://img.icons8.com/ios/50/000000/left.png"
          alt=""
          onClick={() => {
            setSettingState(() => "default");
          }}
        />
        <div className="setting-current-state-label">디자인</div>
      </div>
      <Line />
      {data.DesignData.map((i, index) => (
        <div key={index}>
          <div
            className="side-item"
            onClick={() => {
              setSettingDesignState(() => i.settinDesignState);
            }}
          >
            <div className="setting-dropdown-item-icon">
              {settingDesignState === i.settinDesignState ? (
                i.image
              ) : (
                <div style={{ width: "24px", height: "24px" }} />
              )}
            </div>
            <div className="setting-dropdown-item-label">{i.title}</div>
          </div>
        </div>
      ))}
    </>
  );
};

const SettingLanguage = () => {
  return;
};
const settingStateContext = createContext({});
const SettingDropdown = ({ setIsOpenSettingDropdown }) => {
  const settingDropdownRef = createRef();
  const [settingState, setSettingState] = useState("default");
  useOutSideClick(settingDropdownRef, setIsOpenSettingDropdown);
  return (
    <div className="setting-dropdown-container" ref={settingDropdownRef}>
      <div className="setting-dropdown">
        <settingStateContext.Provider value={{ settingState, setSettingState }}>
          {settingState === "default" && <DefaultSettingDropdown />}
          {settingState === "design" && <SettingDesign />}
        </settingStateContext.Provider>
      </div>
    </div>
  );
};

export default SettingDropdown;
