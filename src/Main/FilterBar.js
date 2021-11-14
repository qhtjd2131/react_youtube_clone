import React, { useState, useContext } from "react";
import "./FilterBar.scss";
import * as data from "./MainData/filterbarData.js";
import { SideBarContext, languageStateContext } from "../App";
const mainData = [
  "전체",
  "실시간",
  "음악",
  "ASMR",
  "축구",
  "요리 프로그램",
  "랩",
  "미용",
  "액션 어드벤처 게임",
  "최근에 업로드 된 영상",
];
const FilterBar = () => {
  const [selectedLabel, setSelectedLabel] = useState("all");
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const { languageState } = useContext(languageStateContext);
  
  return (
    <div
      className={
        isOpenSideBar && isWindowSizeXL
          ? "filterbar-container"
          : "filterbar-container side-close-filter"
      }
    >
      <div className="filterbar-content-wrapper">
        {Object.keys(data.language_filterbar[languageState]).map(
          (key, index) => (
            <div
              className={
                selectedLabel === key ? "label selected-label" : "label"
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
