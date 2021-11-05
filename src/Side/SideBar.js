import React from "react";
import "./SideBar.scss";
import * as data from "./SideData/data.js";

const SideBar = () => {
  //   console.log(data.item_1);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="items-wrapper">
          {data.item_1.map((i) => (
            <div className="item">
              <div className="itemIcon">{"a"}</div>
              <div className="itemLabel">{i.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
