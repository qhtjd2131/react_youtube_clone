import React, { useContext } from "react";
import * as data from "./SideData/data.js";
import "./MiniSideBar.scss";
import { selectedSideItemContext } from "./SideBar.js";
import { languageStateContext } from "../App.js";

const MiniSideBar = () => {
  const { selectedSideItem, setSelectedSideItem } = useContext(
    selectedSideItemContext
  );
  const { languageState } = useContext(languageStateContext);

  const minibarKey = Object.keys(data.data_side_item1).concat(
    Object.keys(data.data_side_item2)
  );
  const minibarValue = { ...data.data_side_item1, ...data.data_side_item2 };
  const minibarLanguage = {
    ...data.language_side_item1[languageState],
    ...data.language_side_item2[languageState],
  };
  return (
    <div className="mini-sidebar-container">
      {minibarKey.map((i, index) => (
        <div className="mini-item-wrapper" key={index}>
          <div
            className={
              selectedSideItem === i
                ? "mini-side-item selected-mini-side-item"
                : "mini-side-item"
            }
            onClick={(e) => {
              setSelectedSideItem(i);
            }}
          >
            <div className="mini-itemIcon">{minibarValue[i].image}</div>
            <div className="mini-itemLabel">{minibarLanguage[i]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniSideBar;
