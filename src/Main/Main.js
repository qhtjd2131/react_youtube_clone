import React, { useEffect, useState, useContext, createRef } from "react";
import YouTube from "react-youtube";
import "./Main.scss";
import axios from "axios";
import FilterBar from "./FilterBar";
import { SideBarContext, themeStateContext, searchTextContext } from "../App";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsState, setItems] = useState([]);
  const [ isScrollBottom, setIsScrollBottom ] = useState(false);

  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);
  const { themeState } = useContext(themeStateContext);
  const { searchText, setSearchText } = useContext(searchTextContext);


  const dataset_Search = {
    snippet: {
      publishedAt: "2018-04-11T15:00:01Z",
      channelId: "UCLkAepWjdylmXSltofFvsYQ",
      title: "Ep4 It‘s on you and I | BTS: Burn the Stage",
      description:
        "Can the show go on? BTS begin to wrap up their South America tour. Day-by-day, we see how the members passionately discuss how they can improve their ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Iiukq_ilT0Y/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Iiukq_ilT0Y/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Iiukq_ilT0Y/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BANGTANTV",
      liveBroadcastContent: "none",
      publishTime: "2018-04-11T15:00:01Z",
    },
  };

  useEffect(() => {
    const option = {
      part: "snippet",
      regionCode: "KR",
      chart: "mostPopular",
      maxResults: 20,
      apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    };
    const url = `https://www.googleapis.com/youtube/v3/search?&part=${option.part}&regionCode=${option.regionCode}&maxResults=${option.maxResults}&key=${option.apiKey}`;
    const url_mostPopular = `https://www.googleapis.com/youtube/v3/videos?part=${option.part}&chart=${option.chart}&maxResults=${option.maxResults}&regionCode=${option.regionCode}&key=${option.apiKey}`;
    
    const getData = async () => {
      // const result = await axios.get(url_mostPopular);
      // console.log(result);

      return await new Promise((resolve) =>
        setTimeout(() => {
          const result = {
            data: {
              kind: "youtube#videoListResponse",
              etag: "M5Rc3n1JUvDZq4-dFK358UCh4OA",
              items: [
                {
                  kind: "youtube#video",
                  etag: "834rRZS4TmBw_Gsf0uqc6atgwd0",
                  id: "H6LzImC2MEE",
                  snippet: {
                    publishedAt: "2021-11-17T00:18:45Z",
                    channelId: "UCjn-VbcIkAeXQKCmLJV8YwQ",
                    title:
                      "이라크 하이라이트 | 2022 카타르 월드컵 최종예선 대한민국 vs 이라크 로켓 하이라이트 | 쿠팡플레이",
                    description:
                      "🇰🇷 대한민국 3 - 0 이라크🇮🇶 \n\n하이라이트 더 보고 싶다면? 쿠팡플레이에서 보세요!\n🚩https://coupangplay.app.link/FIXVtzkdflb\n\n#이라크전 #카타르월드컵 #쿠팡플레이 #쿠팡",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/H6LzImC2MEE/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/H6LzImC2MEE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/H6LzImC2MEE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/H6LzImC2MEE/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/H6LzImC2MEE/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "쿠팡플레이 Coupang Play",
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "이라크 하이라이트 | 2022 카타르 월드컵 최종예선 대한민국 vs 이라크 로켓 하이라이트 | 쿠팡플레이",
                      description:
                        "🇰🇷 대한민국 3 - 0 이라크🇮🇶 \n\n하이라이트 더 보고 싶다면? 쿠팡플레이에서 보세요!\n🚩https://coupangplay.app.link/FIXVtzkdflb\n\n#이라크전 #카타르월드컵 #쿠팡플레이 #쿠팡",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "sjos33ZGsQKpL8QSwMnorXfQDhY",
                  id: "yFZh-Wqi7RI",
                  snippet: {
                    publishedAt: "2021-11-17T01:29:25Z",
                    channelId: "UCY2wHBgv2W30w6lqoLxq99g",
                    title: "[스파이더맨: 노 웨이 홈] 2차예고편",
                    description:
                      "“불청객들이 찾아오기 시작했어.. 모든 차원에서”\n\n이 예고편을 보기 위해 20211215시간 동안 눈물을 흘렸습니다..\n영화 #스파이더맨_노웨이홈 #2021년12월15일대개봉",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/yFZh-Wqi7RI/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/yFZh-Wqi7RI/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/yFZh-Wqi7RI/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/yFZh-Wqi7RI/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/yFZh-Wqi7RI/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "소니픽쳐스코리아",
                    categoryId: "1",
                    liveBroadcastContent: "none",
                    localized: {
                      title: "[스파이더맨: 노 웨이 홈] 2차예고편",
                      description:
                        "“불청객들이 찾아오기 시작했어.. 모든 차원에서”\n\n이 예고편을 보기 위해 20211215시간 동안 눈물을 흘렸습니다..\n영화 #스파이더맨_노웨이홈 #2021년12월15일대개봉",
                    },
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "lqHzRZBwDV1-nXXERPjlGrwa2qI",
                  id: "gUyCa6errBc",
                  snippet: {
                    publishedAt: "2021-11-15T10:00:13Z",
                    channelId: "UCviI9lzTe2pkxJ9M2ArA7WQ",
                    title:
                      "[4K] 정상수의 킬링벌스를 라이브로! l 명사수, 달이 뜨면, 부산을 대표해, Hiphop Style Rap, Break A Leg, Still 정상수 등",
                    description:
                      "00:00 오프닝\n00:27 명사수 (Grand Mix Ver.)\n01:59 달이 뜨면 (광대)\n03:15 부산을 대표해\n04:23 Hiphop Style Rap\n05:35 Break A Leg (Remix)\n06:42 Still 정상수\n08:08 Walk the Street\n09:42 REAL HIPHOP\n11:07 KV Freestyle (원곡 : 높이 뛰기)\n\n▶딩고프리스타일 (Dingo Freestyle) : http://bit.ly/Dingo__Freestyle\n▶딩고뮤직 (Dingo Music) : http://bit.ly/Dingo__Music\n▶일소라 (일반인들의 소름돋는 라이브) : http://bit.ly/ilsora\n\ncontact : musicbiz@makeus.com\n\n#정상수 #킬링벌스 #killingversevol2\n#딩고프리스타일 #DingoFreestyle",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/gUyCa6errBc/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/gUyCa6errBc/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/gUyCa6errBc/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/gUyCa6errBc/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/gUyCa6errBc/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "dingo freestyle",
                    tags: [
                      "정상수",
                      "킬링벌스",
                      "killingverse",
                      "killingversevol2",
                      "dingofreestyle",
                      "dingo",
                      "딩고",
                      "딩고프리스타일",
                      "딩프",
                      "DF",
                      "힙합",
                      "hiphop",
                      "부산",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "[4K] 정상수의 킬링벌스를 라이브로! l 명사수, 달이 뜨면, 부산을 대표해, Hiphop Style Rap, Break A Leg, Still 정상수 등",
                      description:
                        "00:00 오프닝\n00:27 명사수 (Grand Mix Ver.)\n01:59 달이 뜨면 (광대)\n03:15 부산을 대표해\n04:23 Hiphop Style Rap\n05:35 Break A Leg (Remix)\n06:42 Still 정상수\n08:08 Walk the Street\n09:42 REAL HIPHOP\n11:07 KV Freestyle (원곡 : 높이 뛰기)\n\n▶딩고프리스타일 (Dingo Freestyle) : http://bit.ly/Dingo__Freestyle\n▶딩고뮤직 (Dingo Music) : http://bit.ly/Dingo__Music\n▶일소라 (일반인들의 소름돋는 라이브) : http://bit.ly/ilsora\n\ncontact : musicbiz@makeus.com\n\n#정상수 #킬링벌스 #killingversevol2\n#딩고프리스타일 #DingoFreestyle",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "9lQ3fK4E8ctQj7uDb35Rec_JJjo",
                  id: "bF9oVjW2UV8",
                  snippet: {
                    publishedAt: "2021-11-15T03:00:12Z",
                    channelId: "UCtm_QoN2SIxwCE-59shX7Qg",
                    title:
                      "[UFC] UFC Fight Night 197 케네디 은제추쿠 vs 정다운 하이라이트 (11.14)",
                    description:
                      "UFC Fight Night 197 케네디 은제추쿠 vs 정다운 하이라이트",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/bF9oVjW2UV8/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/bF9oVjW2UV8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/bF9oVjW2UV8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/bF9oVjW2UV8/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/bF9oVjW2UV8/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "SPOTV",
                    tags: ["SPOTV", "스포티비"],
                    categoryId: "17",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "[UFC] UFC Fight Night 197 케네디 은제추쿠 vs 정다운 하이라이트 (11.14)",
                      description:
                        "UFC Fight Night 197 케네디 은제추쿠 vs 정다운 하이라이트",
                    },
                    defaultAudioLanguage: "zxx",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "96VX6a5fRXla4-FksZLcxVsI9A4",
                  id: "5vQoyLSnxKo",
                  snippet: {
                    publishedAt: "2021-11-16T14:30:01Z",
                    channelId: "UCxLc0zV-d2elxan2nc2xRCA",
                    title: "[#술꾼도시여자들/7회] 내 밥줄 끊길지라도 돈워리~",
                    description:
                      "#티빙에서스트리밍 #티빙오리지널 #술꾼도시여자들\n\n레전드 장면만 모아 모아\n묻지도 따지지도 않고 N회차 재생 가봅시다 #티전드+\n\n자니? 진짜 끊을거야,,,?\n티빙 바로가기 ☞ https://tving.onelink.me/xHqC/4828052e\n\n가입하기 전에 필.수.시.청 #ㅌㅂㅌㅂ\n☞ https://www.youtube.com/channel/UCxLc0zV-d2elxan2nc2xRCA",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/5vQoyLSnxKo/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/5vQoyLSnxKo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/5vQoyLSnxKo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/5vQoyLSnxKo/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/5vQoyLSnxKo/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "ᄐᄇᄐᄇ TVTV",
                    tags: [
                      "ㅌㅂㅌㅂ",
                      "술꾼도시여자들",
                      "술꾼도시여자들 7회 다시보기",
                      "술꾼도시여자들 개농장",
                      "술꾼도시여자들 결말",
                      "술꾼도시여자들 고등학교",
                      "술꾼도시여자들 고백",
                      "술꾼도시여자들 국밥",
                      "술꾼도시여자들 다시보기",
                      "술꾼도시여자들 담배",
                      "술꾼도시여자들 드라마 메이킹",
                      "술꾼도시여자들 드라마 예고",
                      "술꾼도시여자들 박영규",
                      "술꾼도시여자들 반응",
                      "술꾼도시여자들 사이다",
                      "술꾼도시여자들 술먹방",
                      "술꾼도시여자들 싸움",
                      "술꾼도시여자들 영양사",
                      "술꾼도시여자들 오복집",
                      "술꾼도시여자들 요약",
                      "술꾼도시여자들 욕싸움",
                      "술꾼도시여자들 이선빈",
                      "술꾼도시여자들 한선화 박영규",
                      "술꾼도시여자들 한선화 회장",
                      "술꾼도시여자들 회장",
                      "술꾼됫여자들 7화",
                      "술도녀 이선빈",
                      "이선빈",
                      "이선빈 드라마",
                      "이선빈 메이킹",
                      "이선빈 사투리",
                      "이선빈 술",
                      "이선빈 술꾼도시여자들",
                      "이선빈 연기",
                      "이선빈 욕",
                      "이선빈 정은지",
                      "이선빈 최시원",
                      "티빙",
                      "티빙 오리지널",
                      "티빙 추천",
                      "티빙 추천 드라마",
                      "참교육",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title: "[#술꾼도시여자들/7회] 내 밥줄 끊길지라도 돈워리~",
                      description:
                        "#티빙에서스트리밍 #티빙오리지널 #술꾼도시여자들\n\n레전드 장면만 모아 모아\n묻지도 따지지도 않고 N회차 재생 가봅시다 #티전드+\n\n자니? 진짜 끊을거야,,,?\n티빙 바로가기 ☞ https://tving.onelink.me/xHqC/4828052e\n\n가입하기 전에 필.수.시.청 #ㅌㅂㅌㅂ\n☞ https://www.youtube.com/channel/UCxLc0zV-d2elxan2nc2xRCA",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "Mbg_sV3C2JgJ2DAMgFQBRl7d2y4",
                  id: "-deTdtq-mWs",
                  snippet: {
                    publishedAt: "2021-11-16T06:54:29Z",
                    channelId: "UC014CTCdGJzeQfJtxnnMyjQ",
                    title:
                      "리얼먹방:) 느타리 고추장 칼국수, 표고 버섯 탕수육 | Shiitake mushroom Tangsuyuk | Kalguksu | REAL SOUND | ASMR MUKBANG",
                    description:
                      "[농식품부 x 햄지]\n\n얼마전 농장에서 직접 수확해 온 버섯 기억하시나요? \n(Duri Mushroom Farm)\n▶ https://youtu.be/Sy9H-LL2Z30\n\n두리농장에서 수확한 버섯으로 \n✨표고버섯탕수 & 느타리버섯 고추장 칼국수✨를 만들어보았습니다.\n\n우리 농축산물 많이 사랑해주세요~❤\n\n[MAFRA x Hamzy]\n\nToday's menu is Shiitake mushroom Tangsuyuk and Kalguksu Noodles (Duri Mushroom Farm)\n\n#햄지 #칼국수 #탕수육 #tangsuyuk #kalguksu #mukbang #eatingshow #asmr #realsound #hamzy #koreanfood #soulfood\n\n\n안녕하세요, 농림축산식품부 유튜브채널입니다.\n\nHello, this is The Official Youtube Channel of MAFRA(Ministry of Agriculture, Food and Rural Affairs), Republic of Korea\n\nINSTAGRAM : https://www.instagram.com/nong_ru_wahhhhh/ \n\nBLOG : https://blog.naver.com/mifaffgov\n\nFACEBOOK : https://www.facebook.com/mafrakorea\n\nTWITTER : https://twitter.com/mafrakorea\n\nHOMEPAGE : http://www.mafra.go.kr/mafra/index..do",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/-deTdtq-mWs/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/-deTdtq-mWs/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/-deTdtq-mWs/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/-deTdtq-mWs/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                    },
                    channelTitle: "농림축산식품부",
                    tags: [
                      "농림축산식품부",
                      "농식품부",
                      "MAFRA",
                      "mafra",
                      "청년농부",
                      "PLS",
                      "반려동물",
                      "청년농",
                      "귀농",
                      "귀촌",
                      "농림부",
                      "농업",
                      "햄지",
                      "hamzy",
                      "햄지 농식품부",
                      "hamzy mafra",
                      "Kalguksu",
                      "Tansuyuk",
                      "mukbang",
                      "ASMR",
                    ],
                    categoryId: "25",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "리얼먹방:) 느타리 고추장 칼국수, 표고 버섯 탕수육 | Shiitake mushroom Tangsuyuk | Kalguksu | REAL SOUND | ASMR MUKBANG",
                      description:
                        "[농식품부 x 햄지]\n\n얼마전 농장에서 직접 수확해 온 버섯 기억하시나요? \n(Duri Mushroom Farm)\n▶ https://youtu.be/Sy9H-LL2Z30\n\n두리농장에서 수확한 버섯으로 \n✨표고버섯탕수 & 느타리버섯 고추장 칼국수✨를 만들어보았습니다.\n\n우리 농축산물 많이 사랑해주세요~❤\n\n[MAFRA x Hamzy]\n\nToday's menu is Shiitake mushroom Tangsuyuk and Kalguksu Noodles (Duri Mushroom Farm)\n\n#햄지 #칼국수 #탕수육 #tangsuyuk #kalguksu #mukbang #eatingshow #asmr #realsound #hamzy #koreanfood #soulfood\n\n\n안녕하세요, 농림축산식품부 유튜브채널입니다.\n\nHello, this is The Official Youtube Channel of MAFRA(Ministry of Agriculture, Food and Rural Affairs), Republic of Korea\n\nINSTAGRAM : https://www.instagram.com/nong_ru_wahhhhh/ \n\nBLOG : https://blog.naver.com/mifaffgov\n\nFACEBOOK : https://www.facebook.com/mafrakorea\n\nTWITTER : https://twitter.com/mafrakorea\n\nHOMEPAGE : http://www.mafra.go.kr/mafra/index..do",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "J73TdKkELEnsaXLIUKHz4XwDo_A",
                  id: "2_gUtv5uw7s",
                  snippet: {
                    publishedAt: "2021-11-16T03:55:20Z",
                    channelId: "UCL01un1rw1MU3wj7-oEELQQ",
                    title:
                      "가을 보약 무나물. 이영상대로 따라하면 나물고수 손맛이 나에게로 전수됩니다~! 딸도 대성공!!",
                    description:
                      "■재료\n무 1키로\n고명으로 잔파 다진거, 깨\n\n■양념\n참기름 2숟갈\n1)  맛소금 0.6 숟갈 하거나\n2)  일반소금 0.6 숟갈  + 설탕 0.3~0.5 숟갈\n❤물은 몇수저~ 1컵 취향껏 넣어요.\n❤소금간 처음부터 하세요\n\n\n\n계량 : 성인밥수저 (9~10 ml)\nMeasurement  :  Adult Korean Dinner Spoon (1 T = 9~10ml ) \n\n제 요리는 일반설탕을 사용하지않고 원당을 사용합니다. **원당은 달지않아요**\n원당은 비정제 사탕수수 100%로  정제가 되지않아 알이 굵고 노란색입니다.\n일반설탕은 묵직하고 텁텁한 단맛이라면 원당은 향긋한 꿀향과 중후한 단맛으로 자연감칠맛을 내주어 요리가 한층 더 맛납니다. 비정제라 각종 미네랄, 식이섬유  함유! 인터넷에 저렴하게 파니 참조~~",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/2_gUtv5uw7s/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/2_gUtv5uw7s/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/2_gUtv5uw7s/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/2_gUtv5uw7s/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/2_gUtv5uw7s/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "[윤이련]50년 요리비결",
                    tags: [
                      "황금레피시",
                      "맛있게 하는법",
                      "만들기",
                      "반찬",
                      "요리",
                      "알토란",
                      "백종원",
                      "김수미",
                    ],
                    categoryId: "26",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "가을 보약 무나물. 이영상대로 따라하면 나물고수 손맛이 나에게로 전수됩니다~! 딸도 대성공!!",
                      description:
                        "■재료\n무 1키로\n고명으로 잔파 다진거, 깨\n\n■양념\n참기름 2숟갈\n1)  맛소금 0.6 숟갈 하거나\n2)  일반소금 0.6 숟갈  + 설탕 0.3~0.5 숟갈\n❤물은 몇수저~ 1컵 취향껏 넣어요.\n❤소금간 처음부터 하세요\n\n\n\n계량 : 성인밥수저 (9~10 ml)\nMeasurement  :  Adult Korean Dinner Spoon (1 T = 9~10ml ) \n\n제 요리는 일반설탕을 사용하지않고 원당을 사용합니다. **원당은 달지않아요**\n원당은 비정제 사탕수수 100%로  정제가 되지않아 알이 굵고 노란색입니다.\n일반설탕은 묵직하고 텁텁한 단맛이라면 원당은 향긋한 꿀향과 중후한 단맛으로 자연감칠맛을 내주어 요리가 한층 더 맛납니다. 비정제라 각종 미네랄, 식이섬유  함유! 인터넷에 저렴하게 파니 참조~~",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "7M6pQWAnH90eLK6bkyUSk3NuP-s",
                  id: "2IwRiXvYUfA",
                  snippet: {
                    publishedAt: "2021-11-16T03:00:01Z",
                    channelId: "UCpH3rUuBQH9CkjXRumRWZIQ",
                    title: "임영웅 2022 시즌 그리팅 컨셉 트레일러 #1",
                    description:
                      "임영웅 2022 Season’s greetings concept Trailer #1\n\n*임영웅 2022 시즌 그리팅 온라인 판매처\nhttps://linktr.ee/limyoungwoongmd\n\n#임영웅 #시즌그리팅 #Shorts",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/2IwRiXvYUfA/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/2IwRiXvYUfA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/2IwRiXvYUfA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/2IwRiXvYUfA/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/2IwRiXvYUfA/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "임영웅 Shorts",
                    tags: ["임영웅", "limyoungwoong", "시즌그리팅"],
                    categoryId: "22",
                    liveBroadcastContent: "none",
                    localized: {
                      title: "임영웅 2022 시즌 그리팅 컨셉 트레일러 #1",
                      description:
                        "임영웅 2022 Season’s greetings concept Trailer #1\n\n*임영웅 2022 시즌 그리팅 온라인 판매처\nhttps://linktr.ee/limyoungwoongmd\n\n#임영웅 #시즌그리팅 #Shorts",
                    },
                    defaultAudioLanguage: "zxx",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "SfdMtenKG9gzykKpAztkQaIxwz4",
                  id: "vHLicdZuk00",
                  snippet: {
                    publishedAt: "2021-11-16T13:00:21Z",
                    channelId: "UCXURHJRGr4-EB3l87kcbElw",
                    title:
                      "그냥 해!! 이거 승부가 뭐가 그렇게 중요하냐고오!!🔥 | HOTEL THE DREAM #2",
                    description:
                      "#HOTEL_THE_DREAM\n#호텔더드림\n#NCTDREAM #NCT\n\nNCT DREAM Official\nhttps://www.youtube.com/nctdream \nhttps://www.instagram.com/nct_dream/ \nhttps://www.tiktok.com/@official_nct\nhttps://twitter.com/NCTsmtown_DREAM \nhttps://www.facebook.com/NCT.smtown \nhttps://www.vlive.tv/channel/DB547B",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/vHLicdZuk00/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/vHLicdZuk00/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/vHLicdZuk00/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/vHLicdZuk00/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/vHLicdZuk00/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "NCT DREAM",
                    categoryId: "22",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "그냥 해!! 이거 승부가 뭐가 그렇게 중요하냐고오!!🔥 | HOTEL THE DREAM #2",
                      description:
                        "#HOTEL_THE_DREAM\n#호텔더드림\n#NCTDREAM #NCT\n\nNCT DREAM Official\nhttps://www.youtube.com/nctdream \nhttps://www.instagram.com/nct_dream/ \nhttps://www.tiktok.com/@official_nct\nhttps://twitter.com/NCTsmtown_DREAM \nhttps://www.facebook.com/NCT.smtown \nhttps://www.vlive.tv/channel/DB547B",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "NkhwAQVa7n-5nk2wLfdzhP4fRJE",
                  id: "a7YEIBNp_FM",
                  snippet: {
                    publishedAt: "2021-11-16T10:00:00Z",
                    channelId: "UCNzcxCN_Hh_lu5RCSFXKgGQ",
                    title:
                      "가수 에일리님 실제 뮤직비디오에 출연했습니다.. 20시간 밤샘 촬영 맞습니까?",
                    description:
                      "》김블루의 숨겨진 혜택이 넘치는 사탄클럽가입하기!! :  https://www.youtube.com/channel/UCNzcxCN_Hh_lu5RCSFXKgGQ/join\n》유튜브 알림 문제 해결 하기! : https://support.google.com/youtube/troubleshooter/9334012?hl=ko\n》김블루 인스타 : https://www.instagram.com/kimblue_37/?hl=ko\n》트위치 바로가기: https://www.twitch.tv/rainblue37\n》김블루 팬카페!! : https://cafe.naver.com/bloodang\n★지금 구독하기와 좋아요버튼을 꾹 눌러달라구!!★\n》제가 직접 3년째 사용 중인 컴퓨터 오버시스템 링크 - https://oversystem.co.kr/\n사장님이 너무나 착하십니다 김블루 보고 왔다고 적어주세요! \n\n문의 & 스폰문의 - kimblue@googlegroups.com\n\n\n-------------------------------------------------------------------------------------\n\n음원 - JWVID , 유튜브 라이브러리, 퍽픽, NCS\nKevin MacLeod의 음원은(는) Creative Commons Attribution 라이선스에 따라 라이선스가 부여됩니다.\n출처: https://soundcloud.com/kevin-9-1\n아티스트: http://incompetech.com/\n\n본 음성은 인공지능 성우 서비스 타입캐스트에서 제작되었습니다. \n인공지능 성우 보라 외 1명\n\n🎵Music provided by 브금대통령\n🎵Track : 봄의 녹턴 - https://youtu.be/8RqyzqDJt1Y\n🎵Track : Piggy Cake - https://youtu.be/BOsYmetTil0\n🎵Track : Find out Mystery - https://youtu.be/AH3i7rf-KbA",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/a7YEIBNp_FM/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/a7YEIBNp_FM/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/a7YEIBNp_FM/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/a7YEIBNp_FM/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/a7YEIBNp_FM/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "악동 김블루",
                    tags: ["김블루", "배그", "배틀그라운드"],
                    categoryId: "20",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "가수 에일리님 실제 뮤직비디오에 출연했습니다.. 20시간 밤샘 촬영 맞습니까?",
                      description:
                        "》김블루의 숨겨진 혜택이 넘치는 사탄클럽가입하기!! :  https://www.youtube.com/channel/UCNzcxCN_Hh_lu5RCSFXKgGQ/join\n》유튜브 알림 문제 해결 하기! : https://support.google.com/youtube/troubleshooter/9334012?hl=ko\n》김블루 인스타 : https://www.instagram.com/kimblue_37/?hl=ko\n》트위치 바로가기: https://www.twitch.tv/rainblue37\n》김블루 팬카페!! : https://cafe.naver.com/bloodang\n★지금 구독하기와 좋아요버튼을 꾹 눌러달라구!!★\n》제가 직접 3년째 사용 중인 컴퓨터 오버시스템 링크 - https://oversystem.co.kr/\n사장님이 너무나 착하십니다 김블루 보고 왔다고 적어주세요! \n\n문의 & 스폰문의 - kimblue@googlegroups.com\n\n\n-------------------------------------------------------------------------------------\n\n음원 - JWVID , 유튜브 라이브러리, 퍽픽, NCS\nKevin MacLeod의 음원은(는) Creative Commons Attribution 라이선스에 따라 라이선스가 부여됩니다.\n출처: https://soundcloud.com/kevin-9-1\n아티스트: http://incompetech.com/\n\n본 음성은 인공지능 성우 서비스 타입캐스트에서 제작되었습니다. \n인공지능 성우 보라 외 1명\n\n🎵Music provided by 브금대통령\n🎵Track : 봄의 녹턴 - https://youtu.be/8RqyzqDJt1Y\n🎵Track : Piggy Cake - https://youtu.be/BOsYmetTil0\n🎵Track : Find out Mystery - https://youtu.be/AH3i7rf-KbA",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "tclUox0hUZxpGsAKiipiGYVI7BU",
                  id: "3laLavGghc0",
                  snippet: {
                    publishedAt: "2021-11-13T03:01:46Z",
                    channelId: "UCq0rwnaHv_UKY4x8Kwbo0zw",
                    title:
                      "MERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom)",
                    description:
                      "Provided to YouTube by Genie Music Corporation\n\nMERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom) · sokodomo\n\nShow Me The Money 10 Episode 2\n\n℗ 2021 Stone Music Entertainment\n\nReleased on: 2021-11-13\n\nAuto-generated by YouTube.",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/3laLavGghc0/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/3laLavGghc0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/3laLavGghc0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                    },
                    channelTitle: "sokodomo - Topic",
                    tags: [
                      "sokodomo",
                      "Show Me The Money 10 Episode 2",
                      "MERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom)",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "MERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom)",
                      description:
                        "Provided to YouTube by Genie Music Corporation\n\nMERRY-GO-ROUND (Feat. Zion.T & Wonstein) (Prod. by Slom) · sokodomo\n\nShow Me The Money 10 Episode 2\n\n℗ 2021 Stone Music Entertainment\n\nReleased on: 2021-11-13\n\nAuto-generated by YouTube.",
                    },
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "dNHgFTVbkc0DLKiHfF0lxNAmyu8",
                  id: "tnAxZipkuWw",
                  snippet: {
                    publishedAt: "2021-11-12T17:51:35Z",
                    channelId: "UCepUWUpH45hRTi-QePdq1Bg",
                    title:
                      "SMTM10 [풀버전/7회] ♬ 회전목마 (Feat. Zion.T, 원슈타인) - 소코도모 @ 본선 Full ver.",
                    description:
                      "SMTM10 [풀버전/7회] ♬ 회전목마 (Feat. Zion.T, 원슈타인) - 소코도모 @ 본선 Full ver.\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/tnAxZipkuWw/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/tnAxZipkuWw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/tnAxZipkuWw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/tnAxZipkuWw/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/tnAxZipkuWw/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "Mnet TV",
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "SMTM10 [풀버전/7회] ♬ 회전목마 (Feat. Zion.T, 원슈타인) - 소코도모 @ 본선 Full ver.",
                      description:
                        "SMTM10 [풀버전/7회] ♬ 회전목마 (Feat. Zion.T, 원슈타인) - 소코도모 @ 본선 Full ver.\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    },
                    defaultAudioLanguage: "en",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "L6Ukn4C08Xw4Kj_bc_E4bPS1ReM",
                  id: "GDCa0wyqx-w",
                  snippet: {
                    publishedAt: "2021-11-15T01:45:00Z",
                    channelId: "UCI64Eh_rwWGNDOqrXAcSL8Q",
                    title:
                      "갓을 '이렇게' 만들었더니 1년이 행복합니다. 빨리 갓 한단 사오세요. 평생 써먹는 갓 레시피. 갓피클",
                    description:
                      "🎵 갓피클.\n\n✨재료 (1T=밥숟가락)\n돌산갓 손질 후 무게 1.6kg, 물 1.5L, 설탕 600ml, 피클링스파이스 1/2T, 천일염 수북이 4T, 식초 750ml\n✔ 피클링스파이스 생략 가능.\n-----------------------------------------------\n\n📢 갓피클.\n1. 돌산갓 손질하기.\n2. 씻어서 물 제거하기.\n3. 큰 볼에 갓 담기.\n4. 물 1.5L, 설탕 600ml, 피클링스파이스 1/2T, 천일염 수북이 4T 넣고 센 불로 끓이기.\n5. 끓기 시작하면 식초 750ml 넣고 센 불로 끓이기.\n+ 끓기 시작하면 불 끄기.\n6. 갓 위에 피클물 붓기.\n7. 식을 때까지 놓아두기.\n8. 통에 담기.\n9. 실온에 하루 두었다가 냉장고로 옮기기.\n+ 더 오래 보관하실분들은 냉장고에 일주일 두었다가 꺼내서 피클물만 덜어 한번 더 부글부글 끓여주세요. \n실온의 온도로 식힌 뒤 갓피클에 부어두시면 더 오래 보관하면서 드실 수 있습니다.\n\n#피클 #갓요리 #반찬",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/GDCa0wyqx-w/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/GDCa0wyqx-w/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/GDCa0wyqx-w/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/GDCa0wyqx-w/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/GDCa0wyqx-w/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "팔숙이 palsook",
                    tags: [
                      "갓",
                      "갓요리",
                      "돌산갓",
                      "돌산갓요리",
                      "갓피클",
                      "갓장아찌",
                      "돌산갓 장아찌",
                      "돌산갓 피클",
                      "갓 레시피",
                      "피클",
                      "피클만들기",
                      "간단요리",
                      "초간단요리",
                      "쉬운요리",
                      "간단레시피",
                      "초간단레시피",
                      "쉬운레시피",
                      "요리",
                      "요리법",
                      "레시피",
                      "recipe",
                    ],
                    categoryId: "26",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "갓을 '이렇게' 만들었더니 1년이 행복합니다. 빨리 갓 한단 사오세요. 평생 써먹는 갓 레시피. 갓피클",
                      description:
                        "🎵 갓피클.\n\n✨재료 (1T=밥숟가락)\n돌산갓 손질 후 무게 1.6kg, 물 1.5L, 설탕 600ml, 피클링스파이스 1/2T, 천일염 수북이 4T, 식초 750ml\n✔ 피클링스파이스 생략 가능.\n-----------------------------------------------\n\n📢 갓피클.\n1. 돌산갓 손질하기.\n2. 씻어서 물 제거하기.\n3. 큰 볼에 갓 담기.\n4. 물 1.5L, 설탕 600ml, 피클링스파이스 1/2T, 천일염 수북이 4T 넣고 센 불로 끓이기.\n5. 끓기 시작하면 식초 750ml 넣고 센 불로 끓이기.\n+ 끓기 시작하면 불 끄기.\n6. 갓 위에 피클물 붓기.\n7. 식을 때까지 놓아두기.\n8. 통에 담기.\n9. 실온에 하루 두었다가 냉장고로 옮기기.\n+ 더 오래 보관하실분들은 냉장고에 일주일 두었다가 꺼내서 피클물만 덜어 한번 더 부글부글 끓여주세요. \n실온의 온도로 식힌 뒤 갓피클에 부어두시면 더 오래 보관하면서 드실 수 있습니다.\n\n#피클 #갓요리 #반찬",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "FoD2fHnTkouK9fGxTfBbp8GCDEs",
                  id: "aOfn2aNyK20",
                  snippet: {
                    publishedAt: "2021-11-16T14:21:41Z",
                    channelId: "UChpjIaEgwtDZtmWEkzFulSA",
                    title:
                      "[13회 예고] 이제 제 곁에 오시면 안 됩니다.. 절대.. [연모] | KBS 방송",
                    description:
                      "[13회 예고] 이제 제 곁에 오시면 안 됩니다.. 절대..\n\n＃박은빈 ＃로운 ＃연모 \n\n----------------------------------------------\n        ▶ Homepage : https://www.kbs.co.kr/\n        ▶ Wavve : https://www.wavve.com/\n        ▶ Youtube : https://www.youtube.com/KBSdrama\n        ▶ Facebook : https://www.facebook.com/KBSdrama/",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/aOfn2aNyK20/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/aOfn2aNyK20/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/aOfn2aNyK20/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/aOfn2aNyK20/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                    },
                    channelTitle: "KBS Drama",
                    tags: [
                      "월화드라마",
                      "로맨스",
                      "사극",
                      "남장",
                      "세자",
                      "박은빈",
                      "로운",
                      "남윤수",
                      "배윤경",
                      "최병찬",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "[13회 예고] 이제 제 곁에 오시면 안 됩니다.. 절대.. [연모] | KBS 방송",
                      description:
                        "[13회 예고] 이제 제 곁에 오시면 안 됩니다.. 절대..\n\n＃박은빈 ＃로운 ＃연모 \n\n----------------------------------------------\n        ▶ Homepage : https://www.kbs.co.kr/\n        ▶ Wavve : https://www.wavve.com/\n        ▶ Youtube : https://www.youtube.com/KBSdrama\n        ▶ Facebook : https://www.facebook.com/KBSdrama/",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "8GJHHdEhfN0t6_T2kQEIQYQbszI",
                  id: "cv10U1L-CKw",
                  snippet: {
                    publishedAt: "2021-11-16T09:18:29Z",
                    channelId: "UCwjMQYL9vgbqGzxYW6dVhTw",
                    title:
                      '"벤츠, BMW? 뉴욕에선 고급이 아니죠" 뉴욕 최상류층 한인남자의 삶 2부 l 미국#28',
                    description:
                      "1부에 이어서 2부입니다! \n저는 어디에서도 못 들어본 내용이라 \n넘 재밌게 영상찍고 편집했는데 어떻게 보실 지 모르겠네요!\n3부와 4부도 정말 재밌으니 기대해주세요!\n항상 좋은일들만 가득하시길 진심으로 바랍니다 :)",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/cv10U1L-CKw/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/cv10U1L-CKw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/cv10U1L-CKw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/cv10U1L-CKw/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/cv10U1L-CKw/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "희철리즘Heechulism",
                    tags: [
                      "희철리즘",
                      "희철리즘미국",
                      "미국여행",
                      "세계여행",
                      "해외여행",
                      "뉴욕",
                      "뉴욕여행",
                      "로스앤젤레스",
                      "미국부자",
                      "돈버는법",
                      "미국주식",
                      "미국생활",
                      "heechulism",
                      "샌프란시스코",
                      "유럽여행",
                      "미국한인",
                      "한인부자",
                      "미국재테크",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        '"벤츠, BMW? 뉴욕에선 고급이 아니죠" 뉴욕 최상류층 한인남자의 삶 2부 l 미국#28',
                      description:
                        "1부에 이어서 2부입니다! \n저는 어디에서도 못 들어본 내용이라 \n넘 재밌게 영상찍고 편집했는데 어떻게 보실 지 모르겠네요!\n3부와 4부도 정말 재밌으니 기대해주세요!\n항상 좋은일들만 가득하시길 진심으로 바랍니다 :)",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "aCYdeTHbDkYLUaWMewAcR15sqGk",
                  id: "4AJsmmX7b58",
                  snippet: {
                    publishedAt: "2021-11-15T04:00:01Z",
                    channelId: "UCHpIHu4LzmNuD8bsE6mZLSA",
                    title: "요새 유럽에 가면 한국인이 받는 대우.. 당황스럽네요",
                    description:
                      "사실 유럽에 정말 오랜만에 들어가면서 미국보다 더 많은 준비를 했어요. 미국에서는 생각보다 깐깐해진 출입국 과정 때문에 멘탈이 약간 털렸었거든요. 솔직히 기대보다 걱정이 훨씬 앞섰던 입국심사와 호텔 체크인 과정이었던 것 같습니다. 함께 영상에서 확인하시죠!\n\n*본 영상은 유료광고를 포함하지 않으나 노출 의무 없는 제품 선물을 포함합니다",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/4AJsmmX7b58/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/4AJsmmX7b58/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/4AJsmmX7b58/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/4AJsmmX7b58/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/4AJsmmX7b58/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "영알남YAN",
                    tags: [
                      "한국인 특징",
                      "한국인 해외반응",
                      "한국인 단합력",
                      "한국인 반응",
                      "한국인 종특",
                      "한국인 인기",
                      "한국인 공항",
                      "한국인 구별",
                      "한국인 공감",
                      "공항가는길",
                      "공항 세관",
                      "공항 브이로그",
                      "공항 검색대",
                      "공항 경찰",
                      "공항 공무원",
                      "유럽여행",
                      "유럽여행 브이로그",
                      "유럽 브이로그",
                      "해외여행 브이로그",
                      "해외여행 유튜버",
                      "해외여행 가능국가",
                      "해외여행 가능시기",
                      "해외여행 영어",
                      "해외여행 추천",
                      "입국심사",
                      "입국심사 영어",
                      "입국 브이로그",
                      "입국 가능 국가",
                      "입국 vlog",
                    ],
                    categoryId: "27",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "요새 유럽에 가면 한국인이 받는 대우.. 당황스럽네요",
                      description:
                        "사실 유럽에 정말 오랜만에 들어가면서 미국보다 더 많은 준비를 했어요. 미국에서는 생각보다 깐깐해진 출입국 과정 때문에 멘탈이 약간 털렸었거든요. 솔직히 기대보다 걱정이 훨씬 앞섰던 입국심사와 호텔 체크인 과정이었던 것 같습니다. 함께 영상에서 확인하시죠!\n\n*본 영상은 유료광고를 포함하지 않으나 노출 의무 없는 제품 선물을 포함합니다",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "1uGrUVwmeNMya1QrKFHgsc4oymw",
                  id: "vzBxVe4rppA",
                  snippet: {
                    publishedAt: "2021-11-16T14:00:31Z",
                    channelId: "UC-Fnix71vRP64WXeo0ikd0Q",
                    title: "SHOW WHAT I HAVE - IVE REI",
                    description:
                      "IVE Twitter\n: https://twitter.com/IVEstarship\n: https://twitter.com/IVE_twt\n: https://twitter.com/IVEstarship_JP\nIVE Instagram : https://instagram.com/IVEstarship\nIVE Facebook: https://fb.me/IVEstarship \nIVE Fancafe: https://cafe.daum.net/IVEstarship\nIVE TikTok: https://www.tiktok.com/@IVE.official\nIVE Weibo: https://weibo.com/ivestarship\n\n#IVE #아이브 #アイヴ",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/vzBxVe4rppA/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/vzBxVe4rppA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/vzBxVe4rppA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/vzBxVe4rppA/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/vzBxVe4rppA/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "IVE",
                    tags: [
                      "Kpop",
                      "girl group",
                      "1theK",
                      "Starshiptv",
                      "starship",
                      "뮤비",
                      "티져",
                      "MV",
                      "Teaser",
                      "신곡",
                      "new",
                      "song",
                      "한류",
                      "idol",
                      "hallyu",
                      "ロエン",
                      "ミュージック",
                      "ミュージックビデオ",
                      "アイドル",
                      "韓流",
                      "韓国",
                      "아이돌",
                      "아이브",
                      "IVE",
                      "アイヴ",
                      "LOGO",
                      "MOTION",
                      "로고",
                      "유진",
                      "원영",
                      "가을",
                      "레이",
                      "리즈",
                      "이서",
                      "YUJIN",
                      "GAEUL",
                      "REI",
                      "WONYOUNG",
                      "LIZ",
                      "LEESEO",
                      "ユジン",
                      "ガウル",
                      "レイ",
                      "ウォニョン",
                      "リズ",
                      "イソ",
                    ],
                    categoryId: "22",
                    liveBroadcastContent: "none",
                    localized: {
                      title: "SHOW WHAT I HAVE - IVE REI",
                      description:
                        "IVE Twitter\n: https://twitter.com/IVEstarship\n: https://twitter.com/IVE_twt\n: https://twitter.com/IVEstarship_JP\nIVE Instagram : https://instagram.com/IVEstarship\nIVE Facebook: https://fb.me/IVEstarship \nIVE Fancafe: https://cafe.daum.net/IVEstarship\nIVE TikTok: https://www.tiktok.com/@IVE.official\nIVE Weibo: https://weibo.com/ivestarship\n\n#IVE #아이브 #アイヴ",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "sR0IFGJcUPCwGVVfQj59JAmbboE",
                  id: "0a41Cxhq6HY",
                  snippet: {
                    publishedAt: "2021-11-16T09:00:00Z",
                    channelId: "UC_E4hCbCVI8Li9NNkN3xi6w",
                    title:
                      '[CyworldBGM2021] "강다니엘x챈슬러 - Fly" Music Clip (Mini Room Ver.)',
                    description:
                      '[𝘾𝙮𝙬𝙤𝙧𝙡𝙙 𝘽𝙂𝙈 2021] "강다니엘x챈슬러 - Fly" Music Clip (Mini Room Ver.)\n\n┌─˛☆¸...yØц Can Fly ħigħёr… ˛☆¸─┐\n\n              Nov. 16th. 2021. 6pm\n   이 가을 우리 같이 들으며 파도타요! \n\n-------------------------------------------------------------------------\n"멜론에서 CyworldBGM2021 비하인드 매거진보고 이벤트 참여하기!"\nhttps://www.melon.com/musicstory/inform.htm?mstorySeq=11882&startIndex=0&musicToday=Y\n-------------------------------------------------------------------------\n"스포티파이에 강다니엘x챈슬러 인사 영상 보러가기!"\nSpotify Korea SNS\n인스타그램 : https://www.instagram.com/tv/CWU9oQYJrZt/?utm_medium=copy_link\n페이스북 : https://www.facebook.com/114729430288868/posts/422705909491217/\n트위터 : https://twitter.com/i/status/1460502990700179456\n-------------------------------------------------------------------------\n\n└싸이월드 인스타그램 : https://www.instagram.com/cyworld_official\n└싸이월드 페이스북 : https://www.facebook.com/CYWORLD_official-104893595186043\n\n[Credit]\n\nExecutive Director Jason Kim, Sam Son\nProject Producer Dorothy Park\nArtist 강다니엘, 챈슬러\n\nArranged by Purple\nProduction : E+pro\n\nⓒ2021 CyworldZ Co.,Ltd. 2021.11 All rights reserved.\n\n\n#CyworldBGM2021 #강다니엘x챈슬러 #Fly #에픽하이 #강다니엘 #챈슬러 #싸이월드 #cyworld #BGM #싸이월드BGM #KANGDANIEL #Chancellor #EpikHigh #플라이 #싸이월드감성 #싸이갬성 #브금 #쵸재깅',
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/0a41Cxhq6HY/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/0a41Cxhq6HY/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/0a41Cxhq6HY/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/0a41Cxhq6HY/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/0a41Cxhq6HY/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "CYWORLD",
                    tags: [
                      "CyworldBGM2021",
                      "강다니엘x챈슬러",
                      "Fly",
                      "에픽하이",
                      "강다니엘",
                      "챈슬러",
                      "싸이월드",
                      "cyworld",
                      "BGM",
                      "싸이월드BGM",
                      "KANG DANIEL",
                      "Chancellor",
                      "Epik High",
                      "플라이",
                      "싸이월드감성",
                      "싸이갬성",
                      "브금",
                      "쵸재깅",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        '[CyworldBGM2021] "강다니엘x챈슬러 - Fly" Music Clip (Mini Room Ver.)',
                      description:
                        '[𝘾𝙮𝙬𝙤𝙧𝙡𝙙 𝘽𝙂𝙈 2021] "강다니엘x챈슬러 - Fly" Music Clip (Mini Room Ver.)\n\n┌─˛☆¸...yØц Can Fly ħigħёr… ˛☆¸─┐\n\n              Nov. 16th. 2021. 6pm\n   이 가을 우리 같이 들으며 파도타요! \n\n-------------------------------------------------------------------------\n"멜론에서 CyworldBGM2021 비하인드 매거진보고 이벤트 참여하기!"\nhttps://www.melon.com/musicstory/inform.htm?mstorySeq=11882&startIndex=0&musicToday=Y\n-------------------------------------------------------------------------\n"스포티파이에 강다니엘x챈슬러 인사 영상 보러가기!"\nSpotify Korea SNS\n인스타그램 : https://www.instagram.com/tv/CWU9oQYJrZt/?utm_medium=copy_link\n페이스북 : https://www.facebook.com/114729430288868/posts/422705909491217/\n트위터 : https://twitter.com/i/status/1460502990700179456\n-------------------------------------------------------------------------\n\n└싸이월드 인스타그램 : https://www.instagram.com/cyworld_official\n└싸이월드 페이스북 : https://www.facebook.com/CYWORLD_official-104893595186043\n\n[Credit]\n\nExecutive Director Jason Kim, Sam Son\nProject Producer Dorothy Park\nArtist 강다니엘, 챈슬러\n\nArranged by Purple\nProduction : E+pro\n\nⓒ2021 CyworldZ Co.,Ltd. 2021.11 All rights reserved.\n\n\n#CyworldBGM2021 #강다니엘x챈슬러 #Fly #에픽하이 #강다니엘 #챈슬러 #싸이월드 #cyworld #BGM #싸이월드BGM #KANGDANIEL #Chancellor #EpikHigh #플라이 #싸이월드감성 #싸이갬성 #브금 #쵸재깅',
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "niNPfBUBkBN6maCCyMmeD5KkDXU",
                  id: "_dE7Jq7v9Rw",
                  snippet: {
                    publishedAt: "2021-11-15T14:00:25Z",
                    channelId: "UC-Fnix71vRP64WXeo0ikd0Q",
                    title: "SHOW WHAT I HAVE - IVE YUJIN",
                    description:
                      "IVE Twitter\n: https://twitter.com/IVEstarship\n: https://twitter.com/IVE_twt\n: https://twitter.com/IVEstarship_JP\nIVE Instagram : https://instagram.com/IVEstarship\nIVE Facebook: https://fb.me/IVEstarship \nIVE Fancafe: https://cafe.daum.net/IVEstarship\nIVE TikTok: https://www.tiktok.com/@IVE.official\nIVE Weibo: https://weibo.com/ivestarship\n\n#IVE #아이브 #アイヴ",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/_dE7Jq7v9Rw/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/_dE7Jq7v9Rw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/_dE7Jq7v9Rw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/_dE7Jq7v9Rw/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/_dE7Jq7v9Rw/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "IVE",
                    tags: [
                      "Kpop",
                      "girl group",
                      "1theK",
                      "Starshiptv",
                      "starship",
                      "뮤비",
                      "티져",
                      "MV",
                      "Teaser",
                      "신곡",
                      "new",
                      "song",
                      "한류",
                      "idol",
                      "hallyu",
                      "ロエン",
                      "ミュージック",
                      "ミュージックビデオ",
                      "アイドル",
                      "韓流",
                      "韓国",
                      "아이돌",
                      "아이브",
                      "IVE",
                      "アイヴ",
                      "LOGO",
                      "MOTION",
                      "로고",
                      "유진",
                      "원영",
                      "가을",
                      "레이",
                      "리즈",
                      "이서",
                      "YUJIN",
                      "GAEUL",
                      "REI",
                      "WONYOUNG",
                      "LIZ",
                      "LEESEO",
                      "ユジン",
                      "ガウル",
                      "レイ",
                      "ウォニョン",
                      "リズ",
                      "イソ",
                      "SHOW WHAT I HAVE",
                      "쇼왓아이헤브",
                    ],
                    categoryId: "22",
                    liveBroadcastContent: "none",
                    localized: {
                      title: "SHOW WHAT I HAVE - IVE YUJIN",
                      description:
                        "IVE Twitter\n: https://twitter.com/IVEstarship\n: https://twitter.com/IVE_twt\n: https://twitter.com/IVEstarship_JP\nIVE Instagram : https://instagram.com/IVEstarship\nIVE Facebook: https://fb.me/IVEstarship \nIVE Fancafe: https://cafe.daum.net/IVEstarship\nIVE TikTok: https://www.tiktok.com/@IVE.official\nIVE Weibo: https://weibo.com/ivestarship\n\n#IVE #아이브 #アイヴ",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "iHC3TpX2EtzcXteLkQ19IOb1QVw",
                  id: "not4IxXOQaA",
                  snippet: {
                    publishedAt: "2021-11-13T14:45:03Z",
                    channelId: "UCxLc0zV-d2elxan2nc2xRCA",
                    title:
                      "[#술꾼도시여자들/6회] 오늘도 술 없이 버틸 수가 없는 이선빈 X 정은지의 사회생활~ 눈치가 빨라서 눈치 없는 척 하는 중",
                    description:
                      "#티빙에서스트리밍 #티빙오리지널 #술꾼도시여자들\n\n레전드 장면만 모아 모아\n묻지도 따지지도 않고 N회차 재생 가봅시다 #티전드+\n\n자니? 진짜 끊을거야,,,?\n티빙 바로가기 ☞ https://tving.onelink.me/xHqC/4828052e\n\n가입하기 전에 필.수.시.청 #ㅌㅂㅌㅂ\n☞ https://www.youtube.com/channel/UCxLc0zV-d2elxan2nc2xRCA",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/not4IxXOQaA/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/not4IxXOQaA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/not4IxXOQaA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                    },
                    channelTitle: "ᄐᄇᄐᄇ TVTV",
                    tags: [
                      "ㅌㅂㅌㅂ",
                      "술꾼도시여자들",
                      "술꾼도시여자들 결말",
                      "술꾼도시여자들 다시보기",
                      "술꾼도시여자들 드라마 메이킹",
                      "술꾼도시여자들 드라마 예고",
                      "술꾼도시여자들 술먹방",
                      "술꾼도시여자들 요약",
                      "술꾼도시여자들 이선빈",
                      "술꾼도시여자들 정은지",
                      "술꾼도시여자들 한선화",
                      "술꾼도시여자들 한선화 영양사",
                      "술도녀 이선빈",
                      "술도녀 정은지",
                      "술도녀 한선화",
                      "술도녀 한선화 영양사",
                      "이선빈",
                      "이선빈 드라마",
                      "이선빈 메이킹",
                      "이선빈 술",
                      "이선빈 정은지",
                      "정은지",
                      "정은지 강지구",
                      "정은지 교사",
                      "정은지 드라마",
                      "정은지 술꾼",
                      "정은지 술꾼도시여자들",
                      "정은지 연기",
                      "정은지 욕 연기",
                      "정은지 한선화 싸움",
                      "티빙",
                      "티빙 오리지널",
                      "티빙 추천",
                      "티빙 추천 드라마",
                      "한선화",
                      "한선화 눈물",
                      "한선화 드라마",
                      "한선화 먹방",
                      "한선화 메이킹",
                      "한선화 사투리",
                      "한선화 술",
                      "한선화 술꾼도시여자들",
                      "한선화 싸움",
                      "한선화 연기",
                      "한선화 영양사",
                      "한선화 정은지 싸움",
                      "한선화 정은지 화해",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "[#술꾼도시여자들/6회] 오늘도 술 없이 버틸 수가 없는 이선빈 X 정은지의 사회생활~ 눈치가 빨라서 눈치 없는 척 하는 중",
                      description:
                        "#티빙에서스트리밍 #티빙오리지널 #술꾼도시여자들\n\n레전드 장면만 모아 모아\n묻지도 따지지도 않고 N회차 재생 가봅시다 #티전드+\n\n자니? 진짜 끊을거야,,,?\n티빙 바로가기 ☞ https://tving.onelink.me/xHqC/4828052e\n\n가입하기 전에 필.수.시.청 #ㅌㅂㅌㅂ\n☞ https://www.youtube.com/channel/UCxLc0zV-d2elxan2nc2xRCA",
                    },
                    defaultAudioLanguage: "ko",
                  },
                },
              ],
              nextPageToken: "CBQQAA",
              pageInfo: {
                totalResults: 200,
                resultsPerPage: 20,
              },
            },
            status: 200,
            statusText: "",
            headers: {
              "cache-control": "private",
              "content-encoding": "gzip",
              "content-length": "11575",
              "content-type": "application/json; charset=UTF-8",
              date: "Wed, 17 Nov 2021 07:14:06 GMT",
              server: "scaffolding on HTTPServer2",
              vary: "Origin, X-Origin, Referer",
            },
            config: {
              transitional: {
                silentJSONParsing: true,
                forcedJSONParsing: true,
                clarifyTimeoutError: false,
              },
              transformRequest: [null],
              transformResponse: [null],
              timeout: 0,
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              maxContentLength: -1,
              maxBodyLength: -1,
              headers: {
                Accept: "application/json, text/plain, */*",
              },
              method: "get",
              url: "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=AIzaSyCnSYEgItutcgRmMnwnH-AXh3LdQ3Nbzrw",
            },
            request: {},
          };

          resolve(result.data);
        }, 1500)
      );
    };

    getData().then((result) => {
      console.log(result.items);
      setItems(result.items);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    //scroll 시 data update
    const handlerScrollEvent = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        console.log("here is bottm");
        setIsScrollBottom(true);
      } else {
        // setIsScrollBottom(false);
      }
    };
    window.addEventListener("scroll", handlerScrollEvent);
  }, []);

  const video_opt = {
    height: "auto",
    width: "100%",
  };

  return (
    <div
      className={
        isOpenSideBar && isWindowSizeXL
          ? "main main-" + themeState
          : "main side-close-main main-" + themeState
      }
    >
      {/* <YouTube videoId={"Lkrby-_NJTs"} opts={video_opt}></YouTube> */}

      <div className="contents-wrapper">
        <FilterBar />
        {isLoading ? (
          <div className="loading">Loading ...</div>
        ) : (
          itemsState.map((item, index) => (
            <div className="item-container" key={index}>
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="video-description-container">
                <div className="channel-icon"></div>
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
                  <div className="video-viewcount"></div>
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
