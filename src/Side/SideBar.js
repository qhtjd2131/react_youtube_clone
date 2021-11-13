import React, { createContext, createRef, useContext, useState } from "react";
import "./SideBar.scss";
import * as data from "./SideData/data.js";
import { LogIn } from "../Header/HeaderBar.js";
import MiniSideBar from "./MiniSideBar.js";
import { SideBarContext } from "../App";
import { Logo } from "../Header/HeaderBar.js";
import { languageStateContext } from "../App.js";

export const selectedSideItemContext = createContext({});

export const Line = () => {
  return <div className="line"></div>;
};

export const Items = ({ item, theme, languageItem }) => {
  const { selectedSideItem, setSelectedSideItem } = useContext(
    selectedSideItemContext
  );
  const { languageState } = useContext(languageStateContext);
  //item : data.data_side_item1
  return Object.keys(item).map((i, index) => (
    <div
      className={
        selectedSideItem === i ? "side-item selected-side-item" : "side-item"
      }
      key={index}
      onClick={() => {
        setSelectedSideItem(i);
      }}
    >
      <div className={theme === "black" ? "itemIcon black" : "itemIcon"}>
        {item[i].image}
      </div>
      <div className="itemLabel">{languageItem[languageState][i]}</div>
    </div>
  ));
};

const SideBar = () => {
  const [selectedSideItem, setSelectedSideItem] = useState("home"); //data.item_1[0].title:홈
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const sidebarRef = createRef();

  return (
    <>
      <selectedSideItemContext.Provider
        value={{ selectedSideItem, setSelectedSideItem }}
      >
        <div
          className={
            "sidebar-container" +
            (isOpenSideBar ? "" : " sidebar-close") +
            (isWindowSizeXL ? "" : " sidebar-no-xl")
          }
          ref={sidebarRef}
        >
          <div className="logo-in-side">
            <Logo />
          </div>
          <div className="sidebar">
            <div className="items-wrapper">
              <Items
                item={data.data_side_item1}
                languageItem={data.language_side_item1}
              />
              <Line />
              <Items
                item={data.data_side_item2}
                languageItem={data.language_side_item2}
              />
              <Line />
              <div className="side-login-container">
                <div className="side-login-description">
                  로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
                  있습니다.
                </div>
                <LogIn />
              </div>
              <Line />
              <div className="list-label">인기 YOUTUBE</div>
              <Items
                item={data.data_side_item3}
                languageItem={data.language_side_item3}
                theme="black"
              />
              <Line />
              <Items
                item={data.data_side_item4}
                languageItem={data.language_side_item4}
              />
              <Line />
              <Items
                item={data.data_side_item5}
                languageItem={data.language_side_item5}
              />
              <Line />
              {/* <Items item={data.item_6} /> */}

              {/* 정보... */}
            </div>
          </div>
        </div>
        <MiniSideBar />
      </selectedSideItemContext.Provider>
    </>
  );
};

export default SideBar;
