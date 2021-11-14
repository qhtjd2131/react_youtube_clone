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
import { languageStateContext, themeStateContext } from "../App";
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

const SettingLocation = () => {
  const { settingState, locationState, setLocationState } =
    useContext(settingStateContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  const dataObject = data.language_SettingLocation[languageState];
  return (
    settingState === "location" && (
      <div>
        <GoDefaultSettingDropDownButton label="위치 선택" />
        <Line />
        {Object.keys(dataObject).map((key, index) => (
          <div
            className={"side-item " + "side-item-" + themeState}
            onClick={() => setLocationState(() => key)}
          >
            <div
              className={
                "setting-dropdown-item-icon " +
                "setting-dropdown-item-icon-" +
                themeState
              }
            >
              {locationState === key ? (
                data.data_SettingDropdown.check.image
              ) : (
                <div style={{ width: "24px", height: "24px" }} />
              )}
            </div>
            <div className="setting-dropdown-item-label">{dataObject[key]}</div>
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
        <GoDefaultSettingDropDownButton label="디자인" />
        <Line />
        {Object.keys(data.data_SettingDesign[languageState]).map((i, index) => (
          <div key={index}>
            <div
              className={"side-item " + "side-item-" + themeState}
              onClick={() => {
                setThemeState(() => {
                  return i;
                });
              }}
            >
              <div
                className={
                  "setting-dropdown-item-icon " +
                  "setting-dropdown-item-icon-" +
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
        <GoDefaultSettingDropDownButton label="언어 선택" />
        <Line />
        {Object.keys(data.language).map((i, index) => (
          <div key={index}>
            <div
              className={"side-item " + "side-item-" + themeState}
              onClick={() => {
                setLanguageState(() => {
                  return i;
                });
              }}
            >
              <div
                className={
                  "setting-dropdown-item-icon " +
                  "setting-dropdown-item-icon-" +
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
  const { settingState, setSettingState, locationState } =
    useContext(settingStateContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  const titleMaker = useCallback((title, nextPageState) => {
    let resultTitle = title;
    if (nextPageState === "language") {
      resultTitle = title + data.language[languageState]["native"];
    } else if (nextPageState === "design") {
      resultTitle = title + data.data_SettingDesign[languageState][themeState];
    } else if (nextPageState === "location") {
      resultTitle =
        title + data.language_SettingLocation[languageState][locationState];
    }
    return resultTitle;
  });

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
              className={"side-item " + "side-item-" + themeState}
              onClick={() => {
                if (nextPageState) {
                  setSettingState(() => nextPageState);
                }
              }}
            >
              <div
                className={
                  "setting-dropdown-item-icon " +
                  "setting-dropdown-item-icon-" +
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
  const { themeState, setThemeState } = useContext(themeStateContext);
  const [settingState, setSettingState] = useState("default");
  const [locationState, setLocationState] = useState("southKorea");

  useOutSideClick(settingDropdownRef, setIsOpenSettingDropdown);
  return (
    <div className="setting-dropdown-container" ref={settingDropdownRef}>
      <div className={"setting-dropdown " + "setting-dropdown-" + themeState}>
        <settingStateContext.Provider
          value={{
            settingState,
            setSettingState,
            locationState,
            setLocationState,
          }}
        >
          <DefaultSettingDropdown />
          <SettingDesign />
          <SettingLanguage />
          <SettingLocation />
        </settingStateContext.Provider>
      </div>
    </div>
  );
};

export default SettingDropdown;
