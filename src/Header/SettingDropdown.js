import React, { createContext, createRef, useContext, useState } from "react";
import "./SettingDropdown.scss";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/SettingData.js";
import { useOutSideClick } from "./AppMenuDropdown";
import { languageStateContext, themeStateContext } from "../App";
const GoDefaultSettingDropDownButton = ({ label }) => {
  const { setSettingState } = useContext(settingStateContext);
  return (
    <div className="setting-prev-button-container">
      <img
        src="https://img.icons8.com/ios/50/000000/left.png"
        alt=""
        onClick={() => {
          setSettingState(() => "default");
        }}
      />
      <div className="setting-current-state-label">{label}</div>
    </div>
  );
};
const SettingDesign = () => {
  const { settingState } = useContext(settingStateContext);
  const { themeState, setThemeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  return (
    settingState === "design" && (
      <div>
        <GoDefaultSettingDropDownButton label="디자인" />
        <Line />
        {Object.keys(data.DesignData[languageState]).map((i, index) => (
          <div key={index}>
            <div
              className="side-item"
              onClick={() => {
                setThemeState(() => {
                  return i;
                });
              }}
            >
              <div className="setting-dropdown-item-icon">
                {themeState === i ? (
                  data.setting_dropdown_data.check.image
                ) : (
                  <div style={{ width: "24px", height: "24px" }} />
                )}
              </div>
              <div className="setting-dropdown-item-label">
                {data.DesignData[languageState][i]}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

const SettingLanguage = () => {
  const { settingState } = useContext(settingStateContext);
  const { languageState, setLanguageState } = useContext(languageStateContext);
  const { themeState, setThemeState } = useContext(themeStateContext);
  return (
    settingState === "language" && (
      <div>
        <GoDefaultSettingDropDownButton label="언어 선택" />
        <Line />
        {Object.keys(data.LanguageData).map((i, index) => (
          <div key={index}>
            <div
              className="side-item"
              onClick={() => {
                setLanguageState(() => {
                  return i;
                });
              }}
            >
              <div className="setting-dropdown-item-icon">
                {languageState === i ? (
                  data.setting_dropdown_data.check.image
                ) : (
                  <div style={{ width: "24px", height: "24px" }} />
                )}
              </div>
              <div className="setting-dropdown-item-label">
                {data.LanguageData[i].native}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

const DefaultSettingDropdown = () => {
  const { settingState, setSettingState } = useContext(settingStateContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  const titleMaker = (title, nextPageState) => {
    let resultTitle = title;
    if (nextPageState === "language") {
      resultTitle = title + data.LanguageData[languageState]["native"];
    }
    if (nextPageState === "design") {
      console.log("hihidh", themeState);
      resultTitle = title + data.DesignData[languageState][themeState];
    }
    return resultTitle;
  };

  return (
    settingState === "default" &&
    Object.keys(data.settingDropdown_language[languageState]).map(
      (i, index) => {
        const nextPageState = data.setting_dropdown_data[i].nextPageState;
        const image = data.setting_dropdown_data[i].image;
        const text = data.settingDropdown_language[languageState][i];
        return (
          <div key={index}>
            <div
              className="side-item"
              onClick={() => {
                if (nextPageState) {
                  setSettingState(() => nextPageState);
                }
              }}
            >
              <div className="setting-dropdown-item-icon">{image}</div>
              <div className="setting-dropdown-item-label">
                {titleMaker(text, nextPageState)}
              </div>
              {nextPageState && <div className="next-page-button">{">"}</div>}
            </div>
            {index === 7 && <Line />}
          </div>
        );
      }
    )
  );
};

const settingStateContext = createContext({});

const SettingDropdown = ({ setIsOpenSettingDropdown }) => {
  const settingDropdownRef = createRef();
  const { themeState, setThemeState } = useContext(themeStateContext);
  const [settingState, setSettingState] = useState("default");

  useOutSideClick(settingDropdownRef, setIsOpenSettingDropdown);
  return (
    <div className="setting-dropdown-container" ref={settingDropdownRef}>
      <div className="setting-dropdown">
        <settingStateContext.Provider
          value={{
            settingState,
            setSettingState,
            themeState,
            setThemeState,
          }}
        >
          <DefaultSettingDropdown />
          <SettingDesign />
          <SettingLanguage />
        </settingStateContext.Provider>
      </div>
    </div>
  );
};

export default SettingDropdown;
