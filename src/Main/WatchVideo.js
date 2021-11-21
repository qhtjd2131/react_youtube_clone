import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./WatchVideo.scss";
import { MiniSideBarContext, themeStateContext, SideBarContext } from "../App";
import YouTube from "react-youtube";

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
        <div className="watch-video-title">{location.state.title}</div>
        <div className="watch-video-info">viewcount:302302k</div>
        <div className="watch-video-channel">
          <div className="watch-video-channel-icon">
              <img src={location.state.channelIconUrl} alt=""/>
          </div>
          <div className="watch-video-channel-info">
            <div className="watch-video-channel-title">{location.state.channelTitle}</div>
            <div className="watch-video-channel-subscribers">
              subscribers : 300k
            </div>
          </div>
          <div className="watch-video-channel-subscribtion-button"></div>
        </div>
        <div className="watch-video-description"></div>
        <div className="watch-video-comments"></div>
      </div>
      <div className="watch-video-relative-list"></div>
    </div>
  );
};

export default WatchVideo;
