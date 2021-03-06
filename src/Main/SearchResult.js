import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./SearchResult.scss";
import { themeStateContext, SideBarContext, MiniSideBarContext } from "../App";
import axios from "axios";

const SearchResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();
  const [channelItems, setChannelItems] = useState();
  const location = useLocation();
  const { themeState } = useContext(themeStateContext);
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const { setIsOpenMiniSideBar } = useContext(MiniSideBarContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsOpenMiniSideBar(true);
    setIsLoading(true);
    const option = {
      part: "snippet",
      regionCode: "KR",
      chart: "mostPopular",
      fields:
        "items(snippet.title,snippet.channelTitle, snippet.channelId,snippet.publishedAt,snippet.description,snippet.thumbnails.medium.url, id) ",
      fields2:
        "items(snippet.title,id,snippet.description,snippet.thumbnails.default.url,statistics)",
      maxResults: 7,
      apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    };
    const getSearchData = async (value) => {
      const url = `https://www.googleapis.com/youtube/v3/search?&part=${option.part}&q=${value}&regionCode=${option.regionCode}&maxResults=${option.maxResults}&fields=${option.fields}&key=${option.apiKey}`;
      const result = await axios.get(url);
      return result.data.items;

      //   const result = {
      //     kind: "youtube#searchListResponse",
      //     etag: "5nIs8ZHaMvwFKGienUk9LY2HM4s",
      //     nextPageToken: "CAcQAA",
      //     regionCode: "KR",
      //     pageInfo: {
      //       totalResults: 1000000,
      //       resultsPerPage: 7,
      //     },
      //     items: [
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "eJP3gfVSEyEle9PgJFm0aLlC5xQ",
      //         id: {
      //           kind: "youtube#video",
      //           videoId: "sWN2dxP4Vtw",
      //         },
      //         snippet: {
      //           publishedAt: "2021-09-17T10:15:03Z",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //           title: "?????? ????????? ???????????? ?????? ???",
      //           description:
      //             "?????? ??????????????? https://www.instagram.com/ggoginamja/ ?????? https://vt.tiktok.com/ZSJVCHvFc/ ?????????????????? nonot00t@gmail.com [BGM] ...",
      //           thumbnails: {
      //             default: {
      //               url: "https://i.ytimg.com/vi/sWN2dxP4Vtw/default.jpg",
      //               width: 120,
      //               height: 90,
      //             },
      //             medium: {
      //               url: "https://i.ytimg.com/vi/sWN2dxP4Vtw/mqdefault.jpg",
      //               width: 320,
      //               height: 180,
      //             },
      //             high: {
      //               url: "https://i.ytimg.com/vi/sWN2dxP4Vtw/hqdefault.jpg",
      //               width: 480,
      //               height: 360,
      //             },
      //           },
      //           channelTitle: "???????????? MeatMan",
      //           liveBroadcastContent: "none",
      //           publishTime: "2021-09-17T10:15:03Z",
      //         },
      //       },
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "2JUul-pTmKIhZuF6XrbMamKgfnI",
      //         id: {
      //           kind: "youtube#video",
      //           videoId: "WguVom3vXl0",
      //         },
      //         snippet: {
      //           publishedAt: "2021-11-12T10:15:01Z",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //           title: "????????? ???????????? ??????",
      //           description:
      //             "????????? ???????????? *??? ????????? ????????? Dalda?????? ?????????????????????* ??????????????? https://www.instagram.com/ggoginamja/ ?????????????????? nonot00t@gmail.com [BGM] ...",
      //           thumbnails: {
      //             default: {
      //               url: "https://i.ytimg.com/vi/WguVom3vXl0/default.jpg",
      //               width: 120,
      //               height: 90,
      //             },
      //             medium: {
      //               url: "https://i.ytimg.com/vi/WguVom3vXl0/mqdefault.jpg",
      //               width: 320,
      //               height: 180,
      //             },
      //             high: {
      //               url: "https://i.ytimg.com/vi/WguVom3vXl0/hqdefault.jpg",
      //               width: 480,
      //               height: 360,
      //             },
      //           },
      //           channelTitle: "???????????? MeatMan",
      //           liveBroadcastContent: "none",
      //           publishTime: "2021-11-12T10:15:01Z",
      //         },
      //       },
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "gMxQ0V5FRN6cf90bNyG9Sz3mcto",
      //         id: {
      //           kind: "youtube#video",
      //           videoId: "dEzMEjXSlgY",
      //         },
      //         snippet: {
      //           publishedAt: "2021-10-22T10:15:01Z",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //           title: "???????????? ????????? ????????? ?????? ???",
      //           description:
      //             "?????? ????????? ?????? ?????? ??????????????? https://www.instagram.com/ggoginamja/ ?????????????????? nonot00t@gmail.com [BGM] 1. [??????] My New Life - BLAEKER ...",
      //           thumbnails: {
      //             default: {
      //               url: "https://i.ytimg.com/vi/dEzMEjXSlgY/default.jpg",
      //               width: 120,
      //               height: 90,
      //             },
      //             medium: {
      //               url: "https://i.ytimg.com/vi/dEzMEjXSlgY/mqdefault.jpg",
      //               width: 320,
      //               height: 180,
      //             },
      //             high: {
      //               url: "https://i.ytimg.com/vi/dEzMEjXSlgY/hqdefault.jpg",
      //               width: 480,
      //               height: 360,
      //             },
      //           },
      //           channelTitle: "???????????? MeatMan",
      //           liveBroadcastContent: "none",
      //           publishTime: "2021-10-22T10:15:01Z",
      //         },
      //       },
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "WdizSLF_UGzg7VQ1ZYzOM7Rlt-4",
      //         id: {
      //           kind: "youtube#video",
      //           videoId: "K2sWDoPuvkM",
      //         },
      //         snippet: {
      //           publishedAt: "2021-08-27T10:15:00Z",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //           title: "?????? ????????? ?????? ?????? ?????? ???",
      //           description:
      //             "?????? ?????? ????????? ?????? ?????? ????????? ????????? ?????? ?????? ???????????? ????????? ????????? ?????? ???????????? ????????? ?????? ???????????? ????????? ??? ??????????????? ...",
      //           thumbnails: {
      //             default: {
      //               url: "https://i.ytimg.com/vi/K2sWDoPuvkM/default.jpg",
      //               width: 120,
      //               height: 90,
      //             },
      //             medium: {
      //               url: "https://i.ytimg.com/vi/K2sWDoPuvkM/mqdefault.jpg",
      //               width: 320,
      //               height: 180,
      //             },
      //             high: {
      //               url: "https://i.ytimg.com/vi/K2sWDoPuvkM/hqdefault.jpg",
      //               width: 480,
      //               height: 360,
      //             },
      //           },
      //           channelTitle: "???????????? MeatMan",
      //           liveBroadcastContent: "none",
      //           publishTime: "2021-08-27T10:15:00Z",
      //         },
      //       },
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "BSDkOG5NkAIaGuXpWsSKPN8-aOo",
      //         id: {
      //           kind: "youtube#video",
      //           videoId: "j5AJv_5Da1w",
      //         },
      //         snippet: {
      //           publishedAt: "2021-07-16T10:15:05Z",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //           title: "???????????? ????????????",
      //           description:
      //             "?????? ?????? ????????? ???????????? ?????????????????? ????????? ??? ?????????????????? ?????? ????????? ?????? ????????? ????????? ??????????????? ????????? ???????????? ???????????? ????????? ??? ????????? ?????? ??? ...",
      //           thumbnails: {
      //             default: {
      //               url: "https://i.ytimg.com/vi/j5AJv_5Da1w/default.jpg",
      //               width: 120,
      //               height: 90,
      //             },
      //             medium: {
      //               url: "https://i.ytimg.com/vi/j5AJv_5Da1w/mqdefault.jpg",
      //               width: 320,
      //               height: 180,
      //             },
      //             high: {
      //               url: "https://i.ytimg.com/vi/j5AJv_5Da1w/hqdefault.jpg",
      //               width: 480,
      //               height: 360,
      //             },
      //           },
      //           channelTitle: "???????????? MeatMan",
      //           liveBroadcastContent: "none",
      //           publishTime: "2021-07-16T10:15:05Z",
      //         },
      //       },
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "N6_bIHHR3FXQofsk2oDYSMBzkPQ",
      //         id: {
      //           kind: "youtube#channel",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //         },
      //         snippet: {
      //           publishedAt: "2019-08-06T03:26:25Z",
      //           channelId: "UCT3CumbFIJiW33uq0UI3zlg",
      //           title: "???????????? MeatMan",
      //           description:
      //             "????????? ?????? ????????? ????????? ?????? ??????????????? ??? ?????? ????????? ????????? ??????????????? ????????? ?????? ????????? ??? ?????? ???????????? ?????????????????????.",
      //           thumbnails: {
      //             default: {
      //               url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s88-c-k-c0xffffffff-no-rj-mo",
      //             },
      //             medium: {
      //               url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s240-c-k-c0xffffffff-no-rj-mo",
      //             },
      //             high: {
      //               url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s800-c-k-c0xffffffff-no-rj-mo",
      //             },
      //           },
      //           channelTitle: "???????????? MeatMan",
      //           liveBroadcastContent: "none",
      //           publishTime: "2019-08-06T03:26:25Z",
      //         },
      //       },
      //       {
      //         kind: "youtube#searchResult",
      //         etag: "dTnUQvIWjN1TOVKQHn5SH8rU15o",
      //         id: {
      //           kind: "youtube#video",
      //           videoId: "rYhriUCexJs",
      //         },
      //         snippet: {
      //           publishedAt: "2021-11-17T10:00:23Z",
      //           channelId: "UCdfhK0yIMjmhcQ3gP-qpXRw",
      //           title: "????????? ????????? ??? ????????? ?????? ?????? ??? ?????????!",
      //           description:
      //             "???????????? #??????????????? #????????? ???????????????~ ???????????? ???????????????^^ ?????????????????? ????????? ???????????????. ????????? ????????? ??????????????? ??? ?????? ?????????. ?????? ??? ?????? ...",
      //           thumbnails: {
      //             default: {
      //               url: "https://i.ytimg.com/vi/rYhriUCexJs/default.jpg",
      //               width: 120,
      //               height: 90,
      //             },
      //             medium: {
      //               url: "https://i.ytimg.com/vi/rYhriUCexJs/mqdefault.jpg",
      //               width: 320,
      //               height: 180,
      //             },
      //             high: {
      //               url: "https://i.ytimg.com/vi/rYhriUCexJs/hqdefault.jpg",
      //               width: 480,
      //               height: 360,
      //             },
      //           },
      //           channelTitle: "??????TV ?????????",
      //           liveBroadcastContent: "none",
      //           publishTime: "2021-11-17T10:00:23Z",
      //         },
      //       },
      //     ],
      //   };
      //   return result.items;
    };

    const getChannelData = async (items) => {
      let channelIDsString = "";
      items.forEach((i) => {
        channelIDsString += i.snippet.channelId + ",";
      });
      channelIDsString = channelIDsString.slice(0, -1);

      const urlGetChannel = `https://www.googleapis.com/youtube/v3/channels?part=${option.part}&id=${channelIDsString}&fields=${option.fields2}&key=${option.apiKey}`;
      const channelData = await axios.get(urlGetChannel);
      return channelData.data.items;
    };
    const setStateFunc = async () => {
      return await new Promise((resolve) => {
        //query string??? ??????????????? ??????
        let q = decodeURI(location.search).slice(1); // "q=apple"
        let firstEqualIndex = q.indexOf("=");
        // const key = q.slice(0, firstEqualIndex); //q
        const value = q.slice(firstEqualIndex + 1); //apple
        resolve(value);
      });
    };

    setStateFunc()
      .then((value) => getSearchData(value))
      .then((items) => {
        console.log("itmes : ", items);
        setItems(items);
        getChannelData(items)
          .then((channelData) => {
            return new Promise((resolve) => {
              setChannelItems(() => {
                let table = {};
                if (channelData) {
                  channelData.forEach((i) => {
                    table[i.id] = {
                      title: i.snippet.title,
                      description: i.snippet.description,
                      thumbnails: i.snippet.thumbnails,
                    };
                  });
                }
                return table;
              });
              resolve();
            });
          })
          .then(() => {
            setIsLoading(false);
          });
      })
      .catch((e) => {
        navigate("/");
      });
  }, [location, navigate, setIsOpenMiniSideBar]);
  return (
    <div
      className={
        isOpenSideBar && isWindowSizeXL
          ? "main main-" + themeState
          : "main side-close-main main-" + themeState
      }
    >
      {isLoading ? (
        "Loading ..."
      ) : (
        <div className="search-result-container">
          {items.length < 1 && (
            <div className={"no-result-found no-result-found-" + themeState}>
              ?????? ?????? ??????
            </div>
          )}
          {(items ?? []).map((i, index) => (
            <div
              className={
                "search-item-wrapper search-item-wrapper-" + themeState
              }
              key={index}
            >
              <Link to={`/watch?v=${i.id.videoId}`}>
                <div className="search-thumbnail">
                  <img src={i.snippet.thumbnails.medium.url} alt="thumbnails" />
                </div>
              </Link>
              <div className="search-item-info">
                <Link to={`/watch?v=${i.id.videoId}`}>
                  <div
                    className={
                      "search-item-title search-item-title-" + themeState
                    }
                  >
                    {i.snippet.title}
                  </div>
                </Link>
                <div className="search-item-view-and-time"></div>
                <div className="search-item-channel">
                  <div className="search-channel-icon">
                    <img
                      src={
                        channelItems[i.snippet.channelId].thumbnails.default.url
                      }
                      alt=""
                    />
                  </div>
                  <div className="search-channel-title">
                    {i.snippet.channelTitle}
                  </div>
                </div>
                <div className="search-item-description">
                  {i.snippet.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
