import React, { useEffect, useState, useContext } from "react";
import "./Main.scss";
import axios from "axios";
import FilterBar from "./FilterBar";
import { SideBarContext, themeStateContext, MiniSideBarContext } from "../App";
import { Link } from "react-router-dom";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsState, setItems] = useState([]);
  const [channelItemsState, setChannelItems] = useState([]);
  // const [isScrollBottom, setIsScrollBottom] = useState(false);
  const { setIsOpenMiniSideBar } = useContext(MiniSideBarContext);
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const { themeState } = useContext(themeStateContext);

  useEffect(() => {
    setIsOpenMiniSideBar(true);
  }, [setIsOpenMiniSideBar]);

  useEffect(() => {
    const option = {
      part: "snippet,statistics",
      regionCode: "KR",
      chart: "mostPopular",
      maxResults: 20,
      fields:
        "items(id, snippet.title,snippet.channelTitle,snippet.channelId,snippet.publishedAt,snippet.description,snippet.tags,snippet.thumbnails.medium.url,statistics)",
      apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    };

    const getData = async () => {
      const url_mostPopular = `https://www.googleapis.com/youtube/v3/videos?part=${option.part}&chart=${option.chart}&maxResults=${option.maxResults}&regionCode=${option.regionCode}&fields=${option.fields}&key=${option.apiKey}`;

      const result = await axios.get(url_mostPopular);
      console.log("reesult:", result);
      return result.data.items;
    };

    const option2 = {
      fields:
        "items(snippet.title,id,snippet.description,snippet.thumbnails.default.url,statistics)",
    };

    const getChannelData = async (items) => {
      let channelIDsString = "";
      items.forEach((i) => {
        channelIDsString += i.snippet.channelId + ",";
      });
      channelIDsString = channelIDsString.slice(0, -1);

      const urlGetChannel = `https://www.googleapis.com/youtube/v3/channels?part=${option.part}&id=${channelIDsString}&fields=${option2.fields}&key=${option.apiKey}`;
      const channelData = await axios.get(urlGetChannel);
      return channelData.data.items;
    };

    getData().then((result) => {
      // setItems(result.items);
      console.log("helelelelelel");
      setItems(result);
      getChannelData(result).then((channelData) => {
        return new Promise((resolve) => {
          setChannelItems(() => {
            let table = {};
            channelData.forEach((i) => {
              table[i.id] = {
                title: i.snippet.title,
                description: i.snippet.description,
                thumbnails: i.snippet.thumbnails,
                subscriberCount: i.statistics.subscriberCount,
              };
            });
            return table;
          });
          resolve();
        }).then(() => {
          setIsLoading(false);
        });
      });
    });
    // .catch((e) => {
    //   alert(e + "\n 인기 동영상 불러오기 실패");
    // });
  }, []);

  /* 스크롤바가 제일 하단에 도착했을때, api call 을 하기위한 useeffect*/
  // useEffect(() => {
  //   //scroll 시 data update
  //   const handlerScrollEvent = () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       console.log("here is bottm");
  //       // setIsScrollBottom(true);
  //     } else {
  //       // setIsScrollBottom(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handlerScrollEvent);

  //   return window.removeEventListener("scroll", handlerScrollEvent);
  // }, []);

  return (
    <div
      className={
        isOpenSideBar && isWindowSizeXL
          ? "main main-" + themeState
          : "main side-close-main main-" + themeState
      }
    >
      <div className="contents-wrapper">
        <FilterBar />

        {isLoading ? (
          <div className="loading">Loading ...</div>
        ) : (
          itemsState.map((item, index) => (
            <div className="item-container" key={index}>
              {console.log(itemsState)}
              <Link
                to={`/watch?v=${item.id}`}
                state={{
                  title: item.snippet.title,
                  channelTitle: item.snippet.channelTitle,
                  channelIconUrl:
                    channelItemsState[item.snippet.channelId].thumbnails.default
                      .url,
                  viewCount: item.statistics.viewCount,
                  likeCount: item.statistics.likeCount,
                  dislikeCount: item.statistics.dislikeCount,
                  commentCount: item.statistics.commentCount,
                  publishedAt: item.snippet.publishedAt,
                  description: item.snippet.description,
                  tags: item.snippet.tags,
                  subscriberCount:
                  channelItemsState[item.snippet.channelId].subscriberCount,
                }}
              >
                <div className="video-thumbnail">
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                </div>
              </Link>
              <div className="video-description-container">
                <div className="channel-icon">
                  <img
                    src={
                      channelItemsState[item.snippet.channelId].thumbnails
                        .default.url
                    }
                    alt=""
                  />
                </div>
                <div className="video-description">
                  <div className={"video-title video-title-" + themeState}>
                    {item.snippet.title}
                  </div>
                  <div
                    className={
                      "video-channel-name video-channel-name-" + themeState
                    }
                  >
                    {item.snippet.channelTitle}
                  </div>
                  <div className="video-viewcount">
                    조회수 {item.statistics.viewCount}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {/* update video */}
      </div>
    </div>
  );
};

// const UpdateVideo = () => {
//   return;
// }

export default Main;
