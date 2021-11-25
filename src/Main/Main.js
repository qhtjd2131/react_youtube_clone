import React, { useEffect, useState, useContext } from "react";
import "./Main.scss";
import axios from "axios";
import FilterBar from "./FilterBar";
import {
  SideBarContext,
  themeStateContext,
  searchTextContext,
  MiniSideBarContext,
} from "../App";
import { Link } from "react-router-dom";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsState, setItems] = useState([]);
  const [channelItemsState, setChannelItems] = useState([]);
  const [isScrollBottom, setIsScrollBottom] = useState(false);

  const { isOpenMiniSideBar, setIsOpenMiniSideBar } =
    useContext(MiniSideBarContext);
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
    setIsOpenMiniSideBar(true);
    const option = {
      part: "snippet, statistics",
      regionCode: "KR",
      chart: "mostPopular",
      maxResults: 20,
      apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    };
    const url_mostPopular = `https://www.googleapis.com/youtube/v3/videos?part=${option.part}&chart=${option.chart}&maxResults=${option.maxResults}&regionCode=${option.regionCode}&key=${option.apiKey}`;

    const getData = async () => {
      // const result = await axios.get(url_mostPopular);
      // console.log("result:", result);

      // return result.data.items;
      return await new Promise((resolve) =>
        setTimeout(() => {
          const result = {
            data: {
              kind: "youtube#videoListResponse",
              etag: "JYuan1n5zFYxD5MAWl5-8iqQjuY",
              items: [
                {
                  kind: "youtube#video",
                  etag: "V-I23Q9Qb2MtZj0jsHZmj5MME0k",
                  id: "BRtDS6NDLJw",
                  snippet: {
                    publishedAt: "2021-11-19T16:34:10Z",
                    channelId: "UCepUWUpH45hRTi-QePdq1Bg",
                    title:
                      "SMTM10 [풀버전/8회] ♬ 리무진 (Feat. MINO) - 비오 @본선",
                    description:
                      "#SMTM10 [풀버전/8회] ♬ #리무진 (Feat. MINO) - 비오 @본선\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈#쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/BRtDS6NDLJw/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/BRtDS6NDLJw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/BRtDS6NDLJw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/BRtDS6NDLJw/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/BRtDS6NDLJw/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "Mnet TV",
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "SMTM10 [풀버전/8회] ♬ 리무진 (Feat. MINO) - 비오 @본선",
                      description:
                        "#SMTM10 [풀버전/8회] ♬ #리무진 (Feat. MINO) - 비오 @본선\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈#쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    },
                    defaultAudioLanguage: "en",
                  },
                  statistics: {
                    viewCount: "2590926",
                    likeCount: "73596",
                    dislikeCount: "884",
                    favoriteCount: "0",
                    commentCount: "6228",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "obJfmz795Q5yjyxLfuxyncT1xBE",
                  id: "Xwtv06DsrvQ",
                  snippet: {
                    publishedAt: "2021-11-19T08:04:27Z",
                    channelId: "UCk6bX-MZXdte_7kG8TbMkqg",
                    title:
                      "빠지는 순간 얼음물 샤워! 공포의 징검다리 건너기 ㅋㅋㅋ 허징어게임#4",
                    description:
                      "공포의 징검다리 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n\n#허팝 #징검다리 #다리건너기 #오징어 #heopop #squidgame #squid #game #Crossbridge #bridge #달고나 #허징어게임 #오징어게임 #허팝 #오징어게임 #허징어게임 #게임 #동네게임 #어쩌다물려받은철물점 #슈뻘맨 #세탁설 #슈르연구소 #꼬요야놀자 #greenlightredlight \n\n[LIKE], [SUBSCRIBE] and [SHARE]!!!\n●Heopop channel : http://goo.gl/pAHo88\n●HeopopLife channel : https://goo.gl/wEKBJb\n●HeopopGames channel : http://goo.gl/upcwMZ\n●Heopop's Instagram : http://goo.gl/tDS7WY\n●Heopop's Facebook : http://goo.gl/vuVDQK",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/Xwtv06DsrvQ/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/Xwtv06DsrvQ/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/Xwtv06DsrvQ/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/Xwtv06DsrvQ/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/Xwtv06DsrvQ/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "허팝Heopop",
                    tags: [
                      "허팝",
                      "heopop",
                      "gjvkq",
                      "징검다리",
                      "다리",
                      "다리 건너기",
                      "공포의 징검다리",
                      "오징어게임",
                      "허징어게임",
                      "상금",
                      "허팝연구소",
                      "heopop game",
                      "squid game",
                      "squid",
                      "bridge",
                      "cross bridge",
                      "ice swimming game",
                      "swimming pool",
                      "수영장",
                      "얼음물",
                      "ice water game",
                      "복불복",
                      "case by case game",
                      "case by case",
                      "복불복 게임",
                      "볼불복 수영장 빠지기 게임",
                      "choice one game",
                      "choose one game",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "빠지는 순간 얼음물 샤워! 공포의 징검다리 건너기 ㅋㅋㅋ 허징어게임#4",
                      description:
                        "공포의 징검다리 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n\n#허팝 #징검다리 #다리건너기 #오징어 #heopop #squidgame #squid #game #Crossbridge #bridge #달고나 #허징어게임 #오징어게임 #허팝 #오징어게임 #허징어게임 #게임 #동네게임 #어쩌다물려받은철물점 #슈뻘맨 #세탁설 #슈르연구소 #꼬요야놀자 #greenlightredlight \n\n[LIKE], [SUBSCRIBE] and [SHARE]!!!\n●Heopop channel : http://goo.gl/pAHo88\n●HeopopLife channel : https://goo.gl/wEKBJb\n●HeopopGames channel : http://goo.gl/upcwMZ\n●Heopop's Instagram : http://goo.gl/tDS7WY\n●Heopop's Facebook : http://goo.gl/vuVDQK",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "505108",
                    likeCount: "6344",
                    dislikeCount: "469",
                    favoriteCount: "0",
                    commentCount: "781",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "6oiIkE6BkFCISlHuDLvIBrrGIno",
                  id: "4-dCVUL7zoM",
                  snippet: {
                    publishedAt: "2021-11-19T09:00:06Z",
                    channelId: "UCwx6n_4OcLgzAGdty0RWCoA",
                    title:
                      "[EN] 춤 때려CHICA?💥 자체'심의즈'가 필요한 국'가비'밀 라치카 💃새 멤버 공개🕺 | 댄서 | 라치카 | LACHICA | 워크맨 ep.126",
                    description:
                      "JOB것들아~~~♥ 인력소장이다,,,,~~~\n오늘,, 치카,,치카,,,,한 대 치까,,,가 아니라\n춤 뽐나게,,, 추는 라치카 막내로,, 들어갔는디,,\n\n왁,,왁킹 아니고 토킹을 어찌,, 잘하는 지,,,\n토크,,, 가비여,,~~\n\n아주,, 울 성규,,, 목소리도,, 잘 들어주고,,\n안성맞춤으로,,,, 춤,,, 맹글어주고,,,\n고마워요,,, 소녀들,,~~\n\n울 성규가,,, 맹근 춤,,,\n실제,, 걸그룹,, 춤이라고 하던데,,\n\n누구게,,~~\n댓글로 달아치카,,,~~♥♥  \n\n세상의 모든 job것들을 리뷰한다 [워크맨]\n\n▶ 매주 금 오후 6시 공개\n*일반인 출연자에 대한 지나친 비방 및 인신공격성 댓글은\n관리자에 의해 삭제될 수 있습니다.\n\n#워크맨 #workman #장성규\n#라치카 #LACHICA #스우파\n#댄서 #안무 #안무시안\n#직업체험 #알바 #극한알바",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/4-dCVUL7zoM/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/4-dCVUL7zoM/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/4-dCVUL7zoM/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/4-dCVUL7zoM/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/4-dCVUL7zoM/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "워크맨-Workman",
                    tags: [
                      "studiolululala",
                      "JTBC",
                      "스튜디오룰루랄라",
                      "룰루랄라",
                      "워크맨",
                      "직업리뷰",
                      "알바리뷰",
                      "알바썰",
                      "알바",
                      "직업",
                      "장성규",
                      "김민아",
                      "와썹맨",
                      "workman",
                      "job",
                      "wassupman",
                      "아르바이트",
                      "후기",
                      "알바후기",
                      "직업후기",
                      "비비",
                      "BIBI",
                      "타이거JK",
                      "윤미래",
                      "필굿뮤직",
                      "극한알바",
                      "꿀알바",
                      "일당",
                      "수당",
                      "시급",
                      "월급",
                      "연봉",
                      "초봉",
                      "쎈알바",
                      "위험알바",
                      "위험",
                      "극한직업",
                      "인력소",
                      "일일알바",
                      "상하차",
                      "52시간",
                      "주5일제",
                      "프리랜서",
                      "정규직",
                      "일용직",
                      "단기알바",
                      "인턴",
                      "계약직",
                      "로젠",
                      "CJ",
                      "고수익알바",
                      "고위험알바",
                      "공무원",
                      "교사",
                      "아무튼출근",
                      "선생님",
                      "유치원",
                      "어린이집",
                      "택배",
                      "새벽배송",
                      "쿠팡",
                      "컬리",
                      "마켓컬리",
                      "쿠팡이츠",
                      "배민",
                      "배달의민족",
                      "SSG",
                      "이마트",
                      "트레이더스",
                      "쿠팡맨",
                      "고층빌딩",
                      "롯데타워",
                      "롯데월드",
                      "유리창알바",
                      "창문닦이알바",
                      "창문청소",
                      "역대급",
                      "최고시급",
                      "레전드",
                      "63빌딩",
                      "설빙",
                      "수제캔디",
                      "수제사탕",
                      "가비",
                      "시미즈",
                      "피넛",
                      "리안",
                      "스우파",
                      "안무영상",
                      "안무연습",
                      "청하",
                      "걸그룹",
                      "티아라",
                      "티키타카",
                      "노제",
                      "아이키",
                      "허니제이",
                      "리헤이",
                      "모니카",
                      "립제이",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "[EN] 춤 때려CHICA?💥 자체'심의즈'가 필요한 국'가비'밀 라치카 💃새 멤버 공개🕺 | 댄서 | 라치카 | LACHICA | 워크맨 ep.126",
                      description:
                        "JOB것들아~~~♥ 인력소장이다,,,,~~~\n오늘,, 치카,,치카,,,,한 대 치까,,,가 아니라\n춤 뽐나게,,, 추는 라치카 막내로,, 들어갔는디,,\n\n왁,,왁킹 아니고 토킹을 어찌,, 잘하는 지,,,\n토크,,, 가비여,,~~\n\n아주,, 울 성규,,, 목소리도,, 잘 들어주고,,\n안성맞춤으로,,,, 춤,,, 맹글어주고,,,\n고마워요,,, 소녀들,,~~\n\n울 성규가,,, 맹근 춤,,,\n실제,, 걸그룹,, 춤이라고 하던데,,\n\n누구게,,~~\n댓글로 달아치카,,,~~♥♥  \n\n세상의 모든 job것들을 리뷰한다 [워크맨]\n\n▶ 매주 금 오후 6시 공개\n*일반인 출연자에 대한 지나친 비방 및 인신공격성 댓글은\n관리자에 의해 삭제될 수 있습니다.\n\n#워크맨 #workman #장성규\n#라치카 #LACHICA #스우파\n#댄서 #안무 #안무시안\n#직업체험 #알바 #극한알바",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "1079027",
                    likeCount: "21287",
                    dislikeCount: "343",
                    favoriteCount: "0",
                    commentCount: "668",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "5i0xy6gKoWu9fwN-P7WxsX56cD4",
                  id: "yMEDEwybRII",
                  snippet: {
                    publishedAt: "2021-11-19T14:58:00Z",
                    channelId: "UCWYzc_p0GgfCepIWDHGFmEg",
                    title:
                      "[#인기급상승] (갈라쇼) 노제X아이키 이대로 끝? 가비, 리헤이와 바람피는 아이키 보고 멘붕 온 노제 반응ㅋㅋㅋ😂 댄서들이 직접 뽑은 진짜 베스트 커플은❓ | #스우파 #디글",
                    description:
                      "#스우파 #디글 #Diggle\n유튜브에서 지금 핫한 사람 누구? 人기가 급상승한 人물 모음집\n\nLet's giggle, :Diggle!\n방송국놈들이 덕질하는 채널 '디글'\n구독하기 ☞ https://www.youtube.com/c/디글Diggle\n\n기획/제작 땡주, 조림, 잉지, 나효이, 슈스빈, 제이훈, 보리, 정띠, 예선딸",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/yMEDEwybRII/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/yMEDEwybRII/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/yMEDEwybRII/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/yMEDEwybRII/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/yMEDEwybRII/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "디글 :Diggle",
                    tags: [
                      "Diggle",
                      "hey mama",
                      "hey mama 할로윈",
                      "tvN",
                      "가리비",
                      "가비 가리비",
                      "강다니엘",
                      "노제",
                      "노제 노이로제",
                      "노제 아이키",
                      "디글",
                      "리헤이",
                      "린정",
                      "린정 춤",
                      "립제이",
                      "립제이 가비",
                      "립제이 립서비스제이",
                      "립제이 스우파",
                      "모니카 광기",
                      "뭡니카",
                      "박재범 스우파",
                      "스개파",
                      "스개파 헤이마마",
                      "스우파 hey mama",
                      "스우파 가비",
                      "스우파 갈라쇼",
                      "스우파 갈라토크쇼",
                      "스우파 강다니엘",
                      "스우파 노제",
                      "스우파 다시보기",
                      "스우파 댄서",
                      "스우파 댄스배틀",
                      "스우파 댄스배틀 모음",
                      "스우파 런닝맨",
                      "스우파 문명특급",
                      "스우파 스개파",
                      "스우파 스개파 만남",
                      "스우파 스개파 배틀",
                      "스우파 스개파 헤이마마",
                      "스우파 아는형님",
                      "스우파 예능",
                      "스우파 우승",
                      "스우파 유퀴즈",
                      "스우파 파이널",
                      "스우파 홀리뱅",
                      "아이키",
                      "아이키 노제",
                      "아이키 모음",
                      "인기급상승",
                      "프라우드먼 gee",
                      "허니제이",
                      "허니제이 리헤이",
                      "허니제이 박재범",
                      "홀리뱅 스우파",
                      "홀리뱅 우승",
                      "훅",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "[#인기급상승] (갈라쇼) 노제X아이키 이대로 끝? 가비, 리헤이와 바람피는 아이키 보고 멘붕 온 노제 반응ㅋㅋㅋ😂 댄서들이 직접 뽑은 진짜 베스트 커플은❓ | #스우파 #디글",
                      description:
                        "#스우파 #디글 #Diggle\n유튜브에서 지금 핫한 사람 누구? 人기가 급상승한 人물 모음집\n\nLet's giggle, :Diggle!\n방송국놈들이 덕질하는 채널 '디글'\n구독하기 ☞ https://www.youtube.com/c/디글Diggle\n\n기획/제작 땡주, 조림, 잉지, 나효이, 슈스빈, 제이훈, 보리, 정띠, 예선딸",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "910925",
                    likeCount: "14201",
                    dislikeCount: "170",
                    favoriteCount: "0",
                    commentCount: "534",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "CgI2SKMFdFmjkTC9ayAL3XGdDv0",
                  id: "C6qyX3KJp9g",
                  snippet: {
                    publishedAt: "2021-11-18T23:00:09Z",
                    channelId: "UC3WZlO2Zl8NE1yIUgtwUtQw",
                    title: "[영광극장 3부] 영광씨의 특별한 편의점",
                    description:
                      "#임영웅 #LimYoungWoong #영광극장\n\n임영웅 웅튜브 \n구독♡좋아요♡알람설정\n열심히 할게요/당신도 누를수 있도록 \n\nLim Young Woong  [I'm HERO] Youtube Channel\nSubscribe Like Alert Setting \nThank You♡\n\n공식 팬카페 [영웅시대]\nhttp://cafe.daum.net/hero0616",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/C6qyX3KJp9g/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/C6qyX3KJp9g/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/C6qyX3KJp9g/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/C6qyX3KJp9g/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/C6qyX3KJp9g/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "임영웅",
                    tags: [
                      "미스터트롯",
                      "트로트",
                      "임영웅",
                      "트로트영웅",
                      "포천의아들",
                      "아침마당",
                      "판듀",
                      "전국노래자랑",
                      "영웅",
                      "홍대트로트",
                      "뭣이중헌디",
                      "계단말고 엘리베이터",
                      "kbs",
                      "가요무대",
                      "도전꿈의무대",
                      "박서진",
                      "진달래",
                      "천재원",
                      "명지",
                      "성국",
                      "미스트롯",
                      "장윤정",
                      "박현빈",
                      "박상철",
                      "박구윤",
                      "현장스케치",
                      "예능",
                      "트롯",
                      "TV조선",
                      "사랑의콜센타",
                      "뽕숭아학당",
                      "hero",
                      "imhero",
                      "이제나만믿어요",
                      "이나믿",
                      "별빛같은나의사랑아",
                      "별나사",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title: "[영광극장 3부] 영광씨의 특별한 편의점",
                      description:
                        "#임영웅 #LimYoungWoong #영광극장\n\n임영웅 웅튜브 \n구독♡좋아요♡알람설정\n열심히 할게요/당신도 누를수 있도록 \n\nLim Young Woong  [I'm HERO] Youtube Channel\nSubscribe Like Alert Setting \nThank You♡\n\n공식 팬카페 [영웅시대]\nhttp://cafe.daum.net/hero0616",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "422947",
                    likeCount: "57146",
                    dislikeCount: "416",
                    favoriteCount: "0",
                    commentCount: "5472",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "-qeINcxwvMBw9z0z-AyOIc0zq64",
                  id: "ZO4igKqC9bk",
                  snippet: {
                    publishedAt: "2021-11-19T11:00:22Z",
                    channelId: "UCq_NshSNZ8pjuNsEr3PJtiw",
                    title:
                      '💘 "널 갖겠어" 영지 꼬시러 온  77ㅣ폭발 유죄 fox 백예린 🧚#이영지 #백예린 [차린건 없지만] EP.4',
                    description:
                      "예린 언니가 왜 여기서 나와? \n🦊예린 x 영지 첫 만남부터 알콜 파티🍻\n\n\n🍊구독 & 좋아요 & 알림설정 필수🍊\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n [🍗차린건 없지만🍗] @이영지  의 1:1 맞춤 친구 초대 프로젝트\n🍑구독하기 ▷ https://www.youtube.com/c/차린건없지만\nCONTACT ▷ @youngji_nocharim  / ssooncom@naver.com\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n#이영지 #백예린 #차린건없지만 #LeeYoungji #먹방 #영지",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/ZO4igKqC9bk/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/ZO4igKqC9bk/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/ZO4igKqC9bk/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/ZO4igKqC9bk/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/ZO4igKqC9bk/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "차린건 없지만",
                    categoryId: "22",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        '💘 "널 갖겠어" 영지 꼬시러 온  77ㅣ폭발 유죄 fox 백예린 🧚#이영지 #백예린 [차린건 없지만] EP.4',
                      description:
                        "예린 언니가 왜 여기서 나와? \n🦊예린 x 영지 첫 만남부터 알콜 파티🍻\n\n\n🍊구독 & 좋아요 & 알림설정 필수🍊\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n [🍗차린건 없지만🍗] @이영지  의 1:1 맞춤 친구 초대 프로젝트\n🍑구독하기 ▷ https://www.youtube.com/c/차린건없지만\nCONTACT ▷ @youngji_nocharim  / ssooncom@naver.com\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n#이영지 #백예린 #차린건없지만 #LeeYoungji #먹방 #영지",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "606140",
                    likeCount: "22687",
                    dislikeCount: "120",
                    favoriteCount: "0",
                    commentCount: "1704",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "OacXYRfF49MqF7ee9JQPfErOXb8",
                  id: "7PBWtsP2BIg",
                  snippet: {
                    publishedAt: "2021-11-20T00:21:17Z",
                    channelId: "UCOHM2N1YQdb-cHWxJxwBMLQ",
                    title:
                      "[선공개] 진짜는 다르다!🔥 스우파 리더즈의 강렬한 Hey Mama 칼군무(୨୧ ❛ᴗ❛)✧ (ft. 춤짱 경훈) 아는 형님 307회",
                    description:
                      "[선공개] 진짜는 다르다!🔥 스우파 리더즈의 강렬한 Hey Mama 칼군무(୨୧ ❛ᴗ❛)✧ (ft. 춤짱 경훈)\n#아는형님 #스트릿우먼파이터 #heymama\n\n오늘 저녁 8시 40분에 〈아는 형님〉에서 만나요!",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/7PBWtsP2BIg/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/7PBWtsP2BIg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/7PBWtsP2BIg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/7PBWtsP2BIg/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/7PBWtsP2BIg/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "아는형님 Knowingbros",
                    tags: [
                      "아는 형님",
                      "형님",
                      "형님 학교",
                      "노제",
                      "리정",
                      "모니카",
                      "효진초이",
                      "가비",
                      "아이키",
                      "리헤이",
                      "허니제이",
                      "강호동",
                      "이수근",
                      "서장훈",
                      "김희철",
                      "민경훈",
                      "김영철",
                      "신동",
                      "이진호",
                      "스트릿우먼파이더",
                      "헤이마마",
                      "heymama",
                      "리더",
                      "환영",
                      "춤",
                      "퍼포먼스",
                      "춤짱",
                      "기운",
                      "스우파",
                      "실물영접",
                      "리더즈",
                      "카리스마",
                      "댄스",
                      "박수",
                      "음악",
                      "무대",
                      "소름",
                      "칼군무",
                      "선공개",
                      "아형선공개",
                      "아형307선공개",
                      "예고편",
                      "아형예고편",
                      "예능",
                      "버즈",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "[선공개] 진짜는 다르다!🔥 스우파 리더즈의 강렬한 Hey Mama 칼군무(୨୧ ❛ᴗ❛)✧ (ft. 춤짱 경훈) 아는 형님 307회",
                      description:
                        "[선공개] 진짜는 다르다!🔥 스우파 리더즈의 강렬한 Hey Mama 칼군무(୨୧ ❛ᴗ❛)✧ (ft. 춤짱 경훈)\n#아는형님 #스트릿우먼파이터 #heymama\n\n오늘 저녁 8시 40분에 〈아는 형님〉에서 만나요!",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "1408932",
                    likeCount: "18172",
                    dislikeCount: "274",
                    favoriteCount: "0",
                    commentCount: "1198",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "ySCQF11h2xchcD1nxZX469VUams",
                  id: "aVNcxjMxnHg",
                  snippet: {
                    publishedAt: "2021-11-17T05:06:14Z",
                    channelId: "UCtybqqaTj6Nx74Azdz1KrsA",
                    title:
                      "[월드컵최종예선] 이라크 VS 대한민국 6차전 H/L l AFC 아시아지역 월드컵 최종예선",
                    description:
                      "티빙에서 스트리밍 : https://tving.onelink.me/xHqC/30a78d6f\n\n[월드컵최종예선] 이라크 VS 대한민국 6차전 H/L\n\n#티빙에서스트리밍",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/aVNcxjMxnHg/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/aVNcxjMxnHg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/aVNcxjMxnHg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/aVNcxjMxnHg/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/aVNcxjMxnHg/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "tvN SPORTS",
                    tags: [
                      "AFC",
                      "tvn",
                      "tvn sports",
                      "김민재",
                      "김영권",
                      "대한민국",
                      "레바논",
                      "베트남",
                      "사우디",
                      "손흥민",
                      "스포츠",
                      "시리아",
                      "아시아축구",
                      "월드컵",
                      "월드컵 3차전",
                      "월드컵 하이라이트",
                      "이라크",
                      "이란",
                      "이재성",
                      "일본",
                      "정우영",
                      "조규성",
                      "중국",
                      "축구",
                      "카타르월드컵",
                      "티빙에서스트리밍",
                      "해외축구",
                      "호주",
                      "황의조",
                      "황희찬",
                    ],
                    categoryId: "20",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "[월드컵최종예선] 이라크 VS 대한민국 6차전 H/L l AFC 아시아지역 월드컵 최종예선",
                      description:
                        "티빙에서 스트리밍 : https://tving.onelink.me/xHqC/30a78d6f\n\n[월드컵최종예선] 이라크 VS 대한민국 6차전 H/L\n\n#티빙에서스트리밍",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "2145250",
                    likeCount: "20580",
                    dislikeCount: "582",
                    favoriteCount: "0",
                    commentCount: "3207",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "2Ek92xe-ylF0HHCY2iqTZuSGFlY",
                  id: "cD-3Kx-T9PQ",
                  snippet: {
                    publishedAt: "2021-11-19T09:32:45Z",
                    channelId: "UCQ7X91NIBS174KJT4Id0lnQ",
                    title:
                      "서포터니까~ ㅣ 트롤야 x 흉폭한포로 x 모드로나티 x 옙가 x 박나나",
                    description:
                      "ㅇ보컬\n큰벌, 작은벌, 박나나\n\nㅇ애니메이터들의 유튜브 주소입니다. 더 많은 애니메이션을 즐기세요!\n0:00~ 트롤야 - https://www.youtube.com/channel/UC2KFBTZ9d-mOa0zCytAZRMw\n0:25~ 함께 훅\n0:49~ 함께 벌스\n1:01~ 모드로나티 - https://www.youtube.com/c/%EB%AA%A8%EB%93%9C%EB%A1%9C%EB%82%98%ED%8B%B0Modronati\n1:14~ 옙가 - https://www.youtube.com/channel/UCcwEXGl8tRJTJ78WBPa7dUA\n1:26~ 흉폭한 포로 - https://www.youtube.com/channel/UC9aEa6zVK12OZaWyTIPX9jw\n1:40~ 박나나 - https://www.youtube.com/channel/UCS3_H_feQRm4QbXipKTvSrw\n1:51~ 함께 훅\n\nㅇBeat - Grabby & Nivia\nhttps://www.youtube.com/channel/UC3TV2IlhNbysuriBx62IOgw\n\nㅇMix - 계월 / alone_Api\nhttps://m.blog.naver.com/rpdnjf000/221251635836\n\n\n★영상에 참여한 제작자 분들에 대한 비방적 내용의 댓글은 전부 삭제조치 하겠습니다. \n\nㅇ business : klvs234@gmail.com (광고&외주&콜라보) \nㅇ킬링벌스의 뮤비를 놓치고 싶지 않다면 🔔 알림설정 꾸욱 🔔\nㅇ저희 채널을 후원해주셔서 감사합니다!\n멤버십 가입 혜택 : 최고음질 파일 제공 / 영상 끝 이름 박제 / 킬링벌's가 직접 만든 알람 제공 / 브이로그 등\n자세한 내용은↓\nhttps://www.youtube.com/channel/UCQ7X91NIBS174KJT4Id0lnQ/join\n\n#킬링유니벌스",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/cD-3Kx-T9PQ/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/cD-3Kx-T9PQ/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/cD-3Kx-T9PQ/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/cD-3Kx-T9PQ/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/cD-3Kx-T9PQ/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "킬링벌's KillingBees",
                    tags: [
                      "롤 음악",
                      "롤 노래",
                      "롤 시네마틱",
                      "킬링벌스 롤",
                      "만당",
                      "발젭",
                      "병병병",
                      "흉폭한 포로",
                      "강교생",
                      "롤 뮤직비디오",
                      "박나나",
                      "모드로나티",
                      "옙가",
                      "트롤야",
                      "흉폭한포로",
                      "킬링유니벌스",
                      "장인들의 노래",
                      "장인",
                      "파카",
                      "괴물쥐",
                    ],
                    categoryId: "20",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "서포터니까~ ㅣ 트롤야 x 흉폭한포로 x 모드로나티 x 옙가 x 박나나",
                      description:
                        "ㅇ보컬\n큰벌, 작은벌, 박나나\n\nㅇ애니메이터들의 유튜브 주소입니다. 더 많은 애니메이션을 즐기세요!\n0:00~ 트롤야 - https://www.youtube.com/channel/UC2KFBTZ9d-mOa0zCytAZRMw\n0:25~ 함께 훅\n0:49~ 함께 벌스\n1:01~ 모드로나티 - https://www.youtube.com/c/%EB%AA%A8%EB%93%9C%EB%A1%9C%EB%82%98%ED%8B%B0Modronati\n1:14~ 옙가 - https://www.youtube.com/channel/UCcwEXGl8tRJTJ78WBPa7dUA\n1:26~ 흉폭한 포로 - https://www.youtube.com/channel/UC9aEa6zVK12OZaWyTIPX9jw\n1:40~ 박나나 - https://www.youtube.com/channel/UCS3_H_feQRm4QbXipKTvSrw\n1:51~ 함께 훅\n\nㅇBeat - Grabby & Nivia\nhttps://www.youtube.com/channel/UC3TV2IlhNbysuriBx62IOgw\n\nㅇMix - 계월 / alone_Api\nhttps://m.blog.naver.com/rpdnjf000/221251635836\n\n\n★영상에 참여한 제작자 분들에 대한 비방적 내용의 댓글은 전부 삭제조치 하겠습니다. \n\nㅇ business : klvs234@gmail.com (광고&외주&콜라보) \nㅇ킬링벌스의 뮤비를 놓치고 싶지 않다면 🔔 알림설정 꾸욱 🔔\nㅇ저희 채널을 후원해주셔서 감사합니다!\n멤버십 가입 혜택 : 최고음질 파일 제공 / 영상 끝 이름 박제 / 킬링벌's가 직접 만든 알람 제공 / 브이로그 등\n자세한 내용은↓\nhttps://www.youtube.com/channel/UCQ7X91NIBS174KJT4Id0lnQ/join\n\n#킬링유니벌스",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "336357",
                    likeCount: "13906",
                    dislikeCount: "124",
                    favoriteCount: "0",
                    commentCount: "4011",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "FkH5XQK_trbxjnEYQOj7YQglrr0",
                  id: "g3cT-IL68oc",
                  snippet: {
                    publishedAt: "2021-11-18T09:30:11Z",
                    channelId: "UCbCr1dWFedL5lMcRWthb_bA",
                    title:
                      "[EN]믓찐 언니들 YGX x 제시가 만났다💥 토크도 춤처럼 완급조절이 가능한 일?! 본업왕잘 갓벽 YGX의 대꿀잼 인터뷰!《제시의 쇼!터뷰》 EP.76 by 모비딕 Mobidic",
                    description:
                      '본격 토크 쌈닭기질 세우고\n쇼터뷰에 찾아온 국보급 언니들\n갓YGX가 쇼터뷰까지 찢.었.다★\n\n억울한 거 다 해명할거야😡 스우파 비하인드부터\nYGX가 뽑은 YGX 어워즈🏆까지! 그리고\n제시와 함께하는 Cold Blooded 합동무대도?!\n\n제시 x YGX 대JONE잼 케미 폭발 인터뷰🎤\n영혼까지 쫙~쫙~ 뽑아 왔습니다👏👏👏\n\n0:00 특급 게스트 맞춤 제시발랄 화끈 오프닝\n0:49 🚨덕통사고 조심🚨 잘봐, 국보급 언니들의 입장이다🔥\n4:42 쇼!터뷰가 준비한 ~YGX 먹방타임~\n5:56 근황토크💭\n7:50 초밀착 인터뷰👀\n11:52 스우파 인터뷰 (feat. cold blooded)\n20:17 YGX멤버를 더 찐~하게 알아보는 YGX 인터뷰🎤\n22:08 리정(LEE JUNG) Gucci (Kill Bill ver.)\n30:02 YGX가 뽑는 YGX어워즈🏆\n35:34 심장 쫄깃한 진실게임 인터뷰\n43:48 쿠키영상\n\n"거침없는 제시의 기상천외한 솔직담백 인터뷰" \n《제시의 쇼!터뷰》 76화\n\n매주 (목) 오후 6시 30분 \n💗모비딕 채널로 놀러오show!💗\n\n#제시의쇼터뷰 #제시 #YGX\n\n영문 번역: 맹디성님\n모비딕 좋아요❤️, 구독🚨, 알림🔔\n▶️모비딕 구독하기 https://goo.gl/v2b6rR\n\n※ 본 촬영은 코로나19 바이러스 확산 방지를 위한 체온 측정, 손 소독 등 \n개인위생과 공공보건에 유의하여 진행되었습니다. ※.',
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/g3cT-IL68oc/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/g3cT-IL68oc/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/g3cT-IL68oc/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/g3cT-IL68oc/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/g3cT-IL68oc/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "모비딕 Mobidic",
                    tags: [
                      "모비딕",
                      "SBS",
                      "mobidic",
                      "쇼터뷰",
                      "제시의 쇼터뷰",
                      "숏터뷰",
                      "제시",
                      "JESSI",
                      "스브스",
                      "토크",
                      "토크쇼",
                      "프롤로그",
                      "제시의쇼터뷰",
                      "양세형의숏터뷰",
                      "mc",
                      "엠씨",
                      "양세형",
                      "제시발쇼",
                      "제시쇼",
                      "래퍼",
                      "언프리티랩스타",
                      "언니쓰",
                      "쎈언니",
                      "제시카",
                      "호현주",
                      "피네이션",
                      "PNATION",
                      "PSY",
                      "제시 런닝맨",
                      "제시 인생은즐거워",
                      "제시 유재석",
                      "제시 조정식",
                      "여자래퍼",
                      "웹예능",
                      "식스센스",
                      "환불원정대",
                      "눈누난나",
                      "제시 눈누난나",
                      "놀면뭐하니",
                      "인생은즐거워",
                      "제시 이효리",
                      "Jessi show",
                      "showterview",
                      "who dat b",
                      "힙합",
                      "제시 은비",
                      "제시 신곡",
                      "스우파 제시",
                      "스트릿 우먼 파이터",
                      "스우파",
                      "스우파 헤이마마",
                      "YGX",
                      "YGX 리정",
                      "YGX 예리",
                      "YGX 지효",
                      "YGX 이삭",
                      "YGX 여진",
                      "YGX 안무",
                      "Kpop 댄스",
                      "제시 cold blooded",
                      "제시 ygx",
                      "제시 ygx 안무",
                      "제시 리정",
                      "제시 리정 영어",
                      "리정 구찌",
                      "스우파 노래",
                      "스우파 무대영상",
                      "스우파 예능",
                      "리정 트와이스",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "[EN]믓찐 언니들 YGX x 제시가 만났다💥 토크도 춤처럼 완급조절이 가능한 일?! 본업왕잘 갓벽 YGX의 대꿀잼 인터뷰!《제시의 쇼!터뷰》 EP.76 by 모비딕 Mobidic",
                      description:
                        '본격 토크 쌈닭기질 세우고\n쇼터뷰에 찾아온 국보급 언니들\n갓YGX가 쇼터뷰까지 찢.었.다★\n\n억울한 거 다 해명할거야😡 스우파 비하인드부터\nYGX가 뽑은 YGX 어워즈🏆까지! 그리고\n제시와 함께하는 Cold Blooded 합동무대도?!\n\n제시 x YGX 대JONE잼 케미 폭발 인터뷰🎤\n영혼까지 쫙~쫙~ 뽑아 왔습니다👏👏👏\n\n0:00 특급 게스트 맞춤 제시발랄 화끈 오프닝\n0:49 🚨덕통사고 조심🚨 잘봐, 국보급 언니들의 입장이다🔥\n4:42 쇼!터뷰가 준비한 ~YGX 먹방타임~\n5:56 근황토크💭\n7:50 초밀착 인터뷰👀\n11:52 스우파 인터뷰 (feat. cold blooded)\n20:17 YGX멤버를 더 찐~하게 알아보는 YGX 인터뷰🎤\n22:08 리정(LEE JUNG) Gucci (Kill Bill ver.)\n30:02 YGX가 뽑는 YGX어워즈🏆\n35:34 심장 쫄깃한 진실게임 인터뷰\n43:48 쿠키영상\n\n"거침없는 제시의 기상천외한 솔직담백 인터뷰" \n《제시의 쇼!터뷰》 76화\n\n매주 (목) 오후 6시 30분 \n💗모비딕 채널로 놀러오show!💗\n\n#제시의쇼터뷰 #제시 #YGX\n\n영문 번역: 맹디성님\n모비딕 좋아요❤️, 구독🚨, 알림🔔\n▶️모비딕 구독하기 https://goo.gl/v2b6rR\n\n※ 본 촬영은 코로나19 바이러스 확산 방지를 위한 체온 측정, 손 소독 등 \n개인위생과 공공보건에 유의하여 진행되었습니다. ※.',
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "1398822",
                    favoriteCount: "0",
                    commentCount: "3180",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "0rBMCGJNqGdWDZhaGhuSivvVcGk",
                  id: "qvqRVZZ3ezE",
                  snippet: {
                    publishedAt: "2021-11-19T10:29:30Z",
                    channelId: "UCSknObj2PGGK6KCkTyc5Kkw",
                    title:
                      "2년만에 눈앞에 깜짝 등장한 아내를 본 미국 장모님의 반응 (감동주의) | 🇺🇸🇰🇷",
                    description:
                      "➜ 구독! 과 좋아요 버튼은 사랑입니다!!!\n\n【인스타그램 팔로우 부탁드려요】\nRaye - https://www.instagram.com/raye.yoo/\nJin - https://www.instagram.com/jwyoo13/\n------------------------------------------------------------------------------------\n영상 제작에 사용된 제품들이 궁금하시다면… 👇👇👇\n\n【오늘 영상에 등장】\n➜ 미국 미네소타\n\n【배경 음악】\n➜ Artlist: \nhttps://bit.ly/3wh5M4u\n작곡가에게서 직접 제공받는 무제한 라이선스음악\n*위 링크를 이용하시면 두달의 추가 구독기간이 제공되며, \n저는 소정의 커미션을 받습니다.\n\n【사용중인 장비】\n➜ 카메라:\nSony A6500\nSony ZV-1 \nGoPro 8\niPhone 12 Max\nDJI Air 2s\n\n➜ 마이크: \nRode Videomic Pro Plus\nRode Wireless Go 2 + Lavalier\nRode NT USB \n\n------------------------------------------------------------------------------------\n【태그】\n#장모님 #깜짝방문 #반응\n------------------------------------------------------------------------------------\n협찬 문의 (business email) : rayejin.business@gmail.com",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/qvqRVZZ3ezE/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/qvqRVZZ3ezE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/qvqRVZZ3ezE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/qvqRVZZ3ezE/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/qvqRVZZ3ezE/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "레이진 [Raye & Jin]",
                    tags: [
                      "국제커플",
                      "Amwf",
                      "한미커플",
                      "International couple",
                      "Korean boyfriend",
                      "Korean husband",
                      "국제부부",
                      "서울",
                      "seoul",
                      "국제결혼",
                      "living in korea",
                      "korean expat",
                      "teaching in korea",
                      "life in korea",
                      "f6 visa",
                      "e2 visa",
                      "장모님",
                      "반응",
                      "미국",
                      "미네소타",
                      "surprise",
                      "reaction",
                      "minnesota",
                      "mom",
                      "family reunited",
                      "깜짝",
                      "방문",
                    ],
                    categoryId: "22",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "2년만에 눈앞에 깜짝 등장한 아내를 본 미국 장모님의 반응 (감동주의) | 🇺🇸🇰🇷",
                      description:
                        "➜ 구독! 과 좋아요 버튼은 사랑입니다!!!\n\n【인스타그램 팔로우 부탁드려요】\nRaye - https://www.instagram.com/raye.yoo/\nJin - https://www.instagram.com/jwyoo13/\n------------------------------------------------------------------------------------\n영상 제작에 사용된 제품들이 궁금하시다면… 👇👇👇\n\n【오늘 영상에 등장】\n➜ 미국 미네소타\n\n【배경 음악】\n➜ Artlist: \nhttps://bit.ly/3wh5M4u\n작곡가에게서 직접 제공받는 무제한 라이선스음악\n*위 링크를 이용하시면 두달의 추가 구독기간이 제공되며, \n저는 소정의 커미션을 받습니다.\n\n【사용중인 장비】\n➜ 카메라:\nSony A6500\nSony ZV-1 \nGoPro 8\niPhone 12 Max\nDJI Air 2s\n\n➜ 마이크: \nRode Videomic Pro Plus\nRode Wireless Go 2 + Lavalier\nRode NT USB \n\n------------------------------------------------------------------------------------\n【태그】\n#장모님 #깜짝방문 #반응\n------------------------------------------------------------------------------------\n협찬 문의 (business email) : rayejin.business@gmail.com",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "205640",
                    likeCount: "10775",
                    dislikeCount: "89",
                    favoriteCount: "0",
                    commentCount: "984",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "c5off53ZLI_cvDbvhGZ4Gv56-hs",
                  id: "XZ4UK31FpRw",
                  snippet: {
                    publishedAt: "2021-11-19T16:34:03Z",
                    channelId: "UCepUWUpH45hRTi-QePdq1Bg",
                    title:
                      "SMTM10 [풀버전/8회] ♬ 만남은 쉽고 이별은 어려워 (Feat. Leellamarz) - 베이식 @본선",
                    description:
                      "#SMTM10 [풀버전/8회] ♬ #만남은쉽고이별은어려워 (Feat. Leellamarz) - 베이식 @본선\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈#쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/XZ4UK31FpRw/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/XZ4UK31FpRw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/XZ4UK31FpRw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/XZ4UK31FpRw/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/XZ4UK31FpRw/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "Mnet TV",
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "SMTM10 [풀버전/8회] ♬ 만남은 쉽고 이별은 어려워 (Feat. Leellamarz) - 베이식 @본선",
                      description:
                        "#SMTM10 [풀버전/8회] ♬ #만남은쉽고이별은어려워 (Feat. Leellamarz) - 베이식 @본선\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈#쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    },
                    defaultAudioLanguage: "en",
                  },
                  statistics: {
                    viewCount: "1796368",
                    likeCount: "41515",
                    dislikeCount: "384",
                    favoriteCount: "0",
                    commentCount: "4577",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "13nVk8vCPZ41jbNdrfFDF5qneNg",
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
                  statistics: {
                    viewCount: "1967559",
                    likeCount: "27626",
                    dislikeCount: "262",
                    favoriteCount: "0",
                    commentCount: "7863",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "n8H_zO1SoOnJv_mqIJdUa7GPQpM",
                  id: "zR5D396knt8",
                  snippet: {
                    publishedAt: "2021-11-19T07:00:10Z",
                    channelId: "UCAmff0euQRf6RwVlbB8PLMw",
                    title:
                      "[FULL] 성숙한 삐약이로 돌아온💚🐤 정동원(JEONG DONGWON) | 특별 초대석 | 두시탈출 컬투쇼 | 211119",
                    description:
                      "인생 첫 정규 앨범 〈그리운, 아낌없이 주는 나무〉 선주문만 10만장을 넘은 \n정동원(JEONG DONGWON)🌳\n멋있음이 뿜뿜하는 모습으로 돌아온 정동원의 더블 타이틀곡 중에 ‘잘가요 내사랑’과 \n로봇춤을 볼 수 있는 ’미소천사 (원곡 성시경)’ 라이브까지 꼭 확인하세요!👍\n에라오에서만 공개하는 트롯 삐약이 정동원 컬투쇼 특별 초대석 풀버전 영상 공개💚\n\n10:32 🎼[LIVE] 정동원 - 잘가요 내사랑\n31:52 🎼[LIVE] 정동원 - 미소천사 (원곡 성시경)\n\n(※ 라디오 광고는 저작권 문제로 삭제되었습니다)\n#정동원 #두시탈출컬투쇼 #컬투쇼 \n#특별초대석 #잘가요내사랑 \n\nSBS 파워FM 107.7MHz\n매일 낮 2시~4시 두시탈출 컬투쇼\n*2021년 11월 19일* 방송중",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/zR5D396knt8/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/zR5D396knt8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/zR5D396knt8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/zR5D396knt8/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/zR5D396knt8/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "SBS Radio 에라오",
                    tags: [
                      "sbs라디오",
                      "에라오",
                      "라디오",
                      "보는라디오",
                      "두시탈출 컬투쇼",
                      "컬투쇼",
                      "정동원",
                      "정동원 라디오",
                      "컬투쇼 정동원",
                      "정동원 컬투쇼",
                      "정동원 보는라디오",
                      "보는 라디오 정동원",
                      "그리운",
                      "아낌없이 주는 나무",
                      "잘가요 내사랑",
                      "잘가요 내사랑 라이브",
                      "미소천사",
                      "정동원 미소천사",
                      "JEONG DONGWON",
                      "정동원 성시경",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "[FULL] 성숙한 삐약이로 돌아온💚🐤 정동원(JEONG DONGWON) | 특별 초대석 | 두시탈출 컬투쇼 | 211119",
                      description:
                        "인생 첫 정규 앨범 〈그리운, 아낌없이 주는 나무〉 선주문만 10만장을 넘은 \n정동원(JEONG DONGWON)🌳\n멋있음이 뿜뿜하는 모습으로 돌아온 정동원의 더블 타이틀곡 중에 ‘잘가요 내사랑’과 \n로봇춤을 볼 수 있는 ’미소천사 (원곡 성시경)’ 라이브까지 꼭 확인하세요!👍\n에라오에서만 공개하는 트롯 삐약이 정동원 컬투쇼 특별 초대석 풀버전 영상 공개💚\n\n10:32 🎼[LIVE] 정동원 - 잘가요 내사랑\n31:52 🎼[LIVE] 정동원 - 미소천사 (원곡 성시경)\n\n(※ 라디오 광고는 저작권 문제로 삭제되었습니다)\n#정동원 #두시탈출컬투쇼 #컬투쇼 \n#특별초대석 #잘가요내사랑 \n\nSBS 파워FM 107.7MHz\n매일 낮 2시~4시 두시탈출 컬투쇼\n*2021년 11월 19일* 방송중",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "108958",
                    favoriteCount: "0",
                    commentCount: "604",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "MplEtm3Bj6drwxYj9VudSfe7Byo",
                  id: "PibUEH7Ing0",
                  snippet: {
                    publishedAt: "2021-11-19T09:00:21Z",
                    channelId: "UCoJQwxLJ_tRte5F3DK27FZw",
                    title:
                      "[맛만볼까?] 쩡수 하우스에서 간단하게 삼겹살 5kg 공깃밥 대신 꼬마김밥",
                    description:
                      "오늘 맛본 음식 삼겹살 5kg 그리고 꼬마김밥입니다!\n\n대패삼겹살, 생상겹살, 그리고 미나이와 꼬마김밥의 콜라보\n침넘어가는 먹방...  지켜 봐 주세요!\n\n\n#맛만볼까 #영암민속씨름단 #윤정수 #코치\n#맘모스코치 #삼겹살 #꼬마김밥\n\n[Should I just taste it?] Having a simple meal with 5kg of grilled pork belly and mini gimbap \n\ninstead of streamed rice at Jungsoo's house\n\nToday, I tasted 5kg of grilled pork belly and mini gimbap!\n\nThin pork belly, raw pork belly, and collaboration between water celery and mini gimbap\nMouthwatering mukbang...  Please watch it!\n\n\n#Should I just taste it #Yeongam Folk Ssireum Team #Yoon Jungsoo #Coach\n#Coach Mammoth #Grilled pork belly #Mini gimbap",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/PibUEH7Ing0/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/PibUEH7Ing0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/PibUEH7Ing0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/PibUEH7Ing0/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/PibUEH7Ing0/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle:
                      "윤코치의 맛만 볼까? (Mammoth coach Tasty road)",
                    tags: [
                      "맛만볼까",
                      "영암민속씨름단",
                      "윤정수",
                      "윤정수코치",
                      "먹방",
                      "삼겹살",
                      "대패삼겹살",
                      "꼬마김밥",
                      "미나리",
                      "상추",
                      "고추장",
                      "불판",
                      "정육점",
                      "정육식당",
                      "고기",
                      "돼지고기",
                      "집게",
                      "대왕식기",
                      "맘모스",
                      "사장님은 당나귀귀",
                      "사당귀",
                      "매머드",
                      "맘모스코치",
                      "코치",
                      "씨름",
                      "영암",
                      "시장",
                      "김밥",
                      "대패",
                      "생삼겹",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "en",
                    localized: {
                      title:
                        "[맛만볼까?] 쩡수 하우스에서 간단하게 삼겹살 5kg 공깃밥 대신 꼬마김밥",
                      description:
                        "오늘 맛본 음식 삼겹살 5kg 그리고 꼬마김밥입니다!\n\n대패삼겹살, 생상겹살, 그리고 미나이와 꼬마김밥의 콜라보\n침넘어가는 먹방...  지켜 봐 주세요!\n\n\n#맛만볼까 #영암민속씨름단 #윤정수 #코치\n#맘모스코치 #삼겹살 #꼬마김밥\n\n[Should I just taste it?] Having a simple meal with 5kg of grilled pork belly and mini gimbap \n\ninstead of streamed rice at Jungsoo's house\n\nToday, I tasted 5kg of grilled pork belly and mini gimbap!\n\nThin pork belly, raw pork belly, and collaboration between water celery and mini gimbap\nMouthwatering mukbang...  Please watch it!\n\n\n#Should I just taste it #Yeongam Folk Ssireum Team #Yoon Jungsoo #Coach\n#Coach Mammoth #Grilled pork belly #Mini gimbap",
                    },
                    defaultAudioLanguage: "en",
                  },
                  statistics: {
                    viewCount: "516040",
                    likeCount: "10139",
                    dislikeCount: "242",
                    favoriteCount: "0",
                    commentCount: "915",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "hY77Bc-s-orneQMoIjvxDTZwgUU",
                  id: "qRdTyoZd3rg",
                  snippet: {
                    publishedAt: "2021-11-19T05:00:01Z",
                    channelId: "UCYDmx2Sfpnaxg488yBpZIGg",
                    title: "MONSTA X 몬스타엑스 'Rush Hour' MV",
                    description:
                      "▶More information\nMONSTA X Official Fan cafe : http://cafe.daum.net/monsta-x\nMONSTA X Official Twitter : http://www.twitter.com/OfficialMonstaX\nMONSTA X Official Facebook : http://www.facebook.com/OfficialMonstaX\nMONSTA X Official Instagram : https://www.instagram.com/official_monsta_x\nMONSTA X Official Weibo : http://www.weibo.com/monstax\n\n#MONSTAX #몬스타엑스 #MONBEBE #Rush_Hour",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/qRdTyoZd3rg/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/qRdTyoZd3rg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/qRdTyoZd3rg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/qRdTyoZd3rg/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/qRdTyoZd3rg/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "starshipTV",
                    tags: [
                      "Kpop",
                      "1theK",
                      "Starshiptv",
                      "starship",
                      "loen",
                      "로엔",
                      "뮤비",
                      "티져",
                      "MV",
                      "Teaser",
                      "Dance practice",
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
                      "reality",
                      "몬채널",
                      "MONCHANNEL",
                      "MON-CHANNEL",
                      "making film",
                      "behind",
                      "MONSTA X",
                      "MONSTA-X",
                      "몬스타엑스",
                      "몬엑",
                      "MX",
                      "DRAMARAMA",
                      "THE CODE",
                      "더코드",
                      "드라마라마",
                      "몬스타엑스 드라마라마",
                      "걸어",
                      "THE CLAN",
                      "ALL IN",
                      "셔누",
                      "형원",
                      "기현",
                      "민혁",
                      "주헌",
                      "아이엠",
                      "SHOWNU",
                      "HYUNGWON",
                      "KIHYUN",
                      "MINHYUK",
                      "JOOHEON",
                      "JOOHONEY",
                      "IM",
                      "one of a kind",
                      "gambler",
                      "no limit",
                      "rush hour",
                      "노리밋",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title: "MONSTA X 몬스타엑스 'Rush Hour' MV",
                      description:
                        "▶More information\nMONSTA X Official Fan cafe : http://cafe.daum.net/monsta-x\nMONSTA X Official Twitter : http://www.twitter.com/OfficialMonstaX\nMONSTA X Official Facebook : http://www.facebook.com/OfficialMonstaX\nMONSTA X Official Instagram : https://www.instagram.com/official_monsta_x\nMONSTA X Official Weibo : http://www.weibo.com/monstax\n\n#MONSTAX #몬스타엑스 #MONBEBE #Rush_Hour",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "8824601",
                    likeCount: "215214",
                    dislikeCount: "938",
                    favoriteCount: "0",
                    commentCount: "35853",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "kqnkc3Q17FwOWExUT5NlO8CSx2Q",
                  id: "cH_kWdVEVk4",
                  snippet: {
                    publishedAt: "2021-11-19T09:00:34Z",
                    channelId: "UCi-XI2BIPJmjmp5EbKl6YTQ",
                    title: "너 악플로 사람 죽여봤니? [기시니 스릴러툰]",
                    description:
                      "이 영상은 '아프리카 BJ'편과 이어집니다 - https://youtu.be/91xDE3dNiZI\n\n촉법소년 101 1편 바로가기: https://youtu.be/kV0xpUFoJr4\n촉법소년 101 2편 바로가기:https://youtu.be/TRoD3PHG0XY\n\n--BGM--\n\nCinema Blockbuster Trailer 3 by Sascha Ende®\nLink: https://filmmusic.io/song/215-cinema-blockbuster-trailer-3\nLicense: https://filmmusic.io/standard-license\nCircles In The Sky  by Rafael Krux\nLink: https://filmmusic.io/song/5307-circles-in-the-sky-\nLicense: https://filmmusic.io/standard-license\nBlockbuster Atmosphere 6 (Horror) by Sascha Ende®\nLink: https://filmmusic.io/song/137-blockbuster-atmosphere-6-horror-\nLicense: https://filmmusic.io/standard-license\nSings In The Fields  by Rafael Krux\nLink: https://filmmusic.io/song/5302-sings-in-the-fields-\nLicense: https://filmmusic.io/standard-license\nCinema Blockbuster Trailer 14 by Sascha Ende®\nLink: https://filmmusic.io/song/4662-cinema-blockbuster-trailer-14\nLicense: https://filmmusic.io/standard-license\nNight Of Mystery by Alexander Nakarada\nLink: https://filmmusic.io/song/7469-night-of-mystery\nLicense: https://filmmusic.io/standard-license",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/cH_kWdVEVk4/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/cH_kWdVEVk4/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/cH_kWdVEVk4/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/cH_kWdVEVk4/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/cH_kWdVEVk4/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "기시니 스릴러툰",
                    tags: ["악플", "악플러"],
                    categoryId: "1",
                    liveBroadcastContent: "none",
                    localized: {
                      title: "너 악플로 사람 죽여봤니? [기시니 스릴러툰]",
                      description:
                        "이 영상은 '아프리카 BJ'편과 이어집니다 - https://youtu.be/91xDE3dNiZI\n\n촉법소년 101 1편 바로가기: https://youtu.be/kV0xpUFoJr4\n촉법소년 101 2편 바로가기:https://youtu.be/TRoD3PHG0XY\n\n--BGM--\n\nCinema Blockbuster Trailer 3 by Sascha Ende®\nLink: https://filmmusic.io/song/215-cinema-blockbuster-trailer-3\nLicense: https://filmmusic.io/standard-license\nCircles In The Sky  by Rafael Krux\nLink: https://filmmusic.io/song/5307-circles-in-the-sky-\nLicense: https://filmmusic.io/standard-license\nBlockbuster Atmosphere 6 (Horror) by Sascha Ende®\nLink: https://filmmusic.io/song/137-blockbuster-atmosphere-6-horror-\nLicense: https://filmmusic.io/standard-license\nSings In The Fields  by Rafael Krux\nLink: https://filmmusic.io/song/5302-sings-in-the-fields-\nLicense: https://filmmusic.io/standard-license\nCinema Blockbuster Trailer 14 by Sascha Ende®\nLink: https://filmmusic.io/song/4662-cinema-blockbuster-trailer-14\nLicense: https://filmmusic.io/standard-license\nNight Of Mystery by Alexander Nakarada\nLink: https://filmmusic.io/song/7469-night-of-mystery\nLicense: https://filmmusic.io/standard-license",
                    },
                  },
                  statistics: {
                    viewCount: "201066",
                    likeCount: "4486",
                    dislikeCount: "108",
                    favoriteCount: "0",
                    commentCount: "714",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "zQcjwRRNGgKZgCSXh20H_PGphWw",
                  id: "liHgM4y-UbE",
                  snippet: {
                    publishedAt: "2021-11-19T06:52:33Z",
                    channelId: "UCBhR7WKMD50cxkTJ5CNaUGA",
                    title: "무짠지 이렇게 담아 보세요. 1년이 걱정 없습니다.",
                    description: "",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/liHgM4y-UbE/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/liHgM4y-UbE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/liHgM4y-UbE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/liHgM4y-UbE/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/liHgM4y-UbE/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "통령할미달장",
                    tags: [
                      "무짠지",
                      "무짠지 담그는 법",
                      "무짠지 무르지 않게 담그는 법",
                    ],
                    categoryId: "15",
                    liveBroadcastContent: "none",
                    localized: {
                      title: "무짠지 이렇게 담아 보세요. 1년이 걱정 없습니다.",
                      description: "",
                    },
                  },
                  statistics: {
                    viewCount: "141827",
                    likeCount: "2118",
                    dislikeCount: "134",
                    favoriteCount: "0",
                    commentCount: "54",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "OKgnXk-Z1xrM5MEc7q7MY2L81qc",
                  id: "fVBYltKjxuI",
                  snippet: {
                    publishedAt: "2021-11-19T16:34:05Z",
                    channelId: "UCepUWUpH45hRTi-QePdq1Bg",
                    title:
                      "SMTM10 [풀버전/8회] ♬ 이끼 (Feat. MINO, BOBBY) - 머드 더 스튜던트 @본선",
                    description:
                      "#SMTM10 [풀버전/8회]♬ #이끼 (Feat. MINO, BOBBY) - 머드 더 스튜던트 @본선\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈#쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/fVBYltKjxuI/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/fVBYltKjxuI/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/fVBYltKjxuI/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/fVBYltKjxuI/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/fVBYltKjxuI/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "Mnet TV",
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    localized: {
                      title:
                        "SMTM10 [풀버전/8회] ♬ 이끼 (Feat. MINO, BOBBY) - 머드 더 스튜던트 @본선",
                      description:
                        "#SMTM10 [풀버전/8회]♬ #이끼 (Feat. MINO, BOBBY) - 머드 더 스튜던트 @본선\n\n마스터피스를 완성하는 자, 누가 될 것인가?\nShow Me The Money 10 'THE ORIGINAL'\n〈#쇼미더머니10〉 매주 금요일 밤 11시 본방송\n\n🎤〈SMTM10〉 Homepage : https://program.genie.co.kr/smtm10/main\n🎤〈SMTM10〉 Instgram : https://www.instagram.com/mnet_hiphop/\n🎤〈SMTM10〉 Facebook :  https://www.facebook.com/mnethiphop\n🎤〈SMTM10〉 Twitter : https://twitter.com/mnet_hiphop",
                    },
                    defaultAudioLanguage: "en",
                  },
                  statistics: {
                    viewCount: "1954061",
                    likeCount: "52909",
                    dislikeCount: "1170",
                    favoriteCount: "0",
                    commentCount: "7251",
                  },
                },
                {
                  kind: "youtube#video",
                  etag: "cW6_HvYnOtoD2wxMxxZJ1yT3DTA",
                  id: "K39dT1Ur_Cg",
                  snippet: {
                    publishedAt: "2021-11-19T14:06:26Z",
                    channelId: "UCJoRpVvenLpRav3UFg4Yyiw",
                    title:
                      "※군침주의※ 현주엽♡박상현 부부의 호화로운 코스 요리 만들기~♪ #highlight #동굴캐슬 EP.3",
                    description:
                      "티빙에서 스트리밍 : https://tving.onelink.me/xHqC/30a78d6f\n\n#동굴캐슬 #부부 #동굴멘터리\n동굴캐슬 Wild Cave EP.3\n\nWILD, WAR, LOVE\n부부들의 극현실 동굴멘터리 ＜동굴캐슬＞\n매주 (화) 밤 10시 tvN STORY 방송\n\n#티빙에서스트리밍",
                    thumbnails: {
                      default: {
                        url: "https://i.ytimg.com/vi/K39dT1Ur_Cg/default.jpg",
                        width: 120,
                        height: 90,
                      },
                      medium: {
                        url: "https://i.ytimg.com/vi/K39dT1Ur_Cg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                      },
                      high: {
                        url: "https://i.ytimg.com/vi/K39dT1Ur_Cg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                      },
                      standard: {
                        url: "https://i.ytimg.com/vi/K39dT1Ur_Cg/sddefault.jpg",
                        width: 640,
                        height: 480,
                      },
                      maxres: {
                        url: "https://i.ytimg.com/vi/K39dT1Ur_Cg/maxresdefault.jpg",
                        width: 1280,
                        height: 720,
                      },
                    },
                    channelTitle: "티비엔 스토리 tvN STORY",
                    tags: [
                      "동굴캐슬",
                      "박건형",
                      "서현철",
                      "티빙에서스트리밍",
                      "함연지",
                      "현주엽",
                      "홍성흔",
                    ],
                    categoryId: "24",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ko",
                    localized: {
                      title:
                        "※군침주의※ 현주엽♡박상현 부부의 호화로운 코스 요리 만들기~♪ #highlight #동굴캐슬 EP.3",
                      description:
                        "티빙에서 스트리밍 : https://tving.onelink.me/xHqC/30a78d6f\n\n#동굴캐슬 #부부 #동굴멘터리\n동굴캐슬 Wild Cave EP.3\n\nWILD, WAR, LOVE\n부부들의 극현실 동굴멘터리 ＜동굴캐슬＞\n매주 (화) 밤 10시 tvN STORY 방송\n\n#티빙에서스트리밍",
                    },
                    defaultAudioLanguage: "ko",
                  },
                  statistics: {
                    viewCount: "298730",
                    likeCount: "1958",
                    dislikeCount: "107",
                    favoriteCount: "0",
                    commentCount: "129",
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
              "content-length": "14714",
              "content-type": "application/json; charset=UTF-8",
              date: "Sun, 21 Nov 2021 10:16:13 GMT",
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
              url: "https://www.googleapis.com/youtube/v3/videos?part=snippet, statistics&chart=mostPopular&maxResults=20&regionCode=KR&key=AIzaSyCnSYEgItutcgRmMnwnH-AXh3LdQ3Nbzrw",
            },
            request: {},
          };

          resolve(result.data.items);
        }, 1500)
      );
    };

    const getChannelData = async (items) => {
      let channelIDsString = "";
      items.forEach((i) => {
        channelIDsString += i.snippet.channelId + ",";
      });
      channelIDsString = channelIDsString.slice(0, -1);

      // const urlGetChannel = `https://www.googleapis.com/youtube/v3/channels?part=${option.part}&id=${channelIDsString}&key=${option.apiKey}`;
      // const channelData = await axios.get(urlGetChannel);
      // console.log(channelData);

      const channelData = {
        data: {
          kind: "youtube#channelListResponse",
          etag: "CpTgn9lWKtZIeC0zMjMVOO5eEgs",
          pageInfo: {
            totalResults: 18,
            resultsPerPage: 5,
          },
          items: [
            {
              kind: "youtube#channel",
              etag: "0PLLgjcqLU_NflBLsAdQJELh-6o",
              id: "UCQ7X91NIBS174KJT4Id0lnQ",
              snippet: {
                title: "킬링벌's KillingBees",
                description:
                  "※ 주의 ※ 과다복용시 흥얼거림\nBusiness : klvs234@gmail.com\n",
                publishedAt: "2020-10-16T13:33:43.959704Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTPb5psnQYk6SL_kw0VZ2M4fJK0OxSg1g7IPlYy=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTPb5psnQYk6SL_kw0VZ2M4fJK0OxSg1g7IPlYy=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTPb5psnQYk6SL_kw0VZ2M4fJK0OxSg1g7IPlYy=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "킬링벌's KillingBees",
                  description:
                    "※ 주의 ※ 과다복용시 흥얼거림\nBusiness : klvs234@gmail.com\n",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "10635545",
                subscriberCount: "88300",
                hiddenSubscriberCount: false,
                videoCount: "21",
              },
            },
            {
              kind: "youtube#channel",
              etag: "zbNh1isGg8hyeTejAGaw20eDEWU",
              id: "UCJoRpVvenLpRav3UFg4Yyiw",
              snippet: {
                title: "티비엔 스토리 tvN STORY",
                description:
                  "라이프 스토리 채널 \n나의 이야기는 계속된다\ntvN STORY 📺\n",
                customUrl: "티비엔스토리tvnstory",
                publishedAt: "2021-03-05T10:38:11.049081Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRljxBmYc_HvjzGCmzqooZS9rz0abvOXr6VKMoa=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRljxBmYc_HvjzGCmzqooZS9rz0abvOXr6VKMoa=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRljxBmYc_HvjzGCmzqooZS9rz0abvOXr6VKMoa=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "티비엔 스토리 tvN STORY",
                  description:
                    "라이프 스토리 채널 \n나의 이야기는 계속된다\ntvN STORY 📺\n",
                },
              },
              statistics: {
                viewCount: "9568212",
                hiddenSubscriberCount: true,
                videoCount: "1794",
              },
            },
            {
              kind: "youtube#channel",
              etag: "XCKFrfEWcanfCCfNj8SQbHdjoao",
              id: "UCYDmx2Sfpnaxg488yBpZIGg",
              snippet: {
                title: "starshipTV",
                description:
                  "Welcome to  StarshipTV! \nSTARSHIP Entertainment  Official  YouTube Channel\n\n\nKPOP MUSIC",
                customUrl: "starshiptv",
                publishedAt: "2010-03-14T11:10:25Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRU23495SJkzAN1qCqMlW2XhqCPfFybbLFR2krS=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRU23495SJkzAN1qCqMlW2XhqCPfFybbLFR2krS=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRU23495SJkzAN1qCqMlW2XhqCPfFybbLFR2krS=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "starshipTV",
                  description:
                    "Welcome to  StarshipTV! \nSTARSHIP Entertainment  Official  YouTube Channel\n\n\nKPOP MUSIC",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "2845685873",
                subscriberCount: "4850000",
                hiddenSubscriberCount: false,
                videoCount: "1981",
              },
            },
            {
              kind: "youtube#channel",
              etag: "Lzh6-EaFstVTwBHJgeDiVGX-sqY",
              id: "UC3WZlO2Zl8NE1yIUgtwUtQw",
              snippet: {
                title: "임영웅",
                description:
                  "임영웅 LimYoungWoong I'm HERO Official YouTube Channel\n\n",
                customUrl: "임영웅",
                publishedAt: "2011-12-02T09:10:23Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRWFYNj0PDSNGb_WrRwValOjlfmApNSLrC41R7N0A=s88-c-k-c0x00ffffff-no-rj-mo",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRWFYNj0PDSNGb_WrRwValOjlfmApNSLrC41R7N0A=s240-c-k-c0x00ffffff-no-rj-mo",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRWFYNj0PDSNGb_WrRwValOjlfmApNSLrC41R7N0A=s800-c-k-c0x00ffffff-no-rj-mo",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "임영웅",
                  description:
                    "임영웅 LimYoungWoong I'm HERO Official YouTube Channel\n\n",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "1115228344",
                subscriberCount: "1250000",
                hiddenSubscriberCount: false,
                videoCount: "579",
              },
            },
            {
              kind: "youtube#channel",
              etag: "zLewQj-S5g-E5or2yu9Nq74_VVI",
              id: "UCBhR7WKMD50cxkTJ5CNaUGA",
              snippet: {
                title: "통령할미달장",
                description: "",
                publishedAt: "2010-12-19T10:35:13Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSw29q16wo5irie6RVrLJGx0XQIw_CNFtlu-PvNb38=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSw29q16wo5irie6RVrLJGx0XQIw_CNFtlu-PvNb38=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSw29q16wo5irie6RVrLJGx0XQIw_CNFtlu-PvNb38=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "통령할미달장",
                  description: "",
                },
              },
              statistics: {
                viewCount: "8779598",
                subscriberCount: "74100",
                hiddenSubscriberCount: false,
                videoCount: "207",
              },
            },
            {
              kind: "youtube#channel",
              etag: "437D0Iz3Q56r6sxEThZmElNmI-U",
              id: "UCOHM2N1YQdb-cHWxJxwBMLQ",
              snippet: {
                title: "아는형님 Knowingbros",
                description:
                  "아는 형님 Knowingbros\nJTBC 대표 예능 ＜아는 형님＞ 공식 유튜브 채널 입니다.\n\n",
                customUrl: "knowingbros",
                publishedAt: "2014-01-14T07:23:12Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTcf-r0hDwp_VBWN6c7jyOljIoc12kXQqChoPLfFQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTcf-r0hDwp_VBWN6c7jyOljIoc12kXQqChoPLfFQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTcf-r0hDwp_VBWN6c7jyOljIoc12kXQqChoPLfFQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "아는형님 Knowingbros",
                  description:
                    "아는 형님 Knowingbros\nJTBC 대표 예능 ＜아는 형님＞ 공식 유튜브 채널 입니다.\n\n",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "845363169",
                subscriberCount: "1920000",
                hiddenSubscriberCount: false,
                videoCount: "1768",
              },
            },
            {
              kind: "youtube#channel",
              etag: "kZQByyCBBm362hQVFwSViX0t2hc",
              id: "UCk6bX-MZXdte_7kG8TbMkqg",
              snippet: {
                title: "허팝Heopop",
                description:
                  "안녕하세요. 허팝입니다 ^^\n여러분의 호기심을 해결해드리며 재미난 일상을 공유합니다.\n겉멋이 아닌 솔직한 모습으로 함께 인생 즐겨봅시다! Hand in Hand\n허팝파워를 여러분에게 선사해드리겠습니다!\n\nHi~ I'm Heopop ^^",
                customUrl: "heopopfamily",
                publishedAt: "2014-07-30T01:33:45Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSW8__kWeGKDFn3GUhDrpyBKdZuK0ejrsxk-MkMZw=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSW8__kWeGKDFn3GUhDrpyBKdZuK0ejrsxk-MkMZw=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSW8__kWeGKDFn3GUhDrpyBKdZuK0ejrsxk-MkMZw=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "허팝Heopop",
                  description:
                    "안녕하세요. 허팝입니다 ^^\n여러분의 호기심을 해결해드리며 재미난 일상을 공유합니다.\n겉멋이 아닌 솔직한 모습으로 함께 인생 즐겨봅시다! Hand in Hand\n허팝파워를 여러분에게 선사해드리겠습니다!\n\nHi~ I'm Heopop ^^",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "3250727680",
                subscriberCount: "3840000",
                hiddenSubscriberCount: false,
                videoCount: "1896",
              },
            },
            {
              kind: "youtube#channel",
              etag: "U211laeWaiuOv_1zLOs6PahjLYc",
              id: "UCSknObj2PGGK6KCkTyc5Kkw",
              snippet: {
                title: "레이진 [Raye & Jin]",
                description:
                  "안녕하세요! 저희는 레이(미국인) 진(한국인) 국제 커플입니다. \n저희 채널은 일상, 경험, 모험을 공유하기 위해 만들었습니다. 귀엽게 봐주세요!! \n\nHello! We are Raye (Minnesotan) and Jin (Korean). We started this channel just for fun so we could share our daily lives and adventures in the US and Korea with you!\n\nPlease contact us here: rayejin.business@gmail.com\n\n",
                publishedAt: "2019-10-06T05:18:51Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTcIbgYy2jpQY2tuty45w7K5NQUs2xATC6rtJr_uA=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTcIbgYy2jpQY2tuty45w7K5NQUs2xATC6rtJr_uA=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTcIbgYy2jpQY2tuty45w7K5NQUs2xATC6rtJr_uA=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "레이진 [Raye & Jin]",
                  description:
                    "안녕하세요! 저희는 레이(미국인) 진(한국인) 국제 커플입니다. \n저희 채널은 일상, 경험, 모험을 공유하기 위해 만들었습니다. 귀엽게 봐주세요!! \n\nHello! We are Raye (Minnesotan) and Jin (Korean). We started this channel just for fun so we could share our daily lives and adventures in the US and Korea with you!\n\nPlease contact us here: rayejin.business@gmail.com\n\n",
                },
                country: "US",
              },
              statistics: {
                viewCount: "17890705",
                subscriberCount: "78100",
                hiddenSubscriberCount: false,
                videoCount: "111",
              },
            },
            {
              kind: "youtube#channel",
              etag: "ChQmsyd2xzZ0D1ezTT3S-HskHPQ",
              id: "UCq_NshSNZ8pjuNsEr3PJtiw",
              snippet: {
                title: "차린건 없지만",
                description: "영ㅈㅣ’s 🍗차린건없지만🍗\n#차린건(진짜)없지만\n",
                customUrl: "차린건없지만",
                publishedAt: "2021-10-04T05:18:37.059608Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/8kwv-O3PeWwXWQSdfEcvq-VnuOmUtNkBr0tHLoW_wr8rD_8eDwZQS6IIn-eGzJUPocbFo2d-xg=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/8kwv-O3PeWwXWQSdfEcvq-VnuOmUtNkBr0tHLoW_wr8rD_8eDwZQS6IIn-eGzJUPocbFo2d-xg=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/8kwv-O3PeWwXWQSdfEcvq-VnuOmUtNkBr0tHLoW_wr8rD_8eDwZQS6IIn-eGzJUPocbFo2d-xg=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "차린건 없지만",
                  description:
                    "영ㅈㅣ’s 🍗차린건없지만🍗\n#차린건(진짜)없지만\n",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "4263807",
                hiddenSubscriberCount: true,
                videoCount: "6",
              },
            },
            {
              kind: "youtube#channel",
              etag: "-OMb-ntAP7tdZ15PPid2w7sKb4E",
              id: "UCoJQwxLJ_tRte5F3DK27FZw",
              snippet: {
                title: "윤코치의 맛만 볼까? (Mammoth coach Tasty road)",
                description:
                  "천하장사 윤정수 코치의 맛있는 시식 채널\n간단(?)하게 맛만 보고 가실게요~\n\n많은 관심 부탁드립니다~\n\n#맛만볼까 #먹방 #술먹방 #씨름 #윤정수 #코치 #매머드\n\n비즈니스 문의  \ninstagram - https://www.instagram.com/fu_company_/\nE-mail - fucompany16@gmail.com\n\n예고편은 푸 컴퍼니 \n인스타에서 확인하세요~!",
                publishedAt: "2021-11-11T22:12:26.634374Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ZXDkm9Nzkekh6JqbP40DXdzJtjTN5lUM5nKIolmWyGA4_hllqVqn85GEIkNJ53VR42k5D2l-Mw=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ZXDkm9Nzkekh6JqbP40DXdzJtjTN5lUM5nKIolmWyGA4_hllqVqn85GEIkNJ53VR42k5D2l-Mw=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ZXDkm9Nzkekh6JqbP40DXdzJtjTN5lUM5nKIolmWyGA4_hllqVqn85GEIkNJ53VR42k5D2l-Mw=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "윤코치의 맛만 볼까? (Mammoth coach Tasty road)",
                  description:
                    "천하장사 윤정수 코치의 맛있는 시식 채널\n간단(?)하게 맛만 보고 가실게요~\n\n많은 관심 부탁드립니다~\n\n#맛만볼까 #먹방 #술먹방 #씨름 #윤정수 #코치 #매머드\n\n비즈니스 문의  \ninstagram - https://www.instagram.com/fu_company_/\nE-mail - fucompany16@gmail.com\n\n예고편은 푸 컴퍼니 \n인스타에서 확인하세요~!",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "1127374",
                subscriberCount: "35100",
                hiddenSubscriberCount: false,
                videoCount: "4",
              },
            },
            {
              kind: "youtube#channel",
              etag: "GsSSNbjmLGpBI9c5hL_MI-PpFZg",
              id: "UCWYzc_p0GgfCepIWDHGFmEg",
              snippet: {
                title: "디글 :Diggle",
                description:
                  "방송국놈들이 덕질하는 채널\n\nYou ready?\nLet's giggle,  :Diggle!",
                customUrl: "디글diggle",
                publishedAt: "2020-02-26T07:51:36.376396Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/1t9q9Pr-30XvLZlcupB_cvye9566iwL3juhXWgiMeozx7ulKAWcweC5XZammwHXNVc6_zHrxSQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/1t9q9Pr-30XvLZlcupB_cvye9566iwL3juhXWgiMeozx7ulKAWcweC5XZammwHXNVc6_zHrxSQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/1t9q9Pr-30XvLZlcupB_cvye9566iwL3juhXWgiMeozx7ulKAWcweC5XZammwHXNVc6_zHrxSQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "디글 :Diggle",
                  description:
                    "방송국놈들이 덕질하는 채널\n\nYou ready?\nLet's giggle,  :Diggle!",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "2708744919",
                subscriberCount: "1250000",
                hiddenSubscriberCount: false,
                videoCount: "15925",
              },
            },
            {
              kind: "youtube#channel",
              etag: "d-CMH-XLarqyyYyBwvZoLQaiqqw",
              id: "UCepUWUpH45hRTi-QePdq1Bg",
              snippet: {
                title: "Mnet TV",
                description:
                  '다양한 음악 예능으로 즐거움을 선사하는\nMnet 음악 버라이어티 공식 채널 "Mnet TV📺"\n\nⓒCJ ENM. Corp ALL RIGHTS RESERVED\n',
                publishedAt: "2013-12-23T04:22:10Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/NLKnIGLdCfPuDOm-VDJWIPsX5Mr8bG9ea9IZ1hgAjHvLF5wR720CGGaUFHRbzQ5Towdb_-iHEio=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/NLKnIGLdCfPuDOm-VDJWIPsX5Mr8bG9ea9IZ1hgAjHvLF5wR720CGGaUFHRbzQ5Towdb_-iHEio=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/NLKnIGLdCfPuDOm-VDJWIPsX5Mr8bG9ea9IZ1hgAjHvLF5wR720CGGaUFHRbzQ5Towdb_-iHEio=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "Mnet TV",
                  description:
                    '다양한 음악 예능으로 즐거움을 선사하는\nMnet 음악 버라이어티 공식 채널 "Mnet TV📺"\n\nⓒCJ ENM. Corp ALL RIGHTS RESERVED\n',
                },
                country: "KR",
              },
              statistics: {
                viewCount: "9936128756",
                subscriberCount: "8620000",
                hiddenSubscriberCount: false,
                videoCount: "19085",
              },
            },
            {
              kind: "youtube#channel",
              etag: "AOz1evPA_nfaICQsnza1nacXfC4",
              id: "UCAmff0euQRf6RwVlbB8PLMw",
              snippet: {
                title: "SBS Radio 에라오",
                description:
                  "📻SBS Radio Official 유튜브 채널 〈에라오〉입니다!\nSBS 라디오 프로그램의 에라오픽, 풀버전, 라이브, 하이라이트 등을 제공합니다.\n\n💙SBS POWER FM ▶ 107.7MHz\n🧡SBS LOVE FM ▶ 103.5MHz\n\n파워FM, 러브FM, 고릴라M 온에어 청취는 기본!\n보는 라디오 재생과 공감로그를 통한 실시간 방송참여까지 한 번에!\n방송 다시듣기, 고릴라팟 팟캐스트 프로그램 다시듣기까지 가능한\n▼ '고릴라' 다운로드 ▼\nhttps://www.sbs.co.kr/radio/gorealra.html\n\n📻Welcome to Korea NO.1 Radio 〈SBS Radio〉 official Youtube channel!\n\n➱SBS Official Website: http://www.sbs.co.kr\n➱SBS Radio Official Website: http://radio.sbs.co.kr\n➱SBS Radio Official instagram: https://www.instagram.com/sbsradio_official\n\nⓒSBS, Corp ALL RIGHTS RESERVED",
                customUrl: "sbsradio에라오",
                publishedAt: "2011-06-21T00:47:54Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTjtDgcwolHeUmdvTl0CwdLozLH4dyxtFkBavyyYQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTjtDgcwolHeUmdvTl0CwdLozLH4dyxtFkBavyyYQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTjtDgcwolHeUmdvTl0CwdLozLH4dyxtFkBavyyYQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "SBS Radio 에라오",
                  description:
                    "📻SBS Radio Official 유튜브 채널 〈에라오〉입니다!\nSBS 라디오 프로그램의 에라오픽, 풀버전, 라이브, 하이라이트 등을 제공합니다.\n\n💙SBS POWER FM ▶ 107.7MHz\n🧡SBS LOVE FM ▶ 103.5MHz\n\n파워FM, 러브FM, 고릴라M 온에어 청취는 기본!\n보는 라디오 재생과 공감로그를 통한 실시간 방송참여까지 한 번에!\n방송 다시듣기, 고릴라팟 팟캐스트 프로그램 다시듣기까지 가능한\n▼ '고릴라' 다운로드 ▼\nhttps://www.sbs.co.kr/radio/gorealra.html\n\n📻Welcome to Korea NO.1 Radio 〈SBS Radio〉 official Youtube channel!\n\n➱SBS Official Website: http://www.sbs.co.kr\n➱SBS Radio Official Website: http://radio.sbs.co.kr\n➱SBS Radio Official instagram: https://www.instagram.com/sbsradio_official\n\nⓒSBS, Corp ALL RIGHTS RESERVED",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "519531143",
                subscriberCount: "983000",
                hiddenSubscriberCount: false,
                videoCount: "16126",
              },
            },
            {
              kind: "youtube#channel",
              etag: "SeJqxSSubvPIM_Zp3BSZUAYV1MY",
              id: "UCi-XI2BIPJmjmp5EbKl6YTQ",
              snippet: {
                title: "기시니 스릴러툰",
                description:
                  "기시니 스릴러툰입니다. \n기타문의  gisini.society@gmail.com\n\n(주)소사이어티\n",
                customUrl: "기시니스릴러툰",
                publishedAt: "2020-02-03T12:58:20.775961Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQWTF4MOCXNe_D4KFoKrTnjA7iC96WtdVN6iYuFOw=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQWTF4MOCXNe_D4KFoKrTnjA7iC96WtdVN6iYuFOw=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQWTF4MOCXNe_D4KFoKrTnjA7iC96WtdVN6iYuFOw=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "기시니 스릴러툰",
                  description:
                    "기시니 스릴러툰입니다. \n기타문의  gisini.society@gmail.com\n\n(주)소사이어티\n",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "78872346",
                subscriberCount: "177000",
                hiddenSubscriberCount: false,
                videoCount: "92",
              },
            },
            {
              kind: "youtube#channel",
              etag: "kL-RQyeuT78yZqD_E2yfqAcNoNc",
              id: "UCbCr1dWFedL5lMcRWthb_bA",
              snippet: {
                title: "모비딕 Mobidic",
                description:
                  "즐거움의 바다 모비딕에 오신 것을 환영합니다!\n구독하고 매일매일 새롭게 올라오는 모비딕의 콘텐츠를 확인하세요!\nWelcome to the official YouTube channel of Mobidic!\nSubscribe to see Mobidic’s latest videos :)\n\n▶모비딕 구독하기/Subscribe \nhttps://goo.gl/v2b6rR\n\nE-Mail : mobidic@sbs.co.kr\n\n[방송 중인 콘텐츠]\n▣모비딕 ▣\nRULE THE NEXT - 수, 금요일 PM 6:30\n제시의 쇼!터뷰 - 목요일 PM 6:30\n\n▶컨텐츠 구매 및 제휴 문의: mobidic@sbs.co.kr\n    Content Purchase and Alliance Inquiry : mobidic@sbs.co.kr",
                customUrl: "mobidic",
                publishedAt: "2016-06-01T05:44:11Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRlrKdPskIzhTXdUK8pcHBrHeO7XXYyksBVV_AmZQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRlrKdPskIzhTXdUK8pcHBrHeO7XXYyksBVV_AmZQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRlrKdPskIzhTXdUK8pcHBrHeO7XXYyksBVV_AmZQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                defaultLanguage: "ko",
                localized: {
                  title: "모비딕 Mobidic",
                  description:
                    "즐거움의 바다 모비딕에 오신 것을 환영합니다!\n구독하고 매일매일 새롭게 올라오는 모비딕의 콘텐츠를 확인하세요!\nWelcome to the official YouTube channel of Mobidic!\nSubscribe to see Mobidic’s latest videos :)\n\n▶모비딕 구독하기/Subscribe \nhttps://goo.gl/v2b6rR\n\nE-Mail : mobidic@sbs.co.kr\n\n[방송 중인 콘텐츠]\n▣모비딕 ▣\nRULE THE NEXT - 수, 금요일 PM 6:30\n제시의 쇼!터뷰 - 목요일 PM 6:30\n\n▶컨텐츠 구매 및 제휴 문의: mobidic@sbs.co.kr\n    Content Purchase and Alliance Inquiry : mobidic@sbs.co.kr",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "351103781",
                subscriberCount: "1160000",
                hiddenSubscriberCount: false,
                videoCount: "1259",
              },
            },
            {
              kind: "youtube#channel",
              etag: "E2Cv8TojFQdosJAo7zB6L3ENijo",
              id: "UCwx6n_4OcLgzAGdty0RWCoA",
              snippet: {
                title: "워크맨-Workman",
                description:
                  "🐜🐜워크맨 인력소 상암점🐜🐜\n\n🔔 NOW On-Air 🔔 \n세상의 모든 JOB을 리뷰한다 [워크맨] 매주 금 오후 6시 \n세상의 모든 기업을 리뷰한다 [워크맨] 기업탐방 격주 수 오후 6시 30분\n\n꿀잼영상 상시대기❤업계 최고 재미 보장❤\n\n✔청소.인력.식당.요리.철거.공장.물류\n✔그 외 모든 job것들 \n✔200% 부려먹기 가능 ❌장난사절❌\n\n☎상세 비즈니스 문의☎  lululala.ad@jtbc.co.kr\n☎제보/출연/제작진 관련 문의☎  workman@jtbc.co.kr\n\n익숙하지만 새로운 즐거움, JTBC 디지털 스튜디오 룰루랄라 (studio lululala)",
                customUrl: "workman",
                publishedAt: "2019-07-11T08:36:22Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRM-p2SRtgbdehp3vmdBMZGJmQegjdlDAuraheN_A=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRM-p2SRtgbdehp3vmdBMZGJmQegjdlDAuraheN_A=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRM-p2SRtgbdehp3vmdBMZGJmQegjdlDAuraheN_A=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "워크맨-Workman",
                  description:
                    "🐜🐜워크맨 인력소 상암점🐜🐜\n\n🔔 NOW On-Air 🔔 \n세상의 모든 JOB을 리뷰한다 [워크맨] 매주 금 오후 6시 \n세상의 모든 기업을 리뷰한다 [워크맨] 기업탐방 격주 수 오후 6시 30분\n\n꿀잼영상 상시대기❤업계 최고 재미 보장❤\n\n✔청소.인력.식당.요리.철거.공장.물류\n✔그 외 모든 job것들 \n✔200% 부려먹기 가능 ❌장난사절❌\n\n☎상세 비즈니스 문의☎  lululala.ad@jtbc.co.kr\n☎제보/출연/제작진 관련 문의☎  workman@jtbc.co.kr\n\n익숙하지만 새로운 즐거움, JTBC 디지털 스튜디오 룰루랄라 (studio lululala)",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "737784862",
                subscriberCount: "3790000",
                hiddenSubscriberCount: false,
                videoCount: "153",
              },
            },
            {
              kind: "youtube#channel",
              etag: "9qog0lcy1oxNRows2PEtMh2XbLY",
              id: "UCtybqqaTj6Nx74Azdz1KrsA",
              snippet: {
                title: "tvN SPORTS",
                description: "",
                publishedAt: "2021-05-25T03:05:06.822097Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/aoNwgC7PHE3vzX7_MNK1slyonN3ie0ukXP_v6phbwWEqHoD5crGz72J12aEf6pKZAeEpGjPGPeo=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/aoNwgC7PHE3vzX7_MNK1slyonN3ie0ukXP_v6phbwWEqHoD5crGz72J12aEf6pKZAeEpGjPGPeo=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/aoNwgC7PHE3vzX7_MNK1slyonN3ie0ukXP_v6phbwWEqHoD5crGz72J12aEf6pKZAeEpGjPGPeo=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "tvN SPORTS",
                  description: "",
                },
              },
              statistics: {
                viewCount: "94061991",
                subscriberCount: "208000",
                hiddenSubscriberCount: false,
                videoCount: "405",
              },
            },
            {
              kind: "youtube#channel",
              etag: "9msszr5P0Y3ouJ3U6q4b7HUj8YI",
              id: "UCY2wHBgv2W30w6lqoLxq99g",
              snippet: {
                title: "소니픽쳐스코리아",
                description:
                  "안녕하세요 한국 소니픽쳐스 코리아의 공식 유튜브 채널입니다.",
                publishedAt: "2012-03-16T08:08:52Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/tS1IVcRrIzPzufDtzt0QEm6m-3HlKADhZOsD-SzmE2BTcLYwkgeKPRMYrljinKqla9WJRfKvQQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/tS1IVcRrIzPzufDtzt0QEm6m-3HlKADhZOsD-SzmE2BTcLYwkgeKPRMYrljinKqla9WJRfKvQQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/tS1IVcRrIzPzufDtzt0QEm6m-3HlKADhZOsD-SzmE2BTcLYwkgeKPRMYrljinKqla9WJRfKvQQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "소니픽쳐스코리아",
                  description:
                    "안녕하세요 한국 소니픽쳐스 코리아의 공식 유튜브 채널입니다.",
                },
                country: "KR",
              },
              statistics: {
                viewCount: "130686513",
                subscriberCount: "52700",
                hiddenSubscriberCount: false,
                videoCount: "719",
              },
            },
          ],
        },
        status: 200,
        statusText: "",
        headers: {
          "cache-control": "private",
          "content-encoding": "gzip",
          "content-length": "6123",
          "content-type": "application/json; charset=UTF-8",
          date: "Sun, 21 Nov 2021 10:17:39 GMT",
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
          url: "https://www.googleapis.com/youtube/v3/channels?part=snippet, statistics&id=UCepUWUpH45hRTi-QePdq1Bg,UCk6bX-MZXdte_7kG8TbMkqg,UCwx6n_4OcLgzAGdty0RWCoA,UCWYzc_p0GgfCepIWDHGFmEg,UC3WZlO2Zl8NE1yIUgtwUtQw,UCq_NshSNZ8pjuNsEr3PJtiw,UCOHM2N1YQdb-cHWxJxwBMLQ,UCtybqqaTj6Nx74Azdz1KrsA,UCQ7X91NIBS174KJT4Id0lnQ,UCbCr1dWFedL5lMcRWthb_bA,UCSknObj2PGGK6KCkTyc5Kkw,UCepUWUpH45hRTi-QePdq1Bg,UCY2wHBgv2W30w6lqoLxq99g,UCAmff0euQRf6RwVlbB8PLMw,UCoJQwxLJ_tRte5F3DK27FZw,UCYDmx2Sfpnaxg488yBpZIGg,UCi-XI2BIPJmjmp5EbKl6YTQ,UCBhR7WKMD50cxkTJ5CNaUGA,UCepUWUpH45hRTi-QePdq1Bg,UCJoRpVvenLpRav3UFg4Yyiw&key=AIzaSyCnSYEgItutcgRmMnwnH-AXh3LdQ3Nbzrw",
        },
        request: {},
      };
      return channelData.data.items;
    };

    getData().then((result) => {
      // setItems(result.items);
      // console.log(result.items);
      setItems(result);
      getChannelData(result).then((channelData) => {
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
          setIsLoading(false);
          return table;
        });
      });
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
        // setIsScrollBottom(true);
      } else {
        // setIsScrollBottom(false);
      }
    };
    window.addEventListener("scroll", handlerScrollEvent);

    return window.removeEventListener("scroll", handlerScrollEvent);
  }, []);

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
              <Link
                to={`/watch?v=${item.id}`}
                state={{
                  title: item.snippet.title,
                  channelTitle: item.snippet.channelTitle,
                  channelIconUrl:
                    channelItemsState[item.snippet.channelId].thumbnails.default
                      .url,
                  // thumbnails : item.snippet.
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
