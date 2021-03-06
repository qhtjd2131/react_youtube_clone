import React, {
  createContext,
  createRef,
  useCallback,
  useContext,
  useState,
} from "react";
import "./SettingDropdown.scss";
import { Line } from "../Side/SideBar";
import * as data from "./HeaderData/SettingData.js";
import { useOutSideClick } from "./AppMenuDropdown";
import {
  languageStateContext,
  themeStateContext,
  locationStateContext,
  restrictedModeContext,
} from "../App";

const GoDefaultSettingDropDownButton = ({ label }) => {
  const { setSettingState } = useContext(settingStateContext);
  const { themeState } = useContext(themeStateContext);
  return (
    <div
      className={
        "setting-prev-button-container " +
        "setting-prev-button-container-" +
        themeState
      }
    >
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

const SettingRestrictedMode = () => {
  const { settingState } = useContext(settingStateContext);
  const { languageState } = useContext(languageStateContext);
  const { restrictedMode, setRestrictedMode } = useContext(
    restrictedModeContext
  );

  const dataObject = data.restrictedModeData;

  return (
    settingState === "restrictedMode" && (
      <div>
        <GoDefaultSettingDropDownButton
          label={
            data.goDefaultSettingLabelData["restrictedMode"][languageState]
          }
        />
        <Line />
        <div className={"restrictedmode-description"}>
          <div className="description">
            {dataObject["description1"][languageState]}
          </div>
          <div className="description">
            {dataObject["description2"][languageState]}
          </div>
        </div>
        <div className={"restictedmode-active-label"}>
          {dataObject["buttonLabel"][languageState]}
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={restrictedMode}
              onChange={(e) => {
                window.localStorage.setItem("restrictedMode", !restrictedMode);
                setRestrictedMode(!restrictedMode);
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    )
  );
};

const SettingLocation = () => {
  const { locationState, setLocationState } = useContext(locationStateContext);
  const { settingState } = useContext(settingStateContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);
  const dataObject = data.settingLocationData;

  return (
    settingState === "location" && (
      <div>
        <GoDefaultSettingDropDownButton
          label={data.goDefaultSettingLabelData["location"][languageState]}
        />
        <Line />
        {Object.keys(dataObject).map((key, index) => (
          <div
            className={"side-item side-item-" + themeState}
            onClick={() =>
              setLocationState(() => {
                return key;
              })
            }
            key={index}
          >
            <div
              className={
                "setting-dropdown-item-icon setting-dropdown-item-icon-" +
                themeState
              }
            >
              {locationState === key ? (
                data.data_SettingDropdown.check.image
              ) : (
                <div style={{ width: "24px", height: "24px" }} />
              )}
            </div>
            <div className="setting-dropdown-item-label">
              {dataObject[key][languageState]}
            </div>
          </div>
        ))}
      </div>
    )
  );
};
const SettingDesign = () => {
  const { settingState } = useContext(settingStateContext);
  const { themeState, setThemeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  return (
    settingState === "design" && (
      <div>
        <GoDefaultSettingDropDownButton
          label={data.goDefaultSettingLabelData["appearance"][languageState]}
        />
        <Line />
        {Object.keys(data.data_SettingDesign[languageState]).map((i, index) => (
          <div key={index}>
            <div
              className={"side-item side-item-" + themeState}
              onClick={() => {
                setThemeState(() => {
                  window.localStorage.setItem("themeState", i);
                  return i;
                });
              }}
            >
              <div
                className={
                  "setting-dropdown-item-icon setting-dropdown-item-icon-" +
                  themeState
                }
              >
                {themeState === i ? (
                  data.data_SettingDropdown.check.image
                ) : (
                  <div style={{ width: "24px", height: "24px" }} />
                )}
              </div>
              <div className="setting-dropdown-item-label">
                {data.data_SettingDesign[languageState][i]}
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
  const { themeState } = useContext(themeStateContext);
  return (
    settingState === "language" && (
      <div>
        <GoDefaultSettingDropDownButton
          label={data.goDefaultSettingLabelData["language"][languageState]}
        />
        <Line />
        {Object.keys(data.language).map((i, index) => (
          <div key={index}>
            <div
              className={"side-item side-item-" + themeState}
              onClick={() => {
                setLanguageState(() => {
                  window.localStorage.setItem("languageState", i);
                  return i;
                });
              }}
            >
              <div
                className={
                  "setting-dropdown-item-icon setting-dropdown-item-icon-" +
                  themeState
                }
              >
                {languageState === i ? (
                  data.data_SettingDropdown.check.image
                ) : (
                  <div style={{ width: "24px", height: "24px" }} />
                )}
              </div>
              <div className="setting-dropdown-item-label">
                {data.language[i].native}
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
  const { locationState } = useContext(locationStateContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  const titleMaker = useCallback(
    (title, nextPageState) => {
      let resultTitle = title;
      if (nextPageState === "language") {
        resultTitle = title + data.language[languageState]["native"];
      } else if (nextPageState === "design") {
        resultTitle =
          title + data.data_SettingDesign[languageState][themeState];
      } else if (nextPageState === "location") {
        resultTitle =
          title + data.settingLocationData[locationState][languageState];
      }
      return resultTitle;
    },
    [languageState, themeState, locationState]
  );

  return (
    settingState === "default" &&
    Object.keys(data.language_SettingDropdown[languageState]).map(
      (i, index) => {
        const nextPageState = data.data_SettingDropdown[i].nextPageState;
        const image = data.data_SettingDropdown[i].image;
        const text = data.language_SettingDropdown[languageState][i];
        return (
          <div key={index}>
            <div
              className={"side-item side-item-" + themeState}
              onClick={() => {
                if (nextPageState) {
                  setSettingState(() => nextPageState);
                }
              }}
            >
              <div
                className={
                  "setting-dropdown-item-icon setting-dropdown-item-icon-" +
                  themeState
                }
              >
                {image}
              </div>
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
  const { themeState } = useContext(themeStateContext);
  const [settingState, setSettingState] = useState("default");

  useOutSideClick(settingDropdownRef, setIsOpenSettingDropdown);
  return (
    <div className="setting-dropdown-container" ref={settingDropdownRef}>
      <div className={"setting-dropdown setting-dropdown-" + themeState}>
        <settingStateContext.Provider value={{ settingState, setSettingState }}>
          <DefaultSettingDropdown />
          <SettingDesign />
          <SettingLanguage />
          <SettingLocation />
          <SettingRestrictedMode />
        </settingStateContext.Provider>
      </div>
    </div>
  );
};

export default SettingDropdown;
