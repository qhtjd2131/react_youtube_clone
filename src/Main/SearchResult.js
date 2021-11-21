import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./SearchResult.scss";
import { themeStateContext, SideBarContext, MiniSideBarContext } from "../App";
import axios from "axios";
import MiniSideBar from "../Side/MiniSideBar";

const SearchResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();
  const [channelItems, setChannelItems] = useState();
  const location = useLocation();
  const { themeState } = useContext(themeStateContext);
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const { setIsOpenMiniSideBar } = useContext(MiniSideBarContext);

  useEffect(() => {
    setIsOpenMiniSideBar(true);
    setIsLoading(true);
    const option = {
      part: "snippet",
      regionCode: "KR",
      chart: "mostPopular",
      maxResults: 7,
      apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    };
    const getSearchData = async (value) => {
      const url = `https://www.googleapis.com/youtube/v3/search?&part=${option.part}&q=${value}&regionCode=${option.regionCode}&maxResults=${option.maxResults}&key=${option.apiKey}`;
      // const result = await axios.get(url);
      const result = {
        kind: "youtube#searchListResponse",
        etag: "5nIs8ZHaMvwFKGienUk9LY2HM4s",
        nextPageToken: "CAcQAA",
        regionCode: "KR",
        pageInfo: {
          totalResults: 1000000,
          resultsPerPage: 7,
        },
        items: [
          {
            kind: "youtube#searchResult",
            etag: "eJP3gfVSEyEle9PgJFm0aLlC5xQ",
            id: {
              kind: "youtube#video",
              videoId: "sWN2dxP4Vtw",
            },
            snippet: {
              publishedAt: "2021-09-17T10:15:03Z",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
              title: "평생 써먹는 스테이크 굽는 법",
              description:
                "특별 인스타그램 https://www.instagram.com/ggoginamja/ 틱톡 https://vt.tiktok.com/ZSJVCHvFc/ 비즈니스문의 nonot00t@gmail.com [BGM] ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/sWN2dxP4Vtw/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/sWN2dxP4Vtw/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/sWN2dxP4Vtw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "고기남자 MeatMan",
              liveBroadcastContent: "none",
              publishTime: "2021-09-17T10:15:03Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "2JUul-pTmKIhZuF6XrbMamKgfnI",
            id: {
              kind: "youtube#video",
              videoId: "WguVom3vXl0",
            },
            snippet: {
              publishedAt: "2021-11-12T10:15:01Z",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
              title: "고기로 고백하는 방법",
              description:
                "말로는 못하게씀 *이 영상의 자막은 Dalda에서 제작되었습니다* 인스타그램 https://www.instagram.com/ggoginamja/ 비즈니스문의 nonot00t@gmail.com [BGM] ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/WguVom3vXl0/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/WguVom3vXl0/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/WguVom3vXl0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "고기남자 MeatMan",
              liveBroadcastContent: "none",
              publishTime: "2021-11-12T10:15:01Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "gMxQ0V5FRN6cf90bNyG9Sz3mcto",
            id: {
              kind: "youtube#video",
              videoId: "dEzMEjXSlgY",
            },
            snippet: {
              publishedAt: "2021-10-22T10:15:01Z",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
              title: "삼겹살을 최대한 맛있게 먹는 법",
              description:
                "내가 열심히 사는 이유 인스타그램 https://www.instagram.com/ggoginamja/ 비즈니스문의 nonot00t@gmail.com [BGM] 1. [굽기] My New Life - BLAEKER ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/dEzMEjXSlgY/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/dEzMEjXSlgY/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/dEzMEjXSlgY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "고기남자 MeatMan",
              liveBroadcastContent: "none",
              publishTime: "2021-10-22T10:15:01Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "WdizSLF_UGzg7VQ1ZYzOM7Rlt-4",
            id: {
              kind: "youtube#video",
              videoId: "K2sWDoPuvkM",
            },
            snippet: {
              publishedAt: "2021-08-27T10:15:00Z",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
              title: "평생 써먹는 숯불 고기 굽는 법",
              description:
                "숯에 물을 뿌려서 불을 끄는 방식은 오히려 불이 순간 올라오는 경우가 있으니 항상 조심해서 거리를 두고 뿌리셔야 합니다 ※ 인스타그램 ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/K2sWDoPuvkM/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/K2sWDoPuvkM/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/K2sWDoPuvkM/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "고기남자 MeatMan",
              liveBroadcastContent: "none",
              publishTime: "2021-08-27T10:15:00Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "BSDkOG5NkAIaGuXpWsSKPN8-aOo",
            id: {
              kind: "youtube#video",
              videoId: "j5AJv_5Da1w",
            },
            snippet: {
              publishedAt: "2021-07-16T10:15:05Z",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
              title: "만원으로 고기먹기",
              description:
                "싸다 모든 분들께 진심으로 감사드립니다 상훈아 나 걱정해준다고 매일 연락해 주고 힘줘서 고마워 아니었으면 어떻게 버텼을지 모르겠음 그런데 난 너한테 해준 게 ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/j5AJv_5Da1w/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/j5AJv_5Da1w/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/j5AJv_5Da1w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "고기남자 MeatMan",
              liveBroadcastContent: "none",
              publishTime: "2021-07-16T10:15:05Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "N6_bIHHR3FXQofsk2oDYSMBzkPQ",
            id: {
              kind: "youtube#channel",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
            },
            snippet: {
              publishedAt: "2019-08-06T03:26:25Z",
              channelId: "UCT3CumbFIJiW33uq0UI3zlg",
              title: "고기남자 MeatMan",
              description:
                "요리를 하고 나누며 행복한 남자 부족하기만 한 저를 사랑해 주셔서 감사합니다 보시고 미소 지으실 수 있는 영상으로 보답하겠습니다.",
              thumbnails: {
                default: {
                  url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s88-c-k-c0xffffffff-no-rj-mo",
                },
                medium: {
                  url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s240-c-k-c0xffffffff-no-rj-mo",
                },
                high: {
                  url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s800-c-k-c0xffffffff-no-rj-mo",
                },
              },
              channelTitle: "고기남자 MeatMan",
              liveBroadcastContent: "none",
              publishTime: "2019-08-06T03:26:25Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "dTnUQvIWjN1TOVKQHn5SH8rU15o",
            id: {
              kind: "youtube#video",
              videoId: "rYhriUCexJs",
            },
            snippet: {
              publishedAt: "2021-11-17T10:00:23Z",
              channelId: "UCdfhK0yIMjmhcQ3gP-qpXRw",
              title: "여윽시 고기는 내 맘대로 썰어 무야 제 맛이죠!",
              description:
                "돈마호크 #생돼지갈비 #삼겹살 안녕하세요~ 돼지고기 먹방입니다^^ 시청해주셔서 대단히 감사합니다. 구독과 좋아요 알림설정은 큰 힘이 됩니다. 제휴 및 문의 ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/rYhriUCexJs/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/rYhriUCexJs/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/rYhriUCexJs/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "산적TV 밥굽남",
              liveBroadcastContent: "none",
              publishTime: "2021-11-17T10:00:23Z",
            },
          },
        ],
      };
      return result.items;
      // return result.data.items;
    };

    const getChannelData = async (items) => {
      let channelIDsString = "";
      items.forEach((i) => {
        channelIDsString += i.snippet.channelId + ",";
      });
      channelIDsString = channelIDsString.slice(0, -1);

      const urlGetChannel = `https://www.googleapis.com/youtube/v3/channels?part=${option.part}&id=${channelIDsString}&key=${option.apiKey}`;
      //   const channelData = await axios.get(urlGetChannel);
      //   return channelData.data.items;
      const channelData = [
        {
          kind: "youtube#channel",
          etag: "_Y-xHENcyexcq-TSuFCqI_4tdKM",
          id: "UCdfhK0yIMjmhcQ3gP-qpXRw",
          snippet: {
            title: "산적TV 밥굽남",
            description:
              "술과 고기를 수행중인 밥굽남입니다~\n\n문의 및 제보: ojk0131@naver.com",
            publishedAt: "2017-03-16T12:02:32Z",
            thumbnails: {
              default: {
                url: "https://yt3.ggpht.com/ytc/AKedOLSQvUD4F2XiEbm39p05bEpOPxERhBELeBGvSgoQFg=s88-c-k-c0x00ffffff-no-rj",
                width: 88,
                height: 88,
              },
              medium: {
                url: "https://yt3.ggpht.com/ytc/AKedOLSQvUD4F2XiEbm39p05bEpOPxERhBELeBGvSgoQFg=s240-c-k-c0x00ffffff-no-rj",
                width: 240,
                height: 240,
              },
              high: {
                url: "https://yt3.ggpht.com/ytc/AKedOLSQvUD4F2XiEbm39p05bEpOPxERhBELeBGvSgoQFg=s800-c-k-c0x00ffffff-no-rj",
                width: 800,
                height: 800,
              },
            },
            localized: {
              title: "산적TV 밥굽남",
              description:
                "술과 고기를 수행중인 밥굽남입니다~\n\n문의 및 제보: ojk0131@naver.com",
            },
            country: "KR",
          },
        },
        {
          kind: "youtube#channel",
          etag: "BE2oBNLS0iS6SChyK5B2FFZY5BU",
          id: "UCT3CumbFIJiW33uq0UI3zlg",
          snippet: {
            title: "고기남자 MeatMan",
            description:
              "요리를 하고 나누며 행복한 남자\n\n부족하기만 한 저를 사랑해 주셔서 감사합니다\n보시고 미소 지으실 수 있는 영상으로 보답하겠습니다\n",
            customUrl: "고기남자",
            publishedAt: "2019-08-06T03:26:25Z",
            thumbnails: {
              default: {
                url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s88-c-k-c0x00ffffff-no-rj",
                width: 88,
                height: 88,
              },
              medium: {
                url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s240-c-k-c0x00ffffff-no-rj",
                width: 240,
                height: 240,
              },
              high: {
                url: "https://yt3.ggpht.com/ytc/AKedOLQa6lNRBpeoNcULQ1okihahP1rqdDoxF4txlNZLEQ=s800-c-k-c0x00ffffff-no-rj",
                width: 800,
                height: 800,
              },
            },
            localized: {
              title: "고기남자 MeatMan",
              description:
                "요리를 하고 나누며 행복한 남자\n\n부족하기만 한 저를 사랑해 주셔서 감사합니다\n보시고 미소 지으실 수 있는 영상으로 보답하겠습니다\n",
            },
            country: "KR",
          },
        },
      ];
      return channelData;
    };
    const setStateFunc = async () => {
      return await new Promise((resolve) => {
        //query string이 한개일때만 가정
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
        setItems(items);
        console.log("items :", items);
        getChannelData(items).then((channelData) => {
          setChannelItems(() => {
            let table = {};
            channelData.forEach((i) => {
              table[i.id] = {
                title: i.snippet.title,
                description: i.snippet.description,
                thumbnails: i.snippet.thumbnails,
              };
            });
            setIsLoading(false);
            console.log("Ttt", table);
            return table;
          });
        });
      });
  }, [location.search]);
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
          {items.map((i, index) => (
            <div
              className={
                "search-item-wrapper search-item-wrapper-" + themeState
              }
              key={index}
            >
              <div className="search-thumbnail">
                <img src={i.snippet.thumbnails.medium.url} alt="thumbnails" />
              </div>
              <div className="search-item-info">
                <div
                  className={
                    "search-item-title search-item-title-" + themeState
                  }
                >
                  {i.snippet.title}
                </div>
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
