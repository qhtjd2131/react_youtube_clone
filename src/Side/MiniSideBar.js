import React, { useContext } from "react";
import * as data from "./SideData/data.js";
import "./MiniSideBar.scss";
import { selectedSideItemContext } from "./SideBar.js";
import {
  languageStateContext,
  themeStateContext,
  MiniSideBarContext,
} from "../App.js";

const MiniSideBar = () => {
  const { selectedSideItem, setSelectedSideItem } = useContext(
    selectedSideItemContext
  );
  const { languageState } = useContext(languageStateContext);
  const { themeState } = useContext(themeStateContext);
  const { isOpenMiniSideBar } = useContext(MiniSideBarContext);

  const minibarKey = Object.keys(data.data_side_item1).concat(
    Object.keys(data.data_side_item2)
  );
  const minibarValue = { ...data.data_side_item1, ...data.data_side_item2 };
  const minibarLanguage = {
    ...data.language_side_item1[languageState],
    ...data.language_side_item2[languageState],
  };
  return (
    <div
      className={
        "mini-sidebar-container mini-sidebar-container-" +
        themeState +
        " " +
        (!isOpenMiniSideBar && "close-mini-sidebar")
      }
    >
      {minibarKey.map((i, index) => (
        <div className="mini-item-wrapper" key={index}>
          <div
            className={
              selectedSideItem === i
                ? "mini-side-item selected-mini-side-item" +
                  " selected-mini-side-item-" +
                  themeState
                : "mini-side-item mini-side-item-" + themeState
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
