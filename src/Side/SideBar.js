import React from "react";
import "./SideBar.scss";
import * as data from "./SideData/data.js";
import { LogIn } from "../Header/HeaderBar.js";

const Line = () => {
  return <div className="line"></div>;
};
const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="items-wrapper">
          {data.item_1.map((i, index) => (
            <div className="item" key={index}>
              <div className="itemIcon">{i.image}</div>
              <div className="itemLabel">{i.title}</div>
            </div>
          ))}

          <Line />

          {data.item_2.map((i, index) => (
            <div className="item" key={index}>
              <div className="itemIcon">{i.image}</div>
              <div className="itemLabel">{i.title}</div>
            </div>
          ))}

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
          {data.item_3.map((i, index) => (
            <div className="item" key={index}>
              <div className="itemIcon">{i.image}</div>
              <div className="itemLabel">{i.title}</div>
            </div>
          ))}
          <Line />

          <div className="list-label">YOUTUBE 더보기</div>
          {data.item_4.map((i, index) => (
            <div className="item" key={index}>
              <div className="itemIcon">{i.image}</div>
              <div className="itemLabel">{i.title}</div>
            </div>
          ))}

          <Line />
          {data.item_5.map((i, index) => (
            <div className="item" key={index}>
              <div className="itemIcon">{i.image}</div>
              <div className="itemLabel">{i.title}</div>
            </div>
          ))}

          <Line />

          {/* 정보... */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
