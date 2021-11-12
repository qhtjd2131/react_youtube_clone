import React, { createContext, createRef, useContext, useState } from "react";
import "./SettingDropdown.scss";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/SettingData.js";
import { useOutSideClick } from "./AppMenuDropdown";
import { languageStateContext } from "../App";
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
  const { settingState, settingDesignState, setSettingDesignState } =
    useContext(settingStateContext);

  return (
    settingState === "design" && (
      <div>
        <GoDefaultSettingDropDownButton label="디자인" />
        <Line />
        {data.DesignData.map((i, index) => (
          <div key={index}>
            <div
              className="side-item"
              onClick={() => {
                setSettingDesignState(() => {
                  return { state: i.settinDesignState, label: i.title };
                });
              }}
            >
              <div className="setting-dropdown-item-icon">
                {settingDesignState.state === i.settinDesignState ? (
                  i.image
                ) : (
                  <div style={{ width: "24px", height: "24px" }} />
                )}
              </div>
              <div className="setting-dropdown-item-label">{i.title}</div>
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
  return (
    settingState === "language" && (
      <div>
        <GoDefaultSettingDropDownButton label="언어 선택" />
        <Line />
        {data.LanguageData.map((i, index) => (
          <div key={index}>
            <div
              className="side-item"
              onClick={() => {
                setLanguageState(() => i.title);
              }}
            >
              <div className="setting-dropdown-item-icon">
                {languageState === i.title ? (
                  i.image
                ) : (
                  <div style={{ width: "24px", height: "24px" }} />
                )}
              </div>
              <div className="setting-dropdown-item-label">{i.title}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
const DefaultSettingDropdown = () => {
  const { settingState, setSettingState, settingDesignState } =
    useContext(settingStateContext);
  const { languageState } = useContext(languageStateContext);

  const titleMaker = (title, nextPageState) => {
    let resultTitle = title;
    if (nextPageState === "language") {
      resultTitle = title + languageState;
    }
    if (nextPageState === "design") {
      resultTitle = title + settingDesignState.label;
    }
    return resultTitle;
  };

  return (
    settingState === "default" &&
    data.settingDropdown_data.map((i, index) => (
      <div key={index}>
        <div
          className="side-item"
          onClick={() => {
            if (i.nextPageState) {
              setSettingState(() => i.nextPageState);
            }
          }}
        >
          <div className="setting-dropdown-item-icon">{i.image}</div>
          <div className="setting-dropdown-item-label">
            {titleMaker(i.title, i.nextPageState)}
          </div>
          {i.nextPageState && <div className="next-page-button">{">"}</div>}
        </div>
        {index === 7 && <Line />}
      </div>
    ))
  );
};

const settingStateContext = createContext({});

const SettingDropdown = ({ setIsOpenSettingDropdown }) => {
  const settingDropdownRef = createRef();
  const [settingState, setSettingState] = useState("default");
  const [settingDesignState, setSettingDesignState] = useState({
    state: "light-theme",
    label: "밝은 테마",
  });

  useOutSideClick(settingDropdownRef, setIsOpenSettingDropdown);
  return (
    <div className="setting-dropdown-container" ref={settingDropdownRef}>
      <div className="setting-dropdown">
        <settingStateContext.Provider
          value={{
            settingState,
            setSettingState,
            settingDesignState,
            setSettingDesignState,
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
