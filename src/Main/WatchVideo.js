import React, { useContext, useEffect } from "react";
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
        maxResults: 20,
        apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
      };
      //   const getRelativeVideoUrl = `https://www.googleapis.com/youtube/v3/search?part=${
      //     option.part
      //   }&type=video&relatedToVideoId=${getQueryString()}&maxResults=${option.maxResults}&key=${option.apiKey}`;

      //   const result = await axios.get(getRelativeVideoUrl);
      //   console.log("관련된 비디오", result.data.items);
      //   return result.data.items;
      const result2 = [
        {
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
        },
        {
          kind: "youtube#searchResult",
          etag: "k3tF60-6ZxMfeO7ctNhtl_twAE0",
          id: {
            kind: "youtube#video",
            videoId: "OGl7nmThlTg",
          },
          snippet: {
            publishedAt: "2021-05-27T10:15:41Z",
            channelId: "UCQ7X91NIBS174KJT4Id0lnQ",
            title: "넌 미드 못가 히히😡  [롤 뮤직비디오]",
            description:
              "ㅇbusiness : klvs234@gmail.com\nㅇ킬링벌스의 뮤비를 제일 먼저 듣고싶다면 🔔 알림설정 꾸욱 🔔\n\nㅇprod. blue caramel\n\n#미드 #파이크",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/OGl7nmThlTg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/OGl7nmThlTg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/OGl7nmThlTg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/OGl7nmThlTg/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/OGl7nmThlTg/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "킬링벌's KillingBees",
            liveBroadcastContent: "none",
            publishTime: "2021-05-27T10:15:41Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "4D8l6Bs7ft2lI0Mr6OHR299BAv4",
          id: {
            kind: "youtube#video",
            videoId: "7MCu4uGuFZs",
          },
          snippet: {
            publishedAt: "2021-09-16T12:36:07Z",
            channelId: "UC0Lhseg2kaIGTddl5HhLUvw",
            title: "One for All.exe",
            description:
              "Install Mech Arena for Free 🤖 IOS/ANDROID:  https://clcr.me/MA_ChillingSmite   and get a special starter pack 💥 Available only for the next 30 days\n\nSpecial thanks to everyone who sent their epic clips and replays!\n\n❤\n\n[BGM]\nIntro 1: Encounter\nhttps://youtu.be/VKaGF5gbE5E\n\nIntro 2: Guts\nhttps://youtu.be/dIoILN_KrhU\n\nSong 1: Delfino Plaza [Remix]\nhttps://youtu.be/jUab0HyhrCo\n\nSong 2: Special Stage (Dimension Heist)\nhttps://youtu.be/OLcblxrrE0Q\n\nOutro: Sunny Sunday\nhttps://youtu.be/qZK0HC8KRTY\n\n[Editing Software]\n'Adobe Premiere Pro' for editing\n'OBS' for recording \n'League Director' for 3D camera shots in game\n\n[Socials]\nFacebook: https://www.facebook.com/Chilling-Smite-106013851744870\nTwitter: https://twitter.com/Chilling_Smite\nTwitch: https://www.twitch.tv/chilling_smite\nDiscord: https://discord.gg/chilling-smite\nPatreon: https://www.patreon.com/chilling_smite\n\n[Email]\nchillingsmite21@gmail.com",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/7MCu4uGuFZs/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/7MCu4uGuFZs/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/7MCu4uGuFZs/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/7MCu4uGuFZs/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/7MCu4uGuFZs/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Chilling Smite",
            liveBroadcastContent: "none",
            publishTime: "2021-09-16T12:36:07Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "ERCgD6SpH9c6Sv8xdczABW4rBVM",
          id: {
            kind: "youtube#video",
            videoId: "UvjPzREU4w0",
          },
          snippet: {
            publishedAt: "2021-04-08T13:32:16Z",
            channelId: "UCQ7X91NIBS174KJT4Id0lnQ",
            title: "바위게 싸움하는 노래 (feat.발젭) [롤 뮤직비디오]",
            description:
              "사실 바위게때문에 미드정글이 싸우는 노래였던 것\n(발젭파트 가사는 본인이 직접 썼답니다. 국힙딱대 ㄷㄷ)\n\nㅇBeat - Prod. Blue caramel\nㅇ편집 자문과 도움을 주신 새벽님께 감사드립니다\nㅇbusiness : klvs234@gmail.com",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/UvjPzREU4w0/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/UvjPzREU4w0/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/UvjPzREU4w0/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/UvjPzREU4w0/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/UvjPzREU4w0/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "킬링벌's KillingBees",
            liveBroadcastContent: "none",
            publishTime: "2021-04-08T13:32:16Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "e-IpbM9tiYCjsbAB174jPoTgtxw",
          id: {
            kind: "youtube#video",
            videoId: "OFYR4NHZ14I",
          },
          snippet: {
            publishedAt: "2020-12-19T10:27:27Z",
            channelId: "UCiCn9uEE9guj8j49eIoXifA",
            title: "쇼미9 단 12분 만에 요약",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/OFYR4NHZ14I/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/OFYR4NHZ14I/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/OFYR4NHZ14I/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/OFYR4NHZ14I/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/OFYR4NHZ14I/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "수퍼비갤러리",
            liveBroadcastContent: "none",
            publishTime: "2020-12-19T10:27:27Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "CZn-7odRneczRXN_hfPGmw6Vy8k",
          id: {
            kind: "youtube#video",
            videoId: "flhS2AEKhE0",
          },
          snippet: {
            publishedAt: "2021-11-22T10:43:24Z",
            channelId: "UCs0P4GrXEumyYn-d8ASrGlA",
            title: "우리집 강아지 잠 잘때 특징",
            description:
              "침대 점거함.\n\n⊙고누리 네이버 카페: https://cafe.naver.com/konurija7326\n⊙고누리 유튜브 멤버십: \nhttps://www.youtube.com/channel/UCs0P4GrXEumyYn-d8ASrGlA/join\n- 제 활동에 후원해주시면 소소한 혜택을 드려요.\n\n⊙고누리 애니메이션 재생목록:\nhttps://www.youtube.com/playlist?list=PLKihElkMe-KpK3w0yfMajLyZf0DCoqu46\n\n\n(#고누리)\n\n\n▒사용된 BGM ▒\n\n🎵Music provided by 브금대통령 \n🎵Track : 댕청댕청 - https://youtu.be/5qEI_xTPa-Q \n\n\n⊙댓글창에서 등수놀이 , 욕 , 싸움,성드립 은 금지! 차단 될수 있어요.\n\n기타 문의, 질문 등은 고누리 카페로! , 혹은 이메일로 보내주세요.\n\n고누리 이메일: yoyo7326@sandbox.co.kr",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/flhS2AEKhE0/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/flhS2AEKhE0/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/flhS2AEKhE0/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/flhS2AEKhE0/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/flhS2AEKhE0/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "고누리",
            liveBroadcastContent: "none",
            publishTime: "2021-11-22T10:43:24Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "88INjBMZE3xCRgGrN7N3rmvez84",
          id: {
            kind: "youtube#video",
            videoId: "hhB9Itp_3_Q",
          },
          snippet: {
            publishedAt: "2021-11-11T17:59:21Z",
            channelId: "UCYH0isveXrujjCH4Z2F4p4g",
            title:
              "애니메이션 캐릭터 성대모사 대회! 이거 킹받게 하기 대회인가요..?ㅋㅋㅋㅋㅋㅋㅋ",
            description:
              "애니메이션 캐릭터 성대모사 대회 편집 본입니다!\n\n각종 애니메이션 시청하는 곳 - https://vo.la/KwOFi\n\n문의 및 팬아트 : yyyjhong7@naver.com\n\n덕양소에게 선물하기 \nhttps://fancim.me/celeb/celebDonation.aspx?cu_id=g_evr2nVk1iE2JzVH1VVRIo4OSSJNMBGYv\n\n사용된 bgm\n🎵Music provided by 브금대통령",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/hhB9Itp_3_Q/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/hhB9Itp_3_Q/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/hhB9Itp_3_Q/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/hhB9Itp_3_Q/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/hhB9Itp_3_Q/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "덕양소",
            liveBroadcastContent: "none",
            publishTime: "2021-11-11T17:59:21Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "nw3ZDUhLnaesXGtUslIG3NftiIo",
          id: {
            kind: "youtube#video",
            videoId: "6RgjekesP1c",
          },
          snippet: {
            publishedAt: "2021-11-20T09:04:33Z",
            channelId: "UCWVCESey93cvp8xs0aP6TBQ",
            title: "추억의 방방 [마인크래프트]",
            description:
              "방방도 지역마다 이름 다르던데\n\n\n\n유몽커플 인스타 :https://www.instagram.com/You.mong/\n메일 : usung1614@naver.com\n팬카페 : https://cafe.naver.com/teamsalad\n\n\nMusic ⓒ - Kevin MacLeod",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/6RgjekesP1c/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/6RgjekesP1c/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/6RgjekesP1c/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/6RgjekesP1c/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/6RgjekesP1c/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "유성",
            liveBroadcastContent: "none",
            publishTime: "2021-11-20T09:04:33Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "xOzMLI16DfoegvVrkXmY--AFHbE",
          id: {
            kind: "youtube#video",
            videoId: "QYN1pOxQhBI",
          },
          snippet: {
            publishedAt: "2020-09-18T07:18:01Z",
            channelId: "UCZecnuVvQnBCoopyobFdDZg",
            title: "[경고] 라이엇 한테 돈받고 만든 영상",
            description:
              "#앞광고#뒷광고#광고\n팍플레이의 첫광고\n비지니스 : pacplay@sandbox.co.kr\n개인 : vkrvmffpdl@naver.com",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/QYN1pOxQhBI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/QYN1pOxQhBI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/QYN1pOxQhBI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/QYN1pOxQhBI/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "팍플레이Pacplay",
            liveBroadcastContent: "none",
            publishTime: "2020-09-18T07:18:01Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "CDs5sBTD8sLuPIJfW52pylUTXOU",
          id: {
            kind: "youtube#video",
            videoId: "WB2Sio3rrmo",
          },
          snippet: {
            publishedAt: "2020-06-25T19:27:33Z",
            channelId: "UCZW0yRW2HK7_fzgL9HQu9ZA",
            title: "[LOL] 왜 나만...욕 매드무비야...?",
            description:
              "편집: 정다운님!\n썸네일:나\n\n트위치 생방송은  오후 10시 30분에 시작해요!\n:https://www.twitch.tv/liok0485\n-----------------------------------------------------------------------\n늦은감이 없지않아 있지만 자낳대를 하게됐습니다! 와~~~",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/WB2Sio3rrmo/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/WB2Sio3rrmo/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/WB2Sio3rrmo/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/WB2Sio3rrmo/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/WB2Sio3rrmo/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "순당무",
            liveBroadcastContent: "none",
            publishTime: "2020-06-25T19:27:33Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "AJfeJhPyo4l1h1PmlpSStDxqv3g",
          id: {
            kind: "youtube#video",
            videoId: "6H_Z-ZsOylY",
          },
          snippet: {
            publishedAt: "2021-11-20T10:38:42Z",
            channelId: "UCZecnuVvQnBCoopyobFdDZg",
            title: "협곡의 미친놈들",
            description:
              "비지니스 :  Pacplay@sandbox.co.kr\n개인 : vkrvmffpdl@naver.com\n\n\n사용된 브금\n\n브금대통령 -  It's Summer!\n브금대통령 - It's a Great Show!\n브금대통령 - Happily Ever After\n\n\nKevin MacLeod의 Gold Rush에는 크리에이티브 커먼즈 저작자 표시 4.0 라이선스가 적용됩니다. https://creativecommons.org/licenses/by/4.0/\n\n출처: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100217\n\n아티스트: http://incompetech.com/",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/6H_Z-ZsOylY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/6H_Z-ZsOylY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/6H_Z-ZsOylY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/6H_Z-ZsOylY/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "팍플레이Pacplay",
            liveBroadcastContent: "none",
            publishTime: "2021-11-20T10:38:42Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "iMFPCmbRXBWOxBnlA2MLC0DnkoQ",
          id: {
            kind: "youtube#video",
            videoId: "8sVcq_6KUuU",
          },
          snippet: {
            publishedAt: "2021-11-22T12:58:41Z",
            channelId: "UCQ9eDVhFn_jq7eTpjf21ouA",
            title: "무한궁",
            description:
              "bgm\n\nhttps://www.youtube.com/watch?v=KGQNrzqrGqw\n\nhttps://www.youtube.com/watch?v=Li2_panh6Fc\n\nhttps://www.youtube.com/watch?v=jYAPLnMiZ5g\n\n아웃트로- dj quads dreams",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/8sVcq_6KUuU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/8sVcq_6KUuU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/8sVcq_6KUuU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/8sVcq_6KUuU/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/8sVcq_6KUuU/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "발__젭",
            liveBroadcastContent: "none",
            publishTime: "2021-11-22T12:58:41Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "C6wwXa6bNAawSzCeSlFALHmoEHY",
          id: {
            kind: "youtube#video",
            videoId: "ekdh3KGRYtI",
          },
          snippet: {
            publishedAt: "2021-10-08T08:46:13Z",
            channelId: "UCAV0h8Bqu1ef_v8lLN-YPag",
            title: "장인들의 노래 1시간",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ekdh3KGRYtI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/ekdh3KGRYtI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/ekdh3KGRYtI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/ekdh3KGRYtI/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/ekdh3KGRYtI/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "전소기",
            liveBroadcastContent: "none",
            publishTime: "2021-10-08T08:46:13Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "0Fcm7VN_v-5qJSbe6N7E3TMNhVc",
          id: {
            kind: "youtube#video",
            videoId: "77LP7l1tlrc",
          },
          snippet: {
            publishedAt: "2020-11-06T09:51:57Z",
            channelId: "UCQ7X91NIBS174KJT4Id0lnQ",
            title: '장기 터는 탈론 "장기탈탈론"',
            description:
              '00:00 인트로 & 썰\n02:42 컨텐츠 맛보기\n04:34 다음화 예고편\n\n킬링벌\'s를 응원해주세요. 더 큰 재미로 보답하겠습니다!\n자주 봐요! \n\n예고편에 나온 다음화부터는\n본격적으로 "메인 컨텐츠"가 올라가고, 편집자님이 합류하십니다!\nJomangan See You Again!',
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/77LP7l1tlrc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/77LP7l1tlrc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/77LP7l1tlrc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/77LP7l1tlrc/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "킬링벌's KillingBees",
            liveBroadcastContent: "none",
            publishTime: "2020-11-06T09:51:57Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "z1hH5CNd0LksYaXGSkWwkAO8hhg",
          id: {
            kind: "youtube#video",
            videoId: "8m4ZJx8VONU",
          },
          snippet: {
            publishedAt: "2021-06-16T08:47:05Z",
            channelId: "UCZ0bi2aVJngKLwFTU5g_fLQ",
            title: "LOL 서포터 비하 논란",
            description:
              "✔️인터뷰-취재 응해주신 매드라이프, 삼쿠아, 오성균, 오지환 농심 레드포스 대표, 인간젤리, 클템, 피레안, PS관전러 님 감사드립니다. (가나다 순)\n\n📪 Business Contact: SANDBOX NETWORK\n🎥 유튜버, 스트리머를 위한 방송세팅: https://www.drgo.pro\n🎙️ 유튜버, 스트리머를 위한 사운드: https://stage8.kr\n🎵음원 출처: https://www.epidemicsound.com 등\n❌ Xsplit 10% 할인 특전 링크: https://link.xsolla.com/We7P2B5D (프로모션코드: GSBGXSPLIT)\n\n#서포터",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/8m4ZJx8VONU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/8m4ZJx8VONU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/8m4ZJx8VONU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/8m4ZJx8VONU/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/8m4ZJx8VONU/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "김성회의 G식백과",
            liveBroadcastContent: "none",
            publishTime: "2021-06-16T08:47:05Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "_kpL3pVQ_ogLpGyd-tN175GuMJc",
          id: {
            kind: "youtube#video",
            videoId: "m3wB4kdZ2vk",
          },
          snippet: {
            publishedAt: "2021-08-30T11:54:39Z",
            channelId: "UCZecnuVvQnBCoopyobFdDZg",
            title: "이 시국에 코인노래방 조지는 카서스",
            description:
              "#카서스#카서스장인#카서스템트리\n비지니스 :  Pacplay@sandbox.co.kr\n개인 : vkrvmffpdl@naver.com\n\n\n사용된브금\n브금대통령(BgmPresident) - Welcome to Hell\n브금대통령(BgmPresident) - It's Summer!\n브금대통령(BgmPresident) -how to tame a Wyvern",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/m3wB4kdZ2vk/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/m3wB4kdZ2vk/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/m3wB4kdZ2vk/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/m3wB4kdZ2vk/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "팍플레이Pacplay",
            liveBroadcastContent: "none",
            publishTime: "2021-08-30T11:54:39Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "7vucDnWz4ms3L6w2ylHPOUyVxaA",
          id: {
            kind: "youtube#video",
            videoId: "ik7Ja86wm88",
          },
          snippet: {
            publishedAt: "2021-11-18T12:13:36Z",
            channelId: "UCQ9eDVhFn_jq7eTpjf21ouA",
            title: "미친",
            description:
              "bgm\n\nhttps://www.youtube.com/watch?v=xON8H2CIbEM\nhttps://www.youtube.com/watch?v=Li2_panh6Fc\nhttps://www.youtube.com/watch?v=Q6toqxlDCR4\nhttps://www.youtube.com/watch?v=KQMfW9LhAzs\n\nhttps://www.youtube.com/watch?v=S2f1Sq_SHgc\n\n\nhttps://www.youtube.com/watch?v=p1l4XeIsw70\n\nhttps://www.youtube.com/watch?v=2OvJo-jQS7o",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ik7Ja86wm88/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/ik7Ja86wm88/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/ik7Ja86wm88/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/ik7Ja86wm88/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/ik7Ja86wm88/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "발__젭",
            liveBroadcastContent: "none",
            publishTime: "2021-11-18T12:13:36Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "gBCfpfqYaMN-KHSuni0Ew3wZ0qA",
          id: {
            kind: "youtube#video",
            videoId: "9-e-CAkWFSc",
          },
          snippet: {
            publishedAt: "2021-04-12T12:10:37Z",
            channelId: "UCEu_YKdz0lMz1NkB3vlUyyw",
            title: "3성이 되어라 세트 ㅣ무한열차",
            description:
              "아카자 헌정 영상\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🎵 Track Info:\n\nTitle: Mood by Peyruis\nGenre and Mood: Dance & Electronic + Funky\nhttps://www.youtube.com/watch?v=dsdYAMcNcwI\n\n아카자 브금 https://youtu.be/K4u_ymEO0gU\n술식전개 https://www.youtube.com/watch?v=Jb50oWQRGUQ",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/9-e-CAkWFSc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/9-e-CAkWFSc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/9-e-CAkWFSc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/9-e-CAkWFSc/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/9-e-CAkWFSc/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "승상싱",
            liveBroadcastContent: "none",
            publishTime: "2021-04-12T12:10:37Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "wZZrXWwzsbz8FRrR1kyiRirVzBc",
          id: {
            kind: "youtube#video",
            videoId: "MgmT5dPyutM",
          },
          snippet: {
            publishedAt: "2021-09-05T09:08:28Z",
            channelId: "UCQ7X91NIBS174KJT4Id0lnQ",
            title: "킬린이들을 위한 킬링벌스 모음 2편 (+장인 비하인드)",
            description:
              "#장인들의노래 #막아라!! #바위게싸움하는노래\n\nㅇ business : klvs234@gmail.com (광고&외주&콜라보) \nㅇ킬링벌스의 뮤비를 놓치고 싶지 않다면 🔔 알림설정 꾸욱 🔔\nㅇ저희 채널을 후원해주셔서 감사합니다!\n멤버십 가입 혜택 : 영상 끝 이름 박제, 킬링벌's가 직접 만든 알람 제공, 브이로그 등\n자세한 내용은↓\nhttps://www.youtube.com/channel/UCQ7X91NIBS174KJT4Id0lnQ/join\n\n타임스탬프\n\n1.막아라!! - 0:04\n2.바위게 싸움하는 노래 (feat. 발젭) - 3:35\n3.협곡폭격단 - 6:00\n4.파이크는 왜 미드를 못가는걸까? - 7:07\n5.장인 (비하인드) - 8:10",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/MgmT5dPyutM/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/MgmT5dPyutM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/MgmT5dPyutM/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/MgmT5dPyutM/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/MgmT5dPyutM/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "킬링벌's KillingBees",
            liveBroadcastContent: "none",
            publishTime: "2021-09-05T09:08:28Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "HSWWvYffxNhuYTWfGB7Cykw57VA",
          id: {
            kind: "youtube#video",
            videoId: "DDN-WSXTw18",
          },
          snippet: {
            publishedAt: "2021-11-20T07:50:54Z",
            channelId: "UCWJSXKubxifR1-NNk-_E58w",
            title:
              "[쇼미더머니10] 노래 모아듣기 본선전곡 & 음원미션 (가사포함)",
            description:
              "#쇼미더머니10 #본선 #음원미션\n\n[쇼미더머니10] 노래 모아듣기 본선전곡 & 음원미션 (가사포함)\n\n타임라인 : \n00:00 리무진\n03:40 만남은 쉽고 이별은 어려워\n07:30 이끼\n11:35 깐부\n15:40 Reset\n19:58 새로고침\n23:33 카멜레온\n27:29 모야모야\n30:36 회전목마\n34:45 가시\n39:23 쉬어\n44:51 Wake Up\n51:00 TROUBLE\n55:44 너와 나의 Memories\n1:01:02 회전목마 & 가시 & 음원미션 4곡 (실수로 한번 더 넣음)\n\n☑수익을 창출하지 않으며 광고 발생시 음원 저작자에게 수익이 지급됩니다.\n☑유튜브 정책에 따라 광고가 표시 될 수 있으며 광고 수익은 모두 음원 저작자에게 지급됩니다.\n☑*It does not generate revenue.* *Profit will be paid to the music author*",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/DDN-WSXTw18/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/DDN-WSXTw18/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/DDN-WSXTw18/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/DDN-WSXTw18/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/DDN-WSXTw18/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "흰토커",
            liveBroadcastContent: "none",
            publishTime: "2021-11-20T07:50:54Z",
          },
        },
      ];

      return result2;
    };

    getRelativeVideo().then((items) => {
      setRelativeVideoItems(items);
    });
  }, []);

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
        .catch((e) => {
          console.log("error", e);
          navigate("/");
        });
    }
  }, []);

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
    }
  };
  return (
    <div
      className={"watch-video-container watch-video-container-" + themeState}
    >
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
            {languageState === "KOR" && `조회수 ${watchVideoState.viewCount}회`}
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
          {languageState === "KOR" && `댓글 ${watchVideoState.commentCount}개`}
          {languageState === "EN" && `${watchVideoState.commentCount} Comments`}
        </div>
      </div>
      <div className="watch-video-relative-list">
        {/* 오른쪽에 관련된 비디오 추천목록 */}
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
