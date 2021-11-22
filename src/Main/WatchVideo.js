import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./WatchVideo.scss";
import { MiniSideBarContext, themeStateContext, SideBarContext } from "../App";
import YouTube from "react-youtube";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { GiSaveArrow } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";

const WatchVideo = () => {
  const location = useLocation();
  console.log("watchvideo location : ", location);
  const { isOpenMiniSideBar, setIsOpenMiniSideBar } =
    useContext(MiniSideBarContext);
  const { setIsOpenSideBar } = useContext(SideBarContext);
  const { themeState } = useContext(themeStateContext);
  const video_opt = {
    // width: "100%",
  };

  const getQueryString = () => {
    //query string이 한개일때만 가정
    let q = decodeURI(location.search).slice(1); // "q=apple"
    let firstEqualIndex = q.indexOf("=");
    // const key = q.slice(0, firstEqualIndex); //q
    const value = q.slice(firstEqualIndex + 1); //apple
    return value;
  };
  useEffect(() => {
    setIsOpenSideBar(false);
    setIsOpenMiniSideBar(false);
  }, []);

  return (
    <div
      className={"watch-video-container watch-video-container-" + themeState}
    >
      <div className="watch-video-wrapper">
        <div className="watch-video">
          <YouTube videoId={getQueryString()} opts={video_opt}></YouTube>
        </div>
        <div className="watch-video-tags-wrapper">
          {location.state.tags.map((i, index) => (
            <div className="watch-video-tag">{i}</div>
          ))}
        </div>
        <div className="watch-video-title">{location.state.title}</div>
        <div className="watch-video-info">
          <div className="watch-video-info-viewcount">
            {location.state.viewCount}
          </div>
          <div className="watch-video-info-etc">
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <AiOutlineLike />
              </div>
              {location.state.likeCount}
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <AiOutlineDislike />
              </div>
              {location.state.dislikeCount}
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <RiShareForwardLine />
              </div>
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <GiSaveArrow />
              </div>
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <BsThreeDots />
              </div>
            </div>
          </div>
        </div>
        <div className="watch-video-channel">
          <div className="watch-video-channel-icon">
            <img src={location.state.channelIconUrl} alt="" />
          </div>
          <div className="watch-video-channel-info">
            <div className="watch-video-channel-title">
              {location.state.channelTitle}
            </div>
            <div className="watch-video-channel-subscribers">
              {location.state.subscriberCount}
            </div>
          </div>
          <div className="watch-video-channel-subscribtion-button">구독</div>
        </div>
        <div className="watch-video-description">
          {location.state.videoDescription}
        </div>
        <div className="watch-video-comments">
          댓글 : {location.state.commentCount}
        </div>
      </div>
      <div className="watch-video-relative-list"></div>
    </div>
  );
};

export default WatchVideo;
