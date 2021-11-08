import React from "react";
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
  return <div className="filterbar-container">
      <div className="filterbar-content-wrapper">
      {mainData.map( data => (
          <div className="label">{data}</div>
      ))}
      </div>
  </div>;
};

export default FilterBar;
