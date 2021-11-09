import React, { useState, useContext } from "react";
import "./FilterBar.scss";
import { SideBarContext } from "../App";
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
  const [selectedLabel, setSelectedLabel] = useState("전체");
  const { isOpenSideBar } = useContext(SideBarContext);

  const handleClickEvent = (e) => {
    setSelectedLabel(e.target.outerText);
  };
  return (
    <div
      className={
        isOpenSideBar
          ? "filterbar-container"
          : "filterbar-container side-close-filter"
      }
    >
      <div className="filterbar-content-wrapper">
        {mainData.map((data, index) => (
          <div
            className={
              selectedLabel === data ? "label selected-label" : "label"
            }
            key={index}
            onClick={(e) => {
              handleClickEvent(e);
            }}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
