import React, { useCallback, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./WatchVideo.scss";
import {
  MiniSideBarContext,
  languageStateContext,
  themeStateContext,
  SideBarContext,
} from "../App";
import YouTube from "react-youtube";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { GiSaveArrow } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { Line } from "../Side/SideBar";
import { useState } from "react/cjs/react.development";
import * as data from "./MainData/watchVideoData.js";
import axios from "axios";

const WatchVideo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isRelativeVideoLoading, setIsRelativeVideoLoading] = useState(true);
  const [isWatchVideoLoading, setIsWatchVideoLoading] = useState(true);
  const [relativeVideoItems, setRelativeVideoItems] = useState([]);
  const [watchVideoState, setWatchVideoState] = useState(() => {
    let stateTemp = {};
    if (location.state) {
      stateTemp = {
        ...location.state,
      };
      return stateTemp;
    } else {
      stateTemp = {
        title: "",
        channelTitle: "",
        channelIconUrl: "",
        viewCount: "",
        likeCount: "",
        dislikeCount: "",
        commentCount: "",
        publishedAt: "",
        description: "",
        tags: [],
        subscriberCount: "",
      };
      return stateTemp;
    }
  });

  const { setIsOpenMiniSideBar } = useContext(MiniSideBarContext);
  const { setIsOpenSideBar } = useContext(SideBarContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

  const getQueryString = useCallback(() => {
    //query string이 한개일때만 가정
    let q = decodeURI(location.search).slice(1); // "q=apple"
    let firstEqualIndex = q.indexOf("=");
    // const key = q.slice(0, firstEqualIndex); //q
    const value = q.slice(firstEqualIndex + 1); //apple
    return value;
  }, [location.search]);
  useEffect(() => {
    setIsOpenSideBar(false);
    setIsOpenMiniSideBar(false);
    window.scrollTo(0, 0);
  }, [setIsOpenMiniSideBar, setIsOpenSideBar]);

  useEffect(() => {
    const getRelativeVideo = async () => {
      const option = {
        part: "snippet",
        regionCode: "KR",
        maxResults: 20,
        apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
      };
      const getRelativeVideoUrl = `https://www.googleapis.com/youtube/v3/search?part=${
        option.part
      }&type=video&relatedToVideoId=${getQueryString()}&maxResults=${
        option.maxResults
      }&key=${option.apiKey}`;

      const result = await axios.get(getRelativeVideoUrl);
      console.log(result.data.items);
      return result.data.items;
    };

    getRelativeVideo().then((items) => {
      setIsRelativeVideoLoading(() => {
        setRelativeVideoItems(items);
        return false;
      });
    });
  }, [getQueryString]);

  useEffect(() => {
    if (!location.state) {
      console.log("state가 없어 api를 사용해 데이터를 가져옵니다!!");
      const option = {
        part: "snippet,statistics",
        apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
      };

      const getVideoInfo = async () => {
        const getVideoInfoUrl = `https://www.googleapis.com/youtube/v3/videos?part=${
          option.part
        }&id=${getQueryString()}&key=${option.apiKey}`;
        const result = await axios.get(getVideoInfoUrl);
        return result.data.items[0];
      };

      const getChannelInfo = async (channelId) => {
        const getChannelInfoUrl = `https://www.googleapis.com/youtube/v3/channels?part=${option.part}&id=${channelId}&key=${option.apiKey}`;
        const result = await axios.get(getChannelInfoUrl);
        return result.data.items[0];
      };

      let res = {};
      getVideoInfo()
        .then((item) => {
          const itemTemp = {
            ...item.snippet,
            ...item.statistics,
            channelIconUrl: "",
          };
          return itemTemp;
        })
        .then((itemTemp) => {
          res = { ...itemTemp };
          return getChannelInfo(itemTemp.channelId);
        })
        .then((channelInfo) => {
          res = {
            ...res,
            channelIconUrl: channelInfo.snippet.thumbnails.default.url,
            subscriberCount: channelInfo.statistics.subscriberCount,
          };

          setWatchVideoState(() => ({ ...res }));
        })
        .then(() => {
          setIsWatchVideoLoading(false);
        })
        .catch((e) => {
          console.log("error", e);
          navigate("/");
        });
    } else {
      setIsWatchVideoLoading(false);
    }
  }, [getQueryString, location.search, location.state,navigate]);

  const formattingNumber = (num) => {
    if (!num) return 0;
    switch (languageState) {
      case "KOR":
        if (num >= 100000) {
          return parseInt(num / 10000) + "만";
        } else if (num >= 10000) {
          return (num / 10000).toFixed(1) + "만";
        } else if (num >= 1000) {
          return (num / 1000).toFixed(1) + "천";
        } else {
          return num;
        }
      case "EN":
        if (num >= 10000000) {
          return parseInt(num / 10000000) + "M";
        } else if (num >= 1000000) {
          return (num / 1000000).toFixed(1) + "M";
        } else if (num >= 10000) {
          return parseInt(num / 1000) + "K";
        } else if (num >= 1000) {
          return (num / 1000).toFixed(1) + "K";
        } else {
          return num;
        }
      default:
        return 0;
    }
  };
  return (
    <div
      className={"watch-video-container watch-video-container-" + themeState}
    >
      {isWatchVideoLoading ? (
        <div className="watch-video-wrapper">Loading... </div>
      ) : (
        <div className="watch-video-wrapper">
          <div className="watch-video">
            <YouTube videoId={getQueryString()}></YouTube>
          </div>
          <div className="watch-video-tags-wrapper">
            {[] ??
              location.state.tags.map((i, index) => (
                <div className="watch-video-tag" key={index}>
                  {i}
                </div>
              ))}
          </div>
          <div className="watch-video-title">{watchVideoState.title}</div>
          <div className="watch-video-info">
            <div className="watch-video-info-viewcount">
              {languageState === "KOR" &&
                `조회수 ${watchVideoState.viewCount}회`}
              {languageState === "EN" && `${watchVideoState.viewCount} views`}
            </div>
            <div className="watch-video-info-etc">
              <div className="wvi-item">
                <div className="wvi-item-icon">
                  <AiOutlineLike />
                </div>
                {formattingNumber(watchVideoState.likeCount)}
              </div>
              <div className="wvi-item">
                <div className="wvi-item-icon">
                  <AiOutlineDislike />
                </div>
                {formattingNumber(watchVideoState.dislikeCount)}
              </div>
              <div className="wvi-item">
                <div className="wvi-item-icon">
                  <RiShareForwardLine />
                </div>

                {data.watchVideoData.share[languageState]}
              </div>
              <div className="wvi-item">
                <div className="wvi-item-icon">
                  <GiSaveArrow />
                </div>
                {data.watchVideoData.save[languageState]}
              </div>
              <div className="wvi-item">
                <div className="wvi-item-icon">
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>
          <Line />
          <div className="watch-video-channel">
            <div className="watch-video-channel-icon">
              <img src={watchVideoState.channelIconUrl} alt="" />
            </div>
            <div className="watch-video-channel-info">
              <div className="watch-video-channel-title">
                {watchVideoState.channelTitle}
              </div>
              <div className="watch-video-channel-subscribers">
                {languageState === "KOR" &&
                  `구독자 ${formattingNumber(
                    watchVideoState.subscriberCount
                  )} 명`}
                {languageState === "EN" &&
                  `${formattingNumber(
                    watchVideoState.subscriberCount
                  )} subscribers`}
              </div>
            </div>
            <div className="watch-video-channel-subscribtion-button">
              {data.watchVideoData.subscribe[languageState]}
            </div>
          </div>
          <div className="watch-video-description">
            {watchVideoState.description}
          </div>
          <Line />
          <div className="watch-video-comments">
            {languageState === "KOR" &&
              `댓글 ${watchVideoState.commentCount}개`}
            {languageState === "EN" &&
              `${watchVideoState.commentCount} Comments`}
          </div>
        </div>
      )}

      <div className="watch-video-relative-list">
        {/* 오른쪽에 관련된 비디오 추천목록 */}
        {isRelativeVideoLoading
          ? "Loading..."
          : relativeVideoItems.map(
              (i, index) =>
                i.snippet && (
                  <div className="relative-item-wrapper" key={index}>
                    <div className="relative-item-thumbnails">
                      <img src={i.snippet.thumbnails.medium.url} alt="" />
                    </div>
                    <div className="relative-item-info">
                      <div className="relative-item-title">
                        {i.snippet.title}
                      </div>
                      <div className="relative-item-channel-name">
                        {i.snippet.channelTitle}
                      </div>
                    </div>
                  </div>
                )
            )}
      </div>
    </div>
  );
};

export default WatchVideo;
