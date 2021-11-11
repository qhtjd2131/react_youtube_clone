import React, { createContext, createRef, useContext, useState } from "react";
import "./SideBar.scss";
import * as data from "./SideData/data.js";
import { LogIn } from "../Header/HeaderBar.js";
import MiniSideBar from "./MiniSideBar.js";
import { SideBarContext } from "../App";
import { Logo } from "../Header/HeaderBar.js";

export const selectedSideItemContext = createContext({});

export const Line = () => {
  return <div className="line"></div>;
};

export const Items = ({ item, theme }) => {
  const { selectedSideItem, setSelectedSideItem } = useContext(
    selectedSideItemContext
  );

  return item.map((i, index) => (
    <div
      className={
        selectedSideItem === i.title
          ? "side-item selected-side-item"
          : "side-item"
      }
      key={index}
      onClick={(e) => {
        setSelectedSideItem(e.target.innerText);
      }}
    >
      <div className={theme === "black" ? "itemIcon black" : "itemIcon"}>
        {i.image}
      </div>
      <div className="itemLabel">{i.title}</div>
    </div>
  ));
};

const SideBar = () => {
  const [selectedSideItem, setSelectedSideItem] = useState(
    data.item_1[0].title
  ); //data.item_1[0].title:홈
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
              <Items item={data.item_1} />

              <Line />

              <Items item={data.item_2} />

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
              <Items item={data.item_3} theme="black" />
              <Line />
              <Items item={data.item_4} />
              <Line />
              <div className="list-label">YOUTUBE 더보기</div>
              <Items item={data.item_5} />
              <Line />
              <Items item={data.item_6} />

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
