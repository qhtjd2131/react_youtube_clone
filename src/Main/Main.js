import React, { useEffect, useState, useContext, createRef } from "react";
import YouTube from "react-youtube";
import "./Main.scss";
import axios from "axios";
import FilterBar from "./FilterBar";
import { SideBarContext, themeStateContext, searchTextContext } from "../App";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsState, setItems] = useState([]);
  const [channelItemsState, setChannelItems] = useState([]);
  const [isScrollBottom, setIsScrollBottom] = useState(false);

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
    const url_mostPopular = `https://www.googleapis.com/youtube/v3/videos?part=${option.part}&chart=${option.chart}&maxResults=${option.maxResults}&regionCode=${option.regionCode}&key=${option.apiKey}`;

    const getData = async () => {
      // const result = await axios.get(url_mostPopular);
      // return result.data.items;
      return await new Promise((resolve) =>
        setTimeout(() => {
          const result = [
            {
              kind: "youtube#video",
              etag: "2x3wtoOgHNvGzg_FqufWLwCq8RE",
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
            },
            {
              kind: "youtube#video",
              etag: "-xm3E7Oc3IdabWeGMwQqg4BAcU4",
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
            },
            {
              kind: "youtube#video",
              etag: "A3LgniiCDkjOSZ5ZkVt9mTSYRbA",
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
              etag: "hO4qTZuTPpogat71OGKMZ-yQTlE",
              id: "WbA74l8gH7s",
              snippet: {
                publishedAt: "2021-11-18T08:09:11Z",
                channelId: "UCUyfkq9e9ZfPzxOW5WQ9rzQ",
                title:
                  "(ENG) 1️⃣ 강약조절 오지는 리정 춤사위에 스우파 리더들 다 박수치고 난리 남ㅋㅋㅋㅋ 막내 재롱에 흥나버린 부장님들 같음ㅋㅋㅋㅋ / [문명특급 EP.222-1]",
                description:
                  "스우파 아기 고양이들랑 교수님들 모여서\n샤워할 때 어떻게 춤 추는지 알려줬는데...\n(더보기)\n\n#스우파 #모니카 #아이키 #노제 #리정\n\n기획/하현종  진행/이은재  구성/이은재 이규희  촬영/김지연 안예나 문소라 박보라 신영아  동시녹음/소리를 그리다  브랜드디자인/김하경  CG/김하경 김한솔  담당인턴/박현홍 이다솜 류서현 임미나  행정/박미림  마케팅/김유진  자막/원이진  조연출 ·편집/오한주 김혜민  연출/홍민지  제작/SBS디지털뉴스랩 크리에이티브 사업부문",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/WbA74l8gH7s/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/WbA74l8gH7s/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/WbA74l8gH7s/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/WbA74l8gH7s/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/WbA74l8gH7s/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "문명특급 - MMTG",
                tags: [
                  "문명특급",
                  "스브스뉴스",
                  "재재",
                  "SBS",
                  "문특",
                  "mmtg",
                  "스우파",
                  "스트릿우먼파이터",
                  "리정",
                  "모니카",
                  "아이키",
                  "노제",
                  "noze",
                  "aiki",
                  "monika",
                  "leejung",
                  "swf",
                  "streetwomanfighter",
                ],
                categoryId: "24",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "(ENG) 1️⃣ 강약조절 오지는 리정 춤사위에 스우파 리더들 다 박수치고 난리 남ㅋㅋㅋㅋ 막내 재롱에 흥나버린 부장님들 같음ㅋㅋㅋㅋ / [문명특급 EP.222-1]",
                  description:
                    "스우파 아기 고양이들랑 교수님들 모여서\n샤워할 때 어떻게 춤 추는지 알려줬는데...\n(더보기)\n\n#스우파 #모니카 #아이키 #노제 #리정\n\n기획/하현종  진행/이은재  구성/이은재 이규희  촬영/김지연 안예나 문소라 박보라 신영아  동시녹음/소리를 그리다  브랜드디자인/김하경  CG/김하경 김한솔  담당인턴/박현홍 이다솜 류서현 임미나  행정/박미림  마케팅/김유진  자막/원이진  조연출 ·편집/오한주 김혜민  연출/홍민지  제작/SBS디지털뉴스랩 크리에이티브 사업부문",
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "SXLXNuTSflqG9L098MnCMBJqpyw",
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
            },
            {
              kind: "youtube#video",
              etag: "en58WhqdaOOx6FVK4Mbg_W9YyJQ",
              id: "xqqyiQspiLs",
              snippet: {
                publishedAt: "2021-11-18T08:43:06Z",
                channelId: "UCUyfkq9e9ZfPzxOW5WQ9rzQ",
                title:
                  "(ENG) 2️⃣ 전국민이 다 춘 헤이마마 춤, 이 정도면 노제 씨 한강뷰 아파트 한 채는 마련하셨겠지? (순수한 궁금증) / [문명특급 EP.221-2]",
                description:
                  "솔직히 스우파 헤이마마 정도로 히트했으면\n아파트 한 채 이미 지었어야 하는 거 아닌가?(혼자만의 생각)\n저희는 그래서 안무 저작권에 대해 알아봤습니다.(진지)\n\n#스우파 #모니카 #아이키 #노제 #리정\n\n기획/하현종  진행/이은재  구성/이은재 이규희  촬영/김지연 안예나 문소라 박보라 신영아  동시녹음/소리를 그리다  브랜드디자인/김하경  CG/김하경 김한솔  담당인턴/박현홍 이다솜 류서현 임미나  행정/박미림  마케팅/김유진  자막/원이진  조연출 ·편집/오한주 김혜민  연출/홍민지  제작/SBS디지털뉴스랩 크리에이티브 사업부문",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/xqqyiQspiLs/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/xqqyiQspiLs/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/xqqyiQspiLs/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/xqqyiQspiLs/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/xqqyiQspiLs/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "문명특급 - MMTG",
                tags: [
                  "문명특급",
                  "스브스뉴스",
                  "재재",
                  "SBS",
                  "문특",
                  "mmtg",
                  "스우파",
                  "스트릿우먼파이터",
                  "노제",
                  "리정",
                  "아이키",
                  "모니카",
                  "noze",
                  "leejung",
                  "aiki",
                  "monika",
                  "swf",
                  "streetwomanfighter",
                ],
                categoryId: "24",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "(ENG) 2️⃣ 전국민이 다 춘 헤이마마 춤, 이 정도면 노제 씨 한강뷰 아파트 한 채는 마련하셨겠지? (순수한 궁금증) / [문명특급 EP.221-2]",
                  description:
                    "솔직히 스우파 헤이마마 정도로 히트했으면\n아파트 한 채 이미 지었어야 하는 거 아닌가?(혼자만의 생각)\n저희는 그래서 안무 저작권에 대해 알아봤습니다.(진지)\n\n#스우파 #모니카 #아이키 #노제 #리정\n\n기획/하현종  진행/이은재  구성/이은재 이규희  촬영/김지연 안예나 문소라 박보라 신영아  동시녹음/소리를 그리다  브랜드디자인/김하경  CG/김하경 김한솔  담당인턴/박현홍 이다솜 류서현 임미나  행정/박미림  마케팅/김유진  자막/원이진  조연출 ·편집/오한주 김혜민  연출/홍민지  제작/SBS디지털뉴스랩 크리에이티브 사업부문",
                },
                defaultAudioLanguage: "ko",
              },
            },
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
              etag: "orG3yLAmUiZZTr_vh2H-qT8_3kc",
              id: "i1SNdd3zVns",
              snippet: {
                publishedAt: "2021-11-17T10:20:27Z",
                channelId: "UCbFzvzDu17eDZ3RIeaLRswQ",
                title: "감스트x저스디스 드디어 만났습니다!!",
                description:
                  "[2021.11.10] 촬영영상 입니다.\n\n♥ GAMST YouTube channel subscribe please ♥\n\nGAMST YouTube https://goo.gl/i1A0oN\nGAMST Facebook http://facebook.com/gamst0108\nGAMST Instagram http://Instagram.com/gamst17172\nGAMST TV http://afreeca.com/devil0108\nGAMST TV watch live http://play.afreeca.com/devil0108\n\nCOPYRIGHTS ⓒ 2015 BY GAMST. ALL RIGHTS RESERVED.\n\n🎵Music provided by 브금대통령\n🎵Track : 백수의 하루 - https://youtu.be/H62OF6OVeHQ\n\n🎵Music provided by 브금대통령\n🎵Track : Kid's Room - https://youtu.be/e4w3WzWeFbg\n\n🎵Music provided by 브금대통령\n🎵Track : 조별과제 - https://youtu.be/wLuWmPrJkSk\n\n🎵Music provided by 브금대통령\n🎵Track : 웃기고있네 - https://youtu.be/aY7VLF71pNM\n\n🎵Music provided by 브금대통령\n🎵Track : 동전 굴리기 - https://youtu.be/JW7mi6fiGbw\n\n🎵Music provided by 브금대통령\n🎵Track : 쳇바퀴 인생 - https://youtu.be/jpo3kYQpTZs\n\n🎵Music provided by 브금대통령\n🎵Track : Confusing Road - https://youtu.be/ydPppyQQdPc\n\n🎵Music provided by 브금대통령\n🎵Track : Thank you - https://youtu.be/wWt5e7oxgGY\n\n🎵Music provided by 브금대통령\n🎵Track : Spring Step - https://youtu.be/PvvaZaaHAm8",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/i1SNdd3zVns/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/i1SNdd3zVns/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/i1SNdd3zVns/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/i1SNdd3zVns/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/i1SNdd3zVns/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "감스트GAMST",
                tags: [
                  "아프리카티비",
                  "아프리카tv",
                  "afreecatv",
                  "broadcast",
                  "감스트",
                  "비제이",
                  "김인직",
                  "인직",
                  "방송",
                  "bj",
                  "감튜브",
                  "콘텐츠",
                  "컨텐츠",
                  "비감",
                  "contents",
                  "gamst",
                  "injik",
                  "kiminjik",
                  "gamtube",
                  "bgam",
                ],
                categoryId: "22",
                liveBroadcastContent: "none",
                localized: {
                  title: "감스트x저스디스 드디어 만났습니다!!",
                  description:
                    "[2021.11.10] 촬영영상 입니다.\n\n♥ GAMST YouTube channel subscribe please ♥\n\nGAMST YouTube https://goo.gl/i1A0oN\nGAMST Facebook http://facebook.com/gamst0108\nGAMST Instagram http://Instagram.com/gamst17172\nGAMST TV http://afreeca.com/devil0108\nGAMST TV watch live http://play.afreeca.com/devil0108\n\nCOPYRIGHTS ⓒ 2015 BY GAMST. ALL RIGHTS RESERVED.\n\n🎵Music provided by 브금대통령\n🎵Track : 백수의 하루 - https://youtu.be/H62OF6OVeHQ\n\n🎵Music provided by 브금대통령\n🎵Track : Kid's Room - https://youtu.be/e4w3WzWeFbg\n\n🎵Music provided by 브금대통령\n🎵Track : 조별과제 - https://youtu.be/wLuWmPrJkSk\n\n🎵Music provided by 브금대통령\n🎵Track : 웃기고있네 - https://youtu.be/aY7VLF71pNM\n\n🎵Music provided by 브금대통령\n🎵Track : 동전 굴리기 - https://youtu.be/JW7mi6fiGbw\n\n🎵Music provided by 브금대통령\n🎵Track : 쳇바퀴 인생 - https://youtu.be/jpo3kYQpTZs\n\n🎵Music provided by 브금대통령\n🎵Track : Confusing Road - https://youtu.be/ydPppyQQdPc\n\n🎵Music provided by 브금대통령\n🎵Track : Thank you - https://youtu.be/wWt5e7oxgGY\n\n🎵Music provided by 브금대통령\n🎵Track : Spring Step - https://youtu.be/PvvaZaaHAm8",
                },
                defaultAudioLanguage: "ko",
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
              etag: "NPKk5xHZjEcx9sBH0CDi6kuCOpo",
              id: "Zcql_LF526s",
              snippet: {
                publishedAt: "2021-11-17T09:13:21Z",
                channelId: "UCRuSxVu4iqTK5kCh90ntAgA",
                title:
                  "대답 없는 친구 & 공포의 혼숨 & 중딩 동창의 페메 [총몇명의 사연낭독]",
                description:
                  "시청해주셔서 감사드립니다..\n\n[총몇명 스튜디오]\n총감독 : 총몇명 / 작화감독 : Move혁 / 스토리보드 : YES진 / 작화 : 노독자 / 편집 : 원해 / 배경 : 돼곰 / 기획 : 총몇명, Belli, 센 / 사운드 : 총몇명, 조예지 / 매니징 : Jin",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Zcql_LF526s/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Zcql_LF526s/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Zcql_LF526s/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/Zcql_LF526s/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/Zcql_LF526s/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "총몇명",
                tags: [
                  "총몇명",
                  "무서운 이야기",
                  "공포만화",
                  "ㅋㅋㅋ",
                  "귀신",
                  "호러",
                ],
                categoryId: "1",
                liveBroadcastContent: "none",
                defaultLanguage: "ko",
                localized: {
                  title:
                    "대답 없는 친구 & 공포의 혼숨 & 중딩 동창의 페메 [총몇명의 사연낭독]",
                  description:
                    "시청해주셔서 감사드립니다..\n\n[총몇명 스튜디오]\n총감독 : 총몇명 / 작화감독 : Move혁 / 스토리보드 : YES진 / 작화 : 노독자 / 편집 : 원해 / 배경 : 돼곰 / 기획 : 총몇명, Belli, 센 / 사운드 : 총몇명, 조예지 / 매니징 : Jin",
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "nKX1q6aC-ORX8kfz_C43HuDa_2Y",
              id: "U4RB7f_b224",
              snippet: {
                publishedAt: "2021-11-18T03:00:10Z",
                channelId: "UCpH3rUuBQH9CkjXRumRWZIQ",
                title: "임영웅 2022 시즌 그리팅 컨셉 트레일러 #2",
                description:
                  "임영웅 2022 Season’s greetings concept Trailer #2\n\n*임영웅 2022 시즌 그리팅 온라인 판매처\nhttps://linktr.ee/limyoungwoongmd\n\n#임영웅 #시즌그리팅 #Shorts",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/U4RB7f_b224/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/U4RB7f_b224/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/U4RB7f_b224/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "임영웅 Shorts",
                categoryId: "22",
                liveBroadcastContent: "none",
                localized: {
                  title: "임영웅 2022 시즌 그리팅 컨셉 트레일러 #2",
                  description:
                    "임영웅 2022 Season’s greetings concept Trailer #2\n\n*임영웅 2022 시즌 그리팅 온라인 판매처\nhttps://linktr.ee/limyoungwoongmd\n\n#임영웅 #시즌그리팅 #Shorts",
                },
                defaultAudioLanguage: "zxx",
              },
            },
            {
              kind: "youtube#video",
              etag: "L1YMWjw5vSAZDX-hXgKPJnlE-h0",
              id: "7slPDYWbb0c",
              snippet: {
                publishedAt: "2021-11-18T04:00:05Z",
                channelId: "UC2tbZfs11e-5MND58_jfDCA",
                title: "시집오고 처음하는 김장ㅋㅋㅋㅋ이백포기ㅋㅋㅋ",
                description:
                  "#순자엄마 #몰카 #시트콤\n\n좋아요 & 구독 꾹꾹 \n순자네 시트콤 봐주셔서 감사합니다🧡\n\n쫑구인스타 - jongwon365a\n순자엄마인스타 - sunjaeomma9\n며느리유라인스타 - yoora_k\n[ 문의 ]\nbusiness@momofactory.co.kr",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/7slPDYWbb0c/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/7slPDYWbb0c/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/7slPDYWbb0c/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/7slPDYWbb0c/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/7slPDYWbb0c/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "순자엄마",
                tags: [
                  "순자엄마",
                  "순자",
                  "조졌네",
                  "순자엄자",
                  "먹방",
                  "에이에스엠알",
                  "에이에스엘암",
                  "ASMR",
                  "AS엘암",
                  "시골",
                  "음식",
                  "시골음식",
                  "시골요리",
                  "시골먹방",
                  "부부",
                  "박막례",
                  "시골반찬",
                  "시골밥",
                  "집반찬",
                  "밑반찬",
                  "자취",
                  "자취요리",
                  "한국식",
                  "가정식",
                  "가정식백반",
                  "집밥",
                  "한국 가정식",
                  "korea home food",
                  "k-food",
                  "k food",
                  "mukbang",
                  "eating",
                  "몰카",
                  "몰래카메라",
                  "가족시트콤",
                  "시트콤",
                  "가족몰카",
                  "엄마몰카",
                  "아빠몰카",
                  "부부생활",
                  "부부싸움",
                  "결혼생활",
                  "남편몰카",
                  "시부모님",
                  "시월드",
                  "시집",
                  "시집생활",
                  "시어머니",
                  "시아버지",
                  "고부",
                  "며느리",
                  "고부갈등",
                  "김장",
                  "김치",
                ],
                categoryId: "22",
                liveBroadcastContent: "none",
                localized: {
                  title: "시집오고 처음하는 김장ㅋㅋㅋㅋ이백포기ㅋㅋㅋ",
                  description:
                    "#순자엄마 #몰카 #시트콤\n\n좋아요 & 구독 꾹꾹 \n순자네 시트콤 봐주셔서 감사합니다🧡\n\n쫑구인스타 - jongwon365a\n순자엄마인스타 - sunjaeomma9\n며느리유라인스타 - yoora_k\n[ 문의 ]\nbusiness@momofactory.co.kr",
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "6Uv5WZgvI3DMDAVhDv4S5a0LsyE",
              id: "vr1ReT0RR7k",
              snippet: {
                publishedAt: "2021-11-17T11:55:03Z",
                channelId: "UCj3_t5p4L4aFsvdW3uHjnnw",
                title:
                  '"판사님 뭐 하시냐…XX 진짜"…한서희, 법정구속에 욕설 / 연합뉴스 (Yonhapnews)',
                description:
                  '"판사님 뭐 하시냐…XX 진짜"…한서희, 법정구속에 욕설\n    (서울=연합뉴스) 보호관찰소에서 풀려난 뒤 집행유예 기간 마약을 투여한 혐의로 불구속기소 된 가수 연습생 출신 한서희씨가 결국 구속됐습니다.\n    17일 수원지법 성남지원 형사1단독 이인수 판사는 한씨에게 징역 1년 6월을 선고하고 법정 구속했습니다.\n    한씨는 법정 구속 과정에서 "하고 싶은 말이 있냐"는 판사의 질문에 "도망 안 갈 거다. 판사님 지금 뭐 하시는 거냐"며 거칠게 항의하기도 했는데요.\n    그는 또 피고인 대기실로 이동하며 \'xx 진짜\'라고 욕설을 해 가까운 거리의 방청객은 이를 듣기도 한 것으로 알려졌습니다.\n    한씨는 집행유예 기간인 지난해 6월 초 경기 광주시 불상의 장소에서 필로폰을 투약한 혐의로 기소됐습니다.\n    앞서 한씨는 대마를 흡연한 혐의(마약류관리에 관한 법률 위반)로 기소돼 지난 2017년 9월, 징역 3년에 집행유예 4년 판결이 확정된 바 있습니다. \n    영상으로 보시죠.\n\n    제작: 김건태·남궁정균\n    영상: 연합뉴스TV\n\n#연합뉴스 #마약 #판사 #욕설\n\n◆ 연합뉴스 유튜브  : https://www.youtube.com/yonhap\n◆ 연합뉴스 홈페이지→ http://www.yna.co.kr/\n◆ 연합뉴스 페이스북→ https://www.facebook.com/yonhap/\n◆ 연합뉴스 인스타 : https://goo.gl/UbqiQb\n\n◆ 연합뉴스 비디오메타 채널https://www.youtube.com/channel/UCTMCrbtHU0M0SR6TuBrL4Pw',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/vr1ReT0RR7k/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/vr1ReT0RR7k/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/vr1ReT0RR7k/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/vr1ReT0RR7k/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/vr1ReT0RR7k/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "연합뉴스 Yonhapnews",
                tags: [
                  "연합뉴스",
                  "yonhapnews",
                  "뉴스",
                  "영상",
                  "이슈",
                  "디지털",
                  "news",
                  "화제",
                  "마약",
                  "판사",
                  "법정",
                  "한서희",
                  "연예인",
                  "보호관찰소",
                  "집행유예",
                  "불구속기소",
                  "구속",
                ],
                categoryId: "25",
                liveBroadcastContent: "none",
                defaultLanguage: "ko",
                localized: {
                  title:
                    '"판사님 뭐 하시냐…XX 진짜"…한서희, 법정구속에 욕설 / 연합뉴스 (Yonhapnews)',
                  description:
                    '"판사님 뭐 하시냐…XX 진짜"…한서희, 법정구속에 욕설\n    (서울=연합뉴스) 보호관찰소에서 풀려난 뒤 집행유예 기간 마약을 투여한 혐의로 불구속기소 된 가수 연습생 출신 한서희씨가 결국 구속됐습니다.\n    17일 수원지법 성남지원 형사1단독 이인수 판사는 한씨에게 징역 1년 6월을 선고하고 법정 구속했습니다.\n    한씨는 법정 구속 과정에서 "하고 싶은 말이 있냐"는 판사의 질문에 "도망 안 갈 거다. 판사님 지금 뭐 하시는 거냐"며 거칠게 항의하기도 했는데요.\n    그는 또 피고인 대기실로 이동하며 \'xx 진짜\'라고 욕설을 해 가까운 거리의 방청객은 이를 듣기도 한 것으로 알려졌습니다.\n    한씨는 집행유예 기간인 지난해 6월 초 경기 광주시 불상의 장소에서 필로폰을 투약한 혐의로 기소됐습니다.\n    앞서 한씨는 대마를 흡연한 혐의(마약류관리에 관한 법률 위반)로 기소돼 지난 2017년 9월, 징역 3년에 집행유예 4년 판결이 확정된 바 있습니다. \n    영상으로 보시죠.\n\n    제작: 김건태·남궁정균\n    영상: 연합뉴스TV\n\n#연합뉴스 #마약 #판사 #욕설\n\n◆ 연합뉴스 유튜브  : https://www.youtube.com/yonhap\n◆ 연합뉴스 홈페이지→ http://www.yna.co.kr/\n◆ 연합뉴스 페이스북→ https://www.facebook.com/yonhap/\n◆ 연합뉴스 인스타 : https://goo.gl/UbqiQb\n\n◆ 연합뉴스 비디오메타 채널https://www.youtube.com/channel/UCTMCrbtHU0M0SR6TuBrL4Pw',
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "2F5r5KRkeM9aRXVh65FyzVgSHOs",
              id: "b3Wqjqv0yVU",
              snippet: {
                publishedAt: "2021-11-18T03:00:21Z",
                channelId: "UC4hNKDlFO3I9_KZzgESyQYw",
                title: "이승환+선우정아 “어쩜” Official MV feat. 노제, 옹성우",
                description:
                  "이승환(LEE SEUNG HWAN) + 선우정아(SUNWOOJUNGA)\nOfficial M/V feat. 노제, 옹성우\n\n#이승환 #선우정아 #어쩜 #노제 #옹성우",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/b3Wqjqv0yVU/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/b3Wqjqv0yVU/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/b3Wqjqv0yVU/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/b3Wqjqv0yVU/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/b3Wqjqv0yVU/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "dreamfactoryclub",
                tags: ["이승환", "선우정아", "노제", "옹성우", "어쩜"],
                categoryId: "10",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "이승환+선우정아 “어쩜” Official MV feat. 노제, 옹성우",
                  description:
                    "이승환(LEE SEUNG HWAN) + 선우정아(SUNWOOJUNGA)\nOfficial M/V feat. 노제, 옹성우\n\n#이승환 #선우정아 #어쩜 #노제 #옹성우",
                },
              },
            },
            {
              kind: "youtube#video",
              etag: "x6riooxyCldM6EB-RQ7O47BZzow",
              id: "05un-yeeQ4I",
              snippet: {
                publishedAt: "2021-11-17T09:00:01Z",
                channelId: "UCweOkPb1wVVH0Q0Tlj4a5Pw",
                title:
                  "[MV] JEONG DONG WON(정동원) _ Goodbye My Love(잘가요 내사랑)",
                description:
                  '[MV] JEONG DONG WON(정동원) _ Goodbye My Love(잘가요 내사랑)\n\n\n\nK-POP Wonderland, 1theK\n\nK-POP의 모든 즐거움을 1theK(원더케이)에서 만나보세요! :)\nWelcome to the official YouTube channel of K-POP Wonderland, 1theK\n\n""1theK Originals"" Subscribe 👉 https://www.youtube.com/1theKOriginals\n\n[Notice] 1theK YouTube is also an official channel for the MV, and music shows will count the views from this channel too.\n[공지] 1theK YouTube는 MV를 유통하는 공식 채널로, 1theK에 업로드된 MV 조회수 또한 음악방송 순위에 반영됩니다.\n\n#NEWRELEASE#MV#1theK#원더케이\n\n▶1theK YT : https://www.youtube.com/1theK\n▶1theK FB  : http://www.facebook.com/1theK\n▶1theK TW : https://twitter.com/1theK\n▶1theK Kakao : https://goo.gl/otRpZc\n▶1theK TikTok : https://vt.tiktok.com/2mSMBS"',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/05un-yeeQ4I/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/05un-yeeQ4I/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/05un-yeeQ4I/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/05un-yeeQ4I/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/05un-yeeQ4I/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "1theK (원더케이)",
                tags: [
                  "K-POP",
                  "Kpop",
                  "1theK",
                  "원더케이",
                  "Original",
                  "1theK Original",
                  "TOP100",
                  "idol",
                  "아이돌",
                  "라이브",
                  "LIVE",
                  "멜론",
                  "원더케이 오리지널",
                  "음악",
                  "JEONG DONG WON",
                  "정동원",
                  "Goodbye My Love",
                  "잘가요 내사랑",
                ],
                categoryId: "24",
                liveBroadcastContent: "none",
                defaultLanguage: "en",
                localized: {
                  title:
                    "[MV] JEONG DONG WON(정동원) _ Goodbye My Love(잘가요 내사랑)",
                  description:
                    '[MV] JEONG DONG WON(정동원) _ Goodbye My Love(잘가요 내사랑)\n\n\n\nK-POP Wonderland, 1theK\n\nK-POP의 모든 즐거움을 1theK(원더케이)에서 만나보세요! :)\nWelcome to the official YouTube channel of K-POP Wonderland, 1theK\n\n""1theK Originals"" Subscribe 👉 https://www.youtube.com/1theKOriginals\n\n[Notice] 1theK YouTube is also an official channel for the MV, and music shows will count the views from this channel too.\n[공지] 1theK YouTube는 MV를 유통하는 공식 채널로, 1theK에 업로드된 MV 조회수 또한 음악방송 순위에 반영됩니다.\n\n#NEWRELEASE#MV#1theK#원더케이\n\n▶1theK YT : https://www.youtube.com/1theK\n▶1theK FB  : http://www.facebook.com/1theK\n▶1theK TW : https://twitter.com/1theK\n▶1theK Kakao : https://goo.gl/otRpZc\n▶1theK TikTok : https://vt.tiktok.com/2mSMBS"',
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "fM-7_SfjB0flSnnrdqRihsgnvqc",
              id: "Mh-ip0PxJK0",
              snippet: {
                publishedAt: "2021-11-17T09:26:44Z",
                channelId: "UCIG4gr_wIy5CIlcFciUbIQw",
                title: "어린데 스포츠카 타는 사람들은 뭐하는 사람들일까?",
                description:
                  "도로에 보이는 스포츠카\n타고있는 사람은 굉장히 젊을때가 있는데\n이런 사람들은 뭐하는 사람들일까?\n제가 한번 조사해 봤습니다\n\n\n편집 : 이재혁\n기획 : 신연지",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Mh-ip0PxJK0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Mh-ip0PxJK0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Mh-ip0PxJK0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/Mh-ip0PxJK0/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/Mh-ip0PxJK0/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "진용진",
                categoryId: "22",
                liveBroadcastContent: "none",
                localized: {
                  title: "어린데 스포츠카 타는 사람들은 뭐하는 사람들일까?",
                  description:
                    "도로에 보이는 스포츠카\n타고있는 사람은 굉장히 젊을때가 있는데\n이런 사람들은 뭐하는 사람들일까?\n제가 한번 조사해 봤습니다\n\n\n편집 : 이재혁\n기획 : 신연지",
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "v2W_E2hZ5BDT8KnQWIExhYSwMAY",
              id: "ianaxGa-Kmg",
              snippet: {
                publishedAt: "2021-11-14T04:12:16Z",
                channelId: "UCBLO7HA_4Kw-sp8WLed2WrA",
                title: "문워크 하는 법 tutorial | How to Moonwalk",
                description:
                  "그동안 요청해주신 댓글이 많아서 부족하지만 간단하게 문워크 하는 방법 \n튜토리얼 영상을 만들어 보았습니다 :)\n1번 발끝을 세우고 2번 반대쪽 발을 쭉 뒤로 밀어준다 3번 발을 교차시킨다\n의 반복입니다! 조금 더 연습해서 나중에 또 좋은 영상 만들어보겠습니다\n감사합니다! ^^",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/ianaxGa-Kmg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/ianaxGa-Kmg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/ianaxGa-Kmg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/ianaxGa-Kmg/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/ianaxGa-Kmg/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "세진 SEJIN",
                tags: [
                  "문워크하는법",
                  "문워크하는방법",
                  "문워크튜토리얼",
                  "문워크강의",
                  "댄스튜토리얼",
                  "문워크",
                  "메타버스세진",
                  "세진댄스",
                  "SEJIN DANCE",
                  "MOONWALK TUTORIAL",
                  "How to Moonwalk",
                  "MOONWALK DANCE",
                  "MOONWALK",
                ],
                categoryId: "24",
                liveBroadcastContent: "none",
                localized: {
                  title: "문워크 하는 법 tutorial | How to Moonwalk",
                  description:
                    "그동안 요청해주신 댓글이 많아서 부족하지만 간단하게 문워크 하는 방법 \n튜토리얼 영상을 만들어 보았습니다 :)\n1번 발끝을 세우고 2번 반대쪽 발을 쭉 뒤로 밀어준다 3번 발을 교차시킨다\n의 반복입니다! 조금 더 연습해서 나중에 또 좋은 영상 만들어보겠습니다\n감사합니다! ^^",
                },
              },
            },
            {
              kind: "youtube#video",
              etag: "8fUQyUQ4xKjRjL3GRN8ybO6YYBo",
              id: "tMtxOnCxifc",
              snippet: {
                publishedAt: "2021-11-18T05:16:02Z",
                channelId: "UC-iJgiHZ0joj2cQWpszkqPw",
                title: "팽이버섯 예술",
                description: "#shorts #팽이버섯 #예술",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/tMtxOnCxifc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/tMtxOnCxifc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/tMtxOnCxifc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/tMtxOnCxifc/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/tMtxOnCxifc/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "조선남자 대길이 Chef in Joseon",
                categoryId: "24",
                liveBroadcastContent: "none",
                localized: {
                  title: "팽이버섯 예술",
                  description: "#shorts #팽이버섯 #예술",
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "QoRXTs8xmeWngz-81iwashRl2S0",
              id: "3mg7IZl6cBw",
              snippet: {
                publishedAt: "2021-11-17T06:08:27Z",
                channelId: "UC31-nUU7jhm3I5DCYh6uLBA",
                title:
                  "직장 관두고 바다로 귀어해 낚시로 매출 월1000만원 선장님",
                description:
                  "#휴먼스토리 #상어 #제주도\n\n▶출연문의 contact us\nkoreahooning@gmail.com\n\n▶휴먼스토리 멤버십 가입 humanstory membership\nhttps://www.youtube.com/channel/UC31-nUU7jhm3I5DCYh6uLBA/join\n\n▶휴먼스토리 공식카페 hunamstory official website\nhttps://cafe.naver.com/humanstoryofficial\n\n▶휴먼스토리 인스타그램 humanstory instagram\nhttps://www.instagram.com/youtubehumanstory/\n\n\n✔time stamp\n00:23 사장님 지금 잡고계신 물고기가 어떤 거예요? \n00:34 지금 사장님이 (꾀저립)물으신 거예요 이게? \n00:40 줄을 끊어먹은 거예요? \n00:50 오 왔다 여기 꾀저립 왔어요 꾀저립 \n01:12 이게 지금 (낚시)줄이 끌려 나가는 거잖아요 \n01:33 지금 현재 예상되는 물고기 이름이 어떤 건가요?  \n01:38 이게 아까 그 전설의 물고기라고 했던 거예요? \n01:47 (꾀저립) 사이즈가 어느 정도 될까요? \n02:03 이게 지금 (줄이) 끌려가는 건가요 사장님? \n02:28 지금 몇분째 잡고 계신 거예요? \n02:31 선장님 배 어부 생활하신지는 얼마나 되신 거예요? \n02:43 이거 확률이 어느정도 되는 거예요? \n02:55 그러니까 이 꾀저립이라는게 원래 제주도에서 나오는 어종이 아닌거죠? \n03:08 선장님 지금 여태 어부생활 8년 하시면서 가장 큰 물고기 잡은게 몇 센티미터 인가요? \n03:18 훨씬 큰 거예요? \n03:22 가격은 어느정도 할까요? \n03:30 참치요? 참치가 보통 몇미터 정도 되죠? \n03:46 오 (물고기) 방향이 바뀌었네요 또? \n04:11 (낚시대에) 달려 있는 점다랑어는 어떤 건가요? \n04:20 미끼는 위로 쭉 딸려온 상태네요? 실에다가? \n04:30 1M 50cm 잡는데는 몇분 걸리셨어요? \n04:38 사장님 실례지만 지금 소개 안했는데 소개 한 번 간단하게 해주세요 \n05:21 사장님 왜 갑자기 뱃머리로 오셨어요? \n05:38 사장님 지금 몇 분째 잡고 계신 거예요?  \n06:02 방금 떨어질뻔 하셨어요 아이고 \n06:06손님) 혹시 이게 그 무슨혹등고래나 이런거 아닐런지는 모르죠 이거?\n06:17 몇미터 남았다고요? \n06:27 아 물고기가 또 도네요 \n06:45 상어일 수도 있는 건가요 고래나? \n06:53 근데 진짜 상어일수도 있는 거예요? \n07:12 선원) 이걸 손으로 당기면 안돼요?\n07:26 지금 여기 파이팅 벨트를 채워놔서 물고기 잡는 벨트라고 합니다 아이고 \n07:42 지금 이렇게 오래 걸리는 걸로 봐서는 상어일 확률이 높나요 꾀저립일 확률이 높나요? \n08:01큰일났다 아 이거 안풀리는데 이거 큰일났다\n08:39 이 물고기를 위해서 선장님 손을 받칠 준비가 돼있는 건가요 지금? \n08:55 몇프로의 확률로 상어인가요? \n09:04 너무 큰 상어 인데요? \n09:13 꾀저립이 아니라 상어가 지금 잡힌 거 같습니다 \n09:20 혹시 상어는 팔면 가격이 어느정도 하는 건가요? \n09:36 와 이렇게 큰 상어를 \n10:01선장님) (배 위로) 못 올려요 못 올려\n10:18 사장님 지금 포기하신 건가요? \n10:55 프로펠러에 지금 (상어가) 걸려서 지금 어떻게 하려고 하시는 건가요 이걸로? \n11:27 지금 상어 엄청나게 큽니다 여러분 \n11:47 지금 이제 끌고 가도 되는건가요 저렇게? \n11:56 선장님도 이렇게 어부 생활하시면서 \n12:04 선장님이 잡으신 것 중에 제일 큰 상어에요? \n12:37 이렇게 큰 상어 잡아보셨는데 기분이 어떠신가요? \n12:54 그리고 제가 여기 하효동 어촌계 소속인데\n13:15 어촌주민) 이번에 마라도에서 상어 해녀들 물질 들어가서 상어떼 나타나니까\n13:56 지금 이제 배 정리하시는 거예요? \n13:59 몇시부터 이렇게 나와서 일하시는 거예요? \n14:25 손은 괜찮으신 거예요? \n14:30 선장님들은 또 수익이 어느정도 되는지 \n15:31 선장님도 낚시를 너무 좋아해서 취미로 낚시를 계속하다가 직장그만두고 \n16:01 원래 서울에 계셨다고 하셨잖아요 \n16:59 휴먼스토리 시청자분들한테 한 말씀 해주신다면 \n17:37 휴먼스토리 화이팅!",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/3mg7IZl6cBw/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/3mg7IZl6cBw/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/3mg7IZl6cBw/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/3mg7IZl6cBw/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/3mg7IZl6cBw/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "휴먼스토리",
                tags: [
                  "휴먼스토리",
                  "식인상어",
                  "제주도",
                  "하효항",
                  "무태상어",
                  "바다",
                  "선장",
                  "매출",
                  "귀어",
                  "귀촌",
                  "상어",
                  "다큐",
                ],
                categoryId: "22",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "직장 관두고 바다로 귀어해 낚시로 매출 월1000만원 선장님",
                  description:
                    "#휴먼스토리 #상어 #제주도\n\n▶출연문의 contact us\nkoreahooning@gmail.com\n\n▶휴먼스토리 멤버십 가입 humanstory membership\nhttps://www.youtube.com/channel/UC31-nUU7jhm3I5DCYh6uLBA/join\n\n▶휴먼스토리 공식카페 hunamstory official website\nhttps://cafe.naver.com/humanstoryofficial\n\n▶휴먼스토리 인스타그램 humanstory instagram\nhttps://www.instagram.com/youtubehumanstory/\n\n\n✔time stamp\n00:23 사장님 지금 잡고계신 물고기가 어떤 거예요? \n00:34 지금 사장님이 (꾀저립)물으신 거예요 이게? \n00:40 줄을 끊어먹은 거예요? \n00:50 오 왔다 여기 꾀저립 왔어요 꾀저립 \n01:12 이게 지금 (낚시)줄이 끌려 나가는 거잖아요 \n01:33 지금 현재 예상되는 물고기 이름이 어떤 건가요?  \n01:38 이게 아까 그 전설의 물고기라고 했던 거예요? \n01:47 (꾀저립) 사이즈가 어느 정도 될까요? \n02:03 이게 지금 (줄이) 끌려가는 건가요 사장님? \n02:28 지금 몇분째 잡고 계신 거예요? \n02:31 선장님 배 어부 생활하신지는 얼마나 되신 거예요? \n02:43 이거 확률이 어느정도 되는 거예요? \n02:55 그러니까 이 꾀저립이라는게 원래 제주도에서 나오는 어종이 아닌거죠? \n03:08 선장님 지금 여태 어부생활 8년 하시면서 가장 큰 물고기 잡은게 몇 센티미터 인가요? \n03:18 훨씬 큰 거예요? \n03:22 가격은 어느정도 할까요? \n03:30 참치요? 참치가 보통 몇미터 정도 되죠? \n03:46 오 (물고기) 방향이 바뀌었네요 또? \n04:11 (낚시대에) 달려 있는 점다랑어는 어떤 건가요? \n04:20 미끼는 위로 쭉 딸려온 상태네요? 실에다가? \n04:30 1M 50cm 잡는데는 몇분 걸리셨어요? \n04:38 사장님 실례지만 지금 소개 안했는데 소개 한 번 간단하게 해주세요 \n05:21 사장님 왜 갑자기 뱃머리로 오셨어요? \n05:38 사장님 지금 몇 분째 잡고 계신 거예요?  \n06:02 방금 떨어질뻔 하셨어요 아이고 \n06:06손님) 혹시 이게 그 무슨혹등고래나 이런거 아닐런지는 모르죠 이거?\n06:17 몇미터 남았다고요? \n06:27 아 물고기가 또 도네요 \n06:45 상어일 수도 있는 건가요 고래나? \n06:53 근데 진짜 상어일수도 있는 거예요? \n07:12 선원) 이걸 손으로 당기면 안돼요?\n07:26 지금 여기 파이팅 벨트를 채워놔서 물고기 잡는 벨트라고 합니다 아이고 \n07:42 지금 이렇게 오래 걸리는 걸로 봐서는 상어일 확률이 높나요 꾀저립일 확률이 높나요? \n08:01큰일났다 아 이거 안풀리는데 이거 큰일났다\n08:39 이 물고기를 위해서 선장님 손을 받칠 준비가 돼있는 건가요 지금? \n08:55 몇프로의 확률로 상어인가요? \n09:04 너무 큰 상어 인데요? \n09:13 꾀저립이 아니라 상어가 지금 잡힌 거 같습니다 \n09:20 혹시 상어는 팔면 가격이 어느정도 하는 건가요? \n09:36 와 이렇게 큰 상어를 \n10:01선장님) (배 위로) 못 올려요 못 올려\n10:18 사장님 지금 포기하신 건가요? \n10:55 프로펠러에 지금 (상어가) 걸려서 지금 어떻게 하려고 하시는 건가요 이걸로? \n11:27 지금 상어 엄청나게 큽니다 여러분 \n11:47 지금 이제 끌고 가도 되는건가요 저렇게? \n11:56 선장님도 이렇게 어부 생활하시면서 \n12:04 선장님이 잡으신 것 중에 제일 큰 상어에요? \n12:37 이렇게 큰 상어 잡아보셨는데 기분이 어떠신가요? \n12:54 그리고 제가 여기 하효동 어촌계 소속인데\n13:15 어촌주민) 이번에 마라도에서 상어 해녀들 물질 들어가서 상어떼 나타나니까\n13:56 지금 이제 배 정리하시는 거예요? \n13:59 몇시부터 이렇게 나와서 일하시는 거예요? \n14:25 손은 괜찮으신 거예요? \n14:30 선장님들은 또 수익이 어느정도 되는지 \n15:31 선장님도 낚시를 너무 좋아해서 취미로 낚시를 계속하다가 직장그만두고 \n16:01 원래 서울에 계셨다고 하셨잖아요 \n16:59 휴먼스토리 시청자분들한테 한 말씀 해주신다면 \n17:37 휴먼스토리 화이팅!",
                },
                defaultAudioLanguage: "ko",
              },
            },
            {
              kind: "youtube#video",
              etag: "0RzrmRra3tN5vIoKc8IBNl6NpH4",
              id: "EuJXp9iVUpA",
              snippet: {
                publishedAt: "2021-11-17T02:45:01Z",
                channelId: "UClQh-fomLym80liSi2-jaeQ",
                title:
                  "된장의 모든것!! 이것만 숙지하세요. 종류, 고르는법, 손질법, 곰팡이 없이 보관하는 법, 효능, 우리가 몰랐던 사실까지!",
                description:
                  "오늘은 된장의 종류, 고르는 법, 보관법, 몰랐던 사실에 대해 알려드릴게요. \n\n우리나라 전통 조미 식품으로 음식의 맛을 내고 간을 맞출 때 중요한 역할을 하며 다양한 한식 요리에 사용되고 있습니다. 된장을 만드는 방식은 재래식과 개량식으로 나누어지며 재래식은 소금물에 메주를 발효시켜 만드는 전통적인 방식을 의미해요. 반면 개량식의 경우 삶은 콩에 밀을 섞어 곰팡이 균의 일종인 코지균을 이용해 발효시킨 것으로 단맛이 강하고 숙성 기간이 짧아 대량 생산이 가능한 방식입니다. \n\n마트에서 이런 된장은 사지마세요.\n된장 제발 냉장고에 바로 넣지마세요.\n발효식품 된장 오래 되면 될수록 좋은걸까?\n된장에 곰팡이가 폈다면 제거하고 먹는다?\n찌개는 10분 이내로 끓여주세요. 좋은균 살리는법!\n\n자세한 내용은 영상 참고해주세요\n\n▶ 영상이 도움이 되셨다면 구독, 좋아요,알림설정 부탁드려요.\n▶ 혹시라도 잘못된 정보나 궁금하신 사항이 있으시면 댓글 남겨주세요!!\n\n[A/S 되는 농수산물 산지직송 쇼핑몰, 백년밥상 ]\n*이 영상의 다운로드 및 2차 편집을 금지합니다.*\n© 2021 by 주식회사 백비에스. All rights are reserved.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/EuJXp9iVUpA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/EuJXp9iVUpA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/EuJXp9iVUpA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                  standard: {
                    url: "https://i.ytimg.com/vi/EuJXp9iVUpA/sddefault.jpg",
                    width: 640,
                    height: 480,
                  },
                  maxres: {
                    url: "https://i.ytimg.com/vi/EuJXp9iVUpA/maxresdefault.jpg",
                    width: 1280,
                    height: 720,
                  },
                },
                channelTitle: "백년밥상TV",
                tags: [
                  "된장",
                  "된장보관",
                  "된장효능",
                  "곰팡이핀된장",
                  "된장종류",
                  "된장고르는법",
                ],
                categoryId: "26",
                liveBroadcastContent: "none",
                localized: {
                  title:
                    "된장의 모든것!! 이것만 숙지하세요. 종류, 고르는법, 손질법, 곰팡이 없이 보관하는 법, 효능, 우리가 몰랐던 사실까지!",
                  description:
                    "오늘은 된장의 종류, 고르는 법, 보관법, 몰랐던 사실에 대해 알려드릴게요. \n\n우리나라 전통 조미 식품으로 음식의 맛을 내고 간을 맞출 때 중요한 역할을 하며 다양한 한식 요리에 사용되고 있습니다. 된장을 만드는 방식은 재래식과 개량식으로 나누어지며 재래식은 소금물에 메주를 발효시켜 만드는 전통적인 방식을 의미해요. 반면 개량식의 경우 삶은 콩에 밀을 섞어 곰팡이 균의 일종인 코지균을 이용해 발효시킨 것으로 단맛이 강하고 숙성 기간이 짧아 대량 생산이 가능한 방식입니다. \n\n마트에서 이런 된장은 사지마세요.\n된장 제발 냉장고에 바로 넣지마세요.\n발효식품 된장 오래 되면 될수록 좋은걸까?\n된장에 곰팡이가 폈다면 제거하고 먹는다?\n찌개는 10분 이내로 끓여주세요. 좋은균 살리는법!\n\n자세한 내용은 영상 참고해주세요\n\n▶ 영상이 도움이 되셨다면 구독, 좋아요,알림설정 부탁드려요.\n▶ 혹시라도 잘못된 정보나 궁금하신 사항이 있으시면 댓글 남겨주세요!!\n\n[A/S 되는 농수산물 산지직송 쇼핑몰, 백년밥상 ]\n*이 영상의 다운로드 및 2차 편집을 금지합니다.*\n© 2021 by 주식회사 백비에스. All rights are reserved.",
                },
                defaultAudioLanguage: "ko",
              },
            },
          ];

          resolve(result);
        }, 1500)
      );
    };

    const getChannelData = async (items) => {
      let channelIDsString = "";
      items.forEach((i) => {
        channelIDsString += i.snippet.channelId + ",";
      });
      channelIDsString = channelIDsString.slice(0, -1);

      const urlGetChannel = `https://www.googleapis.com/youtube/v3/channels?part=${option.part}&id=${channelIDsString}&key=${option.apiKey}`;
      // const channelData = await axios.get(urlGetChannel);

      const channelData = {
        data: {
          kind: "youtube#channelListResponse",
          etag: "tGQ6h5WVf_zSa061MzY-7fhzUA4",
          pageInfo: {
            totalResults: 19,
            resultsPerPage: 5,
          },
          items: [
            {
              kind: "youtube#channel",
              etag: "-_kuiQ13Gauv5Ristu7SRY-P4Tg",
              id: "UC31-nUU7jhm3I5DCYh6uLBA",
              snippet: {
                title: "휴먼스토리",
                description:
                  "이 세상 모든 사람들의 \n이야기를 담는 공간입니다\n성공 실패 노하우 특별한 사연 등\n누구나 신청 하실수 있습니다\n소중한 지금을\n평생 남겨질 나의 추억을 영상에 남겨보세요\n\n출연신청 문의\nkoreahooning@gmail.com\n\n",
                publishedAt: "2020-07-17T06:45:28.449017Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQaDnq2lI56ED13ZOZWDdPVIe_mKHP3Yokf2t5naQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQaDnq2lI56ED13ZOZWDdPVIe_mKHP3Yokf2t5naQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQaDnq2lI56ED13ZOZWDdPVIe_mKHP3Yokf2t5naQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "휴먼스토리",
                  description:
                    "이 세상 모든 사람들의 \n이야기를 담는 공간입니다\n성공 실패 노하우 특별한 사연 등\n누구나 신청 하실수 있습니다\n소중한 지금을\n평생 남겨질 나의 추억을 영상에 남겨보세요\n\n출연신청 문의\nkoreahooning@gmail.com\n\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "qkE0r89ckPMTJGSOA4uywkbT_oo",
              id: "UC-iJgiHZ0joj2cQWpszkqPw",
              snippet: {
                title: "조선남자 대길이 Chef in Joseon",
                description: "21세기 조선 요리사.\nJoeson Chef Daegil.",
                customUrl: "조선남자대길이",
                publishedAt: "2020-01-01T05:27:30.449592Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRUAW7iqF_UnWQZee26yAA1pu678f211m-gWCrv8w=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRUAW7iqF_UnWQZee26yAA1pu678f211m-gWCrv8w=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRUAW7iqF_UnWQZee26yAA1pu678f211m-gWCrv8w=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "조선남자 대길이 Chef in Joseon",
                  description: "21세기 조선 요리사.\nJoeson Chef Daegil.",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "XH2wFmBJ7sTXl2wEQbX1teboMWg",
              id: "UCbFzvzDu17eDZ3RIeaLRswQ",
              snippet: {
                title: "감스트GAMST",
                description:
                  "재미와 감동을 동시에 느낄 수 있는\n감스트의 공식 유튜브 채널 (감튜브) 입니다!\n\n감스트와 같이 찢으실 분들은\n'구독' 눌러주시고 많이 시청하러 오세요 :-D\n\nTo have fun and be touched at the same time\nThe official YouTube channel of GAMST (GAMTUBE) *_*\n\nIf you want to have fun with GAMST\nPlease visit and subscribe to the channel for more videos",
                publishedAt: "2013-08-08T17:01:47Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRTd2z5dvXsttjFKVEFe7S-LZ71P99BpwAoaC_qWg=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRTd2z5dvXsttjFKVEFe7S-LZ71P99BpwAoaC_qWg=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRTd2z5dvXsttjFKVEFe7S-LZ71P99BpwAoaC_qWg=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "감스트GAMST",
                  description:
                    "재미와 감동을 동시에 느낄 수 있는\n감스트의 공식 유튜브 채널 (감튜브) 입니다!\n\n감스트와 같이 찢으실 분들은\n'구독' 눌러주시고 많이 시청하러 오세요 :-D\n\nTo have fun and be touched at the same time\nThe official YouTube channel of GAMST (GAMTUBE) *_*\n\nIf you want to have fun with GAMST\nPlease visit and subscribe to the channel for more videos",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "V5_ya7YI8zJs_aLM_G1ciFQaX-Y",
              id: "UCRuSxVu4iqTK5kCh90ntAgA",
              snippet: {
                title: "총몇명",
                description:
                  "광고 및 비즈니스 문의 : \nchongmmyung@sandbox.co.kr\n페이스북 : facebook.com/chongmmyung/\n주소 : 서울시 용산구 서빙고로 17 센트럴파크타워, 30층 샌드박스 총몇명\n",
                publishedAt: "2016-10-25T01:33:55Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRfTKHzc_pkDuAaOgCCwR4OxumvJSbHCplKPhYd=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRfTKHzc_pkDuAaOgCCwR4OxumvJSbHCplKPhYd=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRfTKHzc_pkDuAaOgCCwR4OxumvJSbHCplKPhYd=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "총몇명",
                  description:
                    "광고 및 비즈니스 문의 : \nchongmmyung@sandbox.co.kr\n페이스북 : facebook.com/chongmmyung/\n주소 : 서울시 용산구 서빙고로 17 센트럴파크타워, 30층 샌드박스 총몇명\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "y5q0FOfbekk79fcGKU4iIbCdlog",
              id: "UC4hNKDlFO3I9_KZzgESyQYw",
              snippet: {
                title: "dreamfactoryclub",
                description: "(주)드림팩토리클럽 공식 유튜브채널",
                publishedAt: "2010-06-05T14:09:39Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQb6hLUDKL-e-7KrphgM4Vo91oSvEgbJLMVOUvK=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQb6hLUDKL-e-7KrphgM4Vo91oSvEgbJLMVOUvK=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQb6hLUDKL-e-7KrphgM4Vo91oSvEgbJLMVOUvK=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "dreamfactoryclub",
                  description: "(주)드림팩토리클럽 공식 유튜브채널",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "jWqNQFYt1U9wkq7D175HYmt8Q90",
              id: "UCjn-VbcIkAeXQKCmLJV8YwQ",
              snippet: {
                title: "쿠팡플레이 Coupang Play",
                description:
                  "와우회원을 위한 무제한 콘텐츠, 쿠팡플레이🎬\n쿠팡 와우 회원이라면? 쿠팡플레이 무료로 이용하세요!\n",
                customUrl: "쿠팡플레이coupangplay",
                publishedAt: "2020-11-10T04:06:27.034417Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSp_7nukhPhYc34XzTjK06ZKEE8zvNDgelmw6uZ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSp_7nukhPhYc34XzTjK06ZKEE8zvNDgelmw6uZ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSp_7nukhPhYc34XzTjK06ZKEE8zvNDgelmw6uZ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "쿠팡플레이 Coupang Play",
                  description:
                    "와우회원을 위한 무제한 콘텐츠, 쿠팡플레이🎬\n쿠팡 와우 회원이라면? 쿠팡플레이 무료로 이용하세요!\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "dDgWT_xX5fBYKBG2pwDgQjWQ0lc",
              id: "UCj3_t5p4L4aFsvdW3uHjnnw",
              snippet: {
                title: "연합뉴스 Yonhapnews",
                description:
                  "대한민국 뉴스의 허브 연합뉴스 \n글로벌 역량을 갖춘 뉴스통신사로 도약합니다.\n\n* 비즈니스 문의 및 광고는 연합뉴스 디지털기획부 \n영상구매는 연합뉴스TV 방송사업팀을 통해 진행해주시기 바랍니다.\n02-398-3114\n",
                customUrl: "yonhap",
                publishedAt: "2016-06-13T06:43:10Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTCFoVTOiba60T59cECantmqx1vbkcG4rcAKcOqyA=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTCFoVTOiba60T59cECantmqx1vbkcG4rcAKcOqyA=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLTCFoVTOiba60T59cECantmqx1vbkcG4rcAKcOqyA=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "연합뉴스 Yonhapnews",
                  description:
                    "대한민국 뉴스의 허브 연합뉴스 \n글로벌 역량을 갖춘 뉴스통신사로 도약합니다.\n\n* 비즈니스 문의 및 광고는 연합뉴스 디지털기획부 \n영상구매는 연합뉴스TV 방송사업팀을 통해 진행해주시기 바랍니다.\n02-398-3114\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "DuEDeuX1oEaR8KFk5IRwr9xbYKs",
              id: "UCweOkPb1wVVH0Q0Tlj4a5Pw",
              snippet: {
                title: "1theK (원더케이)",
                description:
                  '"K-pop Wonderland" 1theK\n\nK-pop을 이끄는 국내 최고 아티스트들의 뮤직비디오부터,\n전 세계 팬들이 보고, 듣고, 참여할 수 있는 오리지널 컨텐츠들까지!\n1theK에서 가장 빠르게 만나보세요! :)\n\n\nWelcome to the official YouTube page of "K-pop Wonderland" 1theK\nEnjoy the leading K-Pop artists’ M/Vs, teasers and more exclusive originals for the K-pop fans all over the world on 1theK! \n\n\nㅇㅇㅇ\nStay tuned for the latest updates!\n\n\n*Business contact : 1theK.ad@kakao-m.com',
                customUrl: "1thek",
                publishedAt: "2011-01-31T07:04:16Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQ3v9GsbycKbHSr-p4WO8eCe3ncbhbTde3IFDPKEOY=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQ3v9GsbycKbHSr-p4WO8eCe3ncbhbTde3IFDPKEOY=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQ3v9GsbycKbHSr-p4WO8eCe3ncbhbTde3IFDPKEOY=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                defaultLanguage: "en",
                localized: {
                  title: "1theK (원더케이)",
                  description:
                    '"K-pop Wonderland" 1theK\n\nK-pop을 이끄는 국내 최고 아티스트들의 뮤직비디오부터,\n전 세계 팬들이 보고, 듣고, 참여할 수 있는 오리지널 컨텐츠들까지!\n1theK에서 가장 빠르게 만나보세요! :)\n\n\nWelcome to the official YouTube page of "K-pop Wonderland" 1theK\nEnjoy the leading K-Pop artists’ M/Vs, teasers and more exclusive originals for the K-pop fans all over the world on 1theK! \n\n\nㅇㅇㅇ\nStay tuned for the latest updates!\n\n\n*Business contact : 1theK.ad@kakao-m.com',
                },
              },
            },
            {
              kind: "youtube#channel",
              etag: "a21bOpwHtkuC5fDmhwV9gYxKICc",
              id: "UCviI9lzTe2pkxJ9M2ArA7WQ",
              snippet: {
                title: "dingo freestyle",
                description:
                  "소셜 모바일 세대를 위한 미디어 딩고 Dingo의 블랙 뮤직&컬처 채널 딩고 프리스타일(Dingo Freestyle)! \n킬링벌스, DF LIVE, 리얼리티 예능, 콜라보 음원 등 블랙뮤직의 매력 속으로\n\nCopyright 2015 MakeUs Co.,Ltd. All rights reserved",
                customUrl: "dingofreestyle",
                publishedAt: "2014-11-19T09:35:59Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLThNDRUPv0RosQ1iyBPvHytgl12-Sc3-xNUtGdAsg=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLThNDRUPv0RosQ1iyBPvHytgl12-Sc3-xNUtGdAsg=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLThNDRUPv0RosQ1iyBPvHytgl12-Sc3-xNUtGdAsg=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                defaultLanguage: "ko",
                localized: {
                  title: "dingo freestyle",
                  description:
                    "소셜 모바일 세대를 위한 미디어 딩고 Dingo의 블랙 뮤직&컬처 채널 딩고 프리스타일(Dingo Freestyle)! \n킬링벌스, DF LIVE, 리얼리티 예능, 콜라보 음원 등 블랙뮤직의 매력 속으로\n\nCopyright 2015 MakeUs Co.,Ltd. All rights reserved",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "uuGE4v7KwZeOK_rdMG4jtM_rOb0",
              id: "UCIG4gr_wIy5CIlcFciUbIQw",
              snippet: {
                title: "진용진",
                description:
                  "진용진 유튜브입니다\n\n제보 및 각종문의 : jinyongjin12@naver.com\n인스타그램 : https://www.instagram.com/jinyongjin92/\n",
                customUrl: "진용진",
                publishedAt: "2014-05-30T06:30:52Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQZDV-yDWNZbxl8HFifJ3ADj5Bb5nd1r4DNhrksjg=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQZDV-yDWNZbxl8HFifJ3ADj5Bb5nd1r4DNhrksjg=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLQZDV-yDWNZbxl8HFifJ3ADj5Bb5nd1r4DNhrksjg=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "진용진",
                  description:
                    "진용진 유튜브입니다\n\n제보 및 각종문의 : jinyongjin12@naver.com\n인스타그램 : https://www.instagram.com/jinyongjin92/\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "3yue3QU1d6Aj1KABzuwTWyfP4kU",
              id: "UCpH3rUuBQH9CkjXRumRWZIQ",
              snippet: {
                title: "임영웅 Shorts",
                description: "임영웅X물고기뮤직 official",
                publishedAt: "2020-03-27T01:06:02.364893Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRJlV5csDs5MbaGNkVPGyxN8YxLAk2XlgF6Xu0=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRJlV5csDs5MbaGNkVPGyxN8YxLAk2XlgF6Xu0=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLRJlV5csDs5MbaGNkVPGyxN8YxLAk2XlgF6Xu0=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "임영웅 Shorts",
                  description: "임영웅X물고기뮤직 official",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "0BPWMjjXu6QNpCIiChjYj43f0E0",
              id: "UCUyfkq9e9ZfPzxOW5WQ9rzQ",
              snippet: {
                title: "문명특급 - MMTG",
                description: "글로벌 신문물 전파 프로젝트",
                customUrl: "oopssofastexpress",
                publishedAt: "2013-05-30T04:48:33Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSZorSgXQTdUoOKLe_JWEQgtpaVlXmO-23qZiRAYA=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSZorSgXQTdUoOKLe_JWEQgtpaVlXmO-23qZiRAYA=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSZorSgXQTdUoOKLe_JWEQgtpaVlXmO-23qZiRAYA=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "문명특급 - MMTG",
                  description: "글로벌 신문물 전파 프로젝트",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "h8i6LctCvESV4AhLOrZrkqnk3e0",
              id: "UCBLO7HA_4Kw-sp8WLed2WrA",
              snippet: {
                title: "세진 SEJIN",
                description:
                  "contact - park208405@naver.com\n모든 문의는 이메일로 주세요 :) \nIG - sejin.kr",
                publishedAt: "2016-02-06T02:42:48Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/b5cAEpHYMwJmKeg0mpY5u3SsuxY41HXZ7RXrl8GUgkfUql063zBRrx6RMhd-j6s-vq-6WFI6kx4=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/b5cAEpHYMwJmKeg0mpY5u3SsuxY41HXZ7RXrl8GUgkfUql063zBRrx6RMhd-j6s-vq-6WFI6kx4=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/b5cAEpHYMwJmKeg0mpY5u3SsuxY41HXZ7RXrl8GUgkfUql063zBRrx6RMhd-j6s-vq-6WFI6kx4=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "세진 SEJIN",
                  description:
                    "contact - park208405@naver.com\n모든 문의는 이메일로 주세요 :) \nIG - sejin.kr",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "DDYyeYGSTna6vaEkgd560SRBeE4",
              id: "UClQh-fomLym80liSi2-jaeQ",
              snippet: {
                title: "백년밥상TV",
                description:
                  "백년밥상TV 채널은 요리 · 손질 · 보관법 꿀팁  전문 채널입니다.\n\n\n",
                customUrl: "백년밥상tv",
                publishedAt: "2016-08-29T03:29:35Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSrXDKbpsum8A60rY1Gwf6nHCvOjaLnnElC8g14xQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSrXDKbpsum8A60rY1Gwf6nHCvOjaLnnElC8g14xQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLSrXDKbpsum8A60rY1Gwf6nHCvOjaLnnElC8g14xQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                defaultLanguage: "ko",
                localized: {
                  title: "백년밥상TV",
                  description:
                    "백년밥상TV 채널은 요리 · 손질 · 보관법 꿀팁  전문 채널입니다.\n\n\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "uYPBndIBl2lCHJ_ZzjcZzD73b1g",
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
            },
            {
              kind: "youtube#channel",
              etag: "vrY3wy5XogQOFY8DPzTDY9aIaHo",
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
            },
            {
              kind: "youtube#channel",
              etag: "pTqxUWospYOKE6CUKiO_Vy8KuQ8",
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
            },
            {
              kind: "youtube#channel",
              etag: "s7D5_G7K0sikwE9btjF6HBViP1E",
              id: "UC2tbZfs11e-5MND58_jfDCA",
              snippet: {
                title: "순자엄마",
                description:
                  "순자엄마 PD (개그맨 쫑구) - Instagram 아이디 : jwkim365\n\n큐~시트콤 보듯 재밌게 봐주세요^^ 순자네 시트콤\n\n인생 뭐 있나~재밌으면 대는거지~\n\n항상 웃자구요^^\n\n\n\n",
                customUrl: "순자엄마",
                publishedAt: "2017-05-07T09:25:01Z",
                thumbnails: {
                  default: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLR7InD0SYC7KX_udO4Dn4oHdQuJhMcFYyD5v-D4EQ=s88-c-k-c0x00ffffff-no-rj",
                    width: 88,
                    height: 88,
                  },
                  medium: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLR7InD0SYC7KX_udO4Dn4oHdQuJhMcFYyD5v-D4EQ=s240-c-k-c0x00ffffff-no-rj",
                    width: 240,
                    height: 240,
                  },
                  high: {
                    url: "https://yt3.ggpht.com/ytc/AKedOLR7InD0SYC7KX_udO4Dn4oHdQuJhMcFYyD5v-D4EQ=s800-c-k-c0x00ffffff-no-rj",
                    width: 800,
                    height: 800,
                  },
                },
                localized: {
                  title: "순자엄마",
                  description:
                    "순자엄마 PD (개그맨 쫑구) - Instagram 아이디 : jwkim365\n\n큐~시트콤 보듯 재밌게 봐주세요^^ 순자네 시트콤\n\n인생 뭐 있나~재밌으면 대는거지~\n\n항상 웃자구요^^\n\n\n\n",
                },
                country: "KR",
              },
            },
            {
              kind: "youtube#channel",
              etag: "GrbwCCL0D7DyVAcBsc5SLjYIPdc",
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
            },
          ],
        },
        status: 200,
        statusText: "",
        headers: {
          "cache-control": "private",
          "content-encoding": "gzip",
          "content-length": "5513",
          "content-type": "application/json; charset=UTF-8",
          date: "Sat, 20 Nov 2021 21:03:57 GMT",
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
          url: "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC3WZlO2Zl8NE1yIUgtwUtQw,UCtybqqaTj6Nx74Azdz1KrsA,UCY2wHBgv2W30w6lqoLxq99g,UCUyfkq9e9ZfPzxOW5WQ9rzQ,UCbCr1dWFedL5lMcRWthb_bA,UCUyfkq9e9ZfPzxOW5WQ9rzQ,UCjn-VbcIkAeXQKCmLJV8YwQ,UCbFzvzDu17eDZ3RIeaLRswQ,UCviI9lzTe2pkxJ9M2ArA7WQ,UCRuSxVu4iqTK5kCh90ntAgA,UCpH3rUuBQH9CkjXRumRWZIQ,UC2tbZfs11e-5MND58_jfDCA,UCj3_t5p4L4aFsvdW3uHjnnw,UC4hNKDlFO3I9_KZzgESyQYw,UCweOkPb1wVVH0Q0Tlj4a5Pw,UCIG4gr_wIy5CIlcFciUbIQw,UCBLO7HA_4Kw-sp8WLed2WrA,UC-iJgiHZ0joj2cQWpszkqPw,UC31-nUU7jhm3I5DCYh6uLBA,UClQh-fomLym80liSi2-jaeQ&key=AIzaSyCnSYEgItutcgRmMnwnH-AXh3LdQ3Nbzrw",
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
              <div className="video-thumbnail">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
              </div>
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
