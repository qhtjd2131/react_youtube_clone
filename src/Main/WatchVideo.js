import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import axios from "axios";

const WatchVideo = () => {
  const location = useLocation();

  const [relativeVideoItems, setRelativeVideoItems] = useState([]);

  const { isOpenMiniSideBar, setIsOpenMiniSideBar } =
    useContext(MiniSideBarContext);
  const { setIsOpenSideBar } = useContext(SideBarContext);
  const { themeState } = useContext(themeStateContext);
  const { languageState } = useContext(languageStateContext);

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

  useEffect(() => {
    const getRelativeVideo = async () => {
      const option = {
        part: "snippet",
        regionCode: "KR",
        chart: "mostPopular",
        maxResults: 20,
        apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
      };
      const getRelativeVideoUrl = `https://www.googleapis.com/youtube/v3/search?part=${
        option.part
      }&type=video&relatedToVideoId=${getQueryString()}&maxResults=${option.maxResults}&key=${option.apiKey}`;

      const result = await axios.get(getRelativeVideoUrl);
      const result2 = {
        kind: "youtube#searchResult",
        etag: "3Apel4DsWeLxf-EGOnnyw1RXUX4",
        id: {
          kind: "youtube#video",
          videoId: "VCmpkk789H0",
        },
        snippet: {
          publishedAt: "2021-09-01T15:35:37Z",
          channelId: "UCQ7X91NIBS174KJT4Id0lnQ",
          title:
            "장인들의 노래 ㅣ 발젭 x 캐인 x 막내현진 x 시간의숲 x 새루 x 병병병 x 순당무 x 헤이스트 x 현솔 x ㅇyㅇ x oyo x 만당",
          description:
            "ㅇ멋진 비트 만들어주신 Grabby님 감사합니다! 구독으로 작품 활동을 응원해주세요!\nhttps://www.youtube.com/watch?v=w3KyTxHQYN4 \n\nㅇ각 장인들의 유튜브 링크입니다. 강의 영상과 플레이 영상들을 참고해서 장인이 되어보세요!\n0:38 마스터이 / 발젭\nhttps://www.youtube.com/c/%EB%B0%9C%EC%A0%AD\n1:00 렝가 / 캐인\nhttps://www.youtube.com/c/%EC%BA%90%EC%9D%B8\n1:11 아리 / 막내현진\nhttps://www.youtube.com/channel/UCGuurERkbPnHhEkTZOq_WDw\n1:44 탈론 / 시간의 숲\nhttps://www.youtube.com/c/%EC%8B%9C%EA%B0%84%EC%9D%98%EC%88%B2\n1:55 블라디 / 새루\nhttps://www.youtube.com/channel/UCzZepWSPs2VCpCirB3zGgtw\n2:05 볼베 / ㅇyㅇ\nhttps://www.youtube.com/channel/UCm6Y-gVqhlhX4FzrJCtsSzg\n2:16 하이머딩거 / 병병병\nhttps://www.youtube.com/channel/UCLtZE7A3iN-oysHf5_vJYBA\n2:50 룰루 / 순당무\nhttps://www.youtube.com/channel/UCZW0yRW2HK7_fzgL9HQu9ZA\n3:01 미드 파이크 / 헤이스트\nhttps://www.youtube.com/c/TV%ED%97%A4%EC%9D%B4%EC%8A%A4%ED%8A%B8\n3:11 아우렐리온솔 / 현솔\nhttps://www.youtube.com/channel/UCEWkdaR_6g6giiy8_vI6fmw\n\nㅇ business : klvs234@gmail.com (광고&외주&콜라보) \n\nㅇ킬링벌스의 뮤비를 놓치고 싶지 않다면 🔔 알림설정 꾸욱 🔔\n\nㅇ저희 채널을 후원해주셔서 감사합니다!\n채널 멤버십 가입 혜택 확인↓\nhttps://www.youtube.com/channel/UCQ7X91NIBS174KJT4Id0lnQ/join\n\n#킬링유니벌스",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/VCmpkk789H0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/VCmpkk789H0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/VCmpkk789H0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "킬링벌's KillingBees",
          liveBroadcastContent: "none",
          publishTime: "2021-09-01T15:35:37Z",
        },
      };
      console.log("관련된 비디오", result.data.items);

      return result.data.items;
    };

    getRelativeVideo().then((items) => {
      setRelativeVideoItems(items);
    });
  }, []);

  const formattingNumber = (num) => {
    switch (languageState) {
      case "KOR":
        if (num >= 100000) {
          console.log(parseInt(num / 10000) + "만");
          return parseInt(num / 10000) + "만";
        } else if (num >= 10000) {
          console.log((num / 10000).toFixed(1) + "만");
          return (num / 10000).toFixed(1) + "만";
        } else if (num >= 1000) {
          console.log((num / 1000).toFixed(1) + "천");
          return (num / 1000).toFixed(1) + "천";
        } else {
          return num;
        }
      //   case "EN":
    }
  };
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
            조회수 {location.state.viewCount}회
          </div>
          <div className="watch-video-info-etc">
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <AiOutlineLike />
              </div>
              {formattingNumber(location.state.likeCount)}
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <AiOutlineDislike />
              </div>
              {formattingNumber(location.state.dislikeCount)}
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <RiShareForwardLine />
              </div>
              공유
            </div>
            <div className="wvi-item">
              <div className="wvi-item-icon">
                <GiSaveArrow />
              </div>
              저장
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
            <img src={location.state.channelIconUrl} alt="" />
          </div>
          <div className="watch-video-channel-info">
            <div className="watch-video-channel-title">
              {location.state.channelTitle}
            </div>
            <div className="watch-video-channel-subscribers">
              구독자 {location.state.subscriberCount}명
            </div>
          </div>
          <div className="watch-video-channel-subscribtion-button">구독</div>
        </div>
        <div className="watch-video-description">
          {location.state.videoDescription}
        </div>
        <Line />
        <div className="watch-video-comments">
          댓글 {location.state.commentCount}개
        </div>
      </div>
      <div className="watch-video-relative-list">
        {relativeVideoItems.map((i, index) => (
          <div className="relative-item-wrapper" key={index}>
            <div className="relative-item-thumbnails">
              <img src={i.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="relative-item-info">
              <div className="relative-item-title">{i.snippet.title}</div>
              <div className="relative-item-channel-name">
                {i.snippet.channelTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchVideo;
