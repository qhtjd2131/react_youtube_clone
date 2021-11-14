import React, { useState, useContext } from "react";
import "./FilterBar.scss";
import * as data from "./MainData/filterbarData.js";
import {
  SideBarContext,
  languageStateContext,
  themeState,
  themeStateContext,
} from "../App";

const FilterBar = () => {
  const [selectedLabel, setSelectedLabel] = useState("all");
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const { languageState } = useContext(languageStateContext);
  const { themeState } = useContext(themeStateContext);

  return (
    <div
      className={
        isOpenSideBar && isWindowSizeXL
          ? "filterbar-container " + "filterbar-container-" + themeState
          : "filterbar-container side-close-filter " +
            "filterbar-container-" +
            themeState
      }
    >
      <div className="filterbar-content-wrapper">
        {Object.keys(data.language_filterbar[languageState]).map(
          (key, index) => (
            <div
              className={
                selectedLabel === key
                  ? "label selected-label " + "selected-label-" + themeState
                  : "label " + "label-" + themeState
              }
              key={index}
              onClick={() => {
                setSelectedLabel(() => key);
              }}
            >
              {data.language_filterbar[languageState][key]}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FilterBar;
