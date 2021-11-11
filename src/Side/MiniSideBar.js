import React, { useContext } from "react";
import * as data from "./SideData/data.js";
import "./MiniSideBar.scss";
import { selectedSideItemContext } from "./SideBar.js";


const MiniSideBar = () => {
  const { selectedSideItem, setSelectedSideItem } = useContext(
    selectedSideItemContext
  );

  return (
    <div className="mini-sidebar-container">
      {[...data.item_1, ...data.item_2].map((i, index) => (
        <div className="mini-item-wrapper" key={index}>
          <div
            className={
              selectedSideItem === i.title
                ? "mini-side-item selected-mini-side-item"
                : "mini-side-item"
            }
            onClick={(e) => {
              setSelectedSideItem(i.title);
            }}
          >
            <div className="mini-itemIcon">{i.image}</div>
            <div className="mini-itemLabel">{i.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniSideBar;
