import React, { useState } from "react";
import "./FilterBar.scss";

const mainData = [
  "전체",
  "실시간",
  "음악",
  "ASMR",
  "축구",
  "랩",
  "최근에 업로드 된 영상",
];
const FilterBar = () => {
  const [selectedLabel, setSelectedLabel] = useState("none");

  const handleClickEvent = (e) => {
    setSelectedLabel(e.target.outerText);
  };
  return (
    <div className="filterbar-container">
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
