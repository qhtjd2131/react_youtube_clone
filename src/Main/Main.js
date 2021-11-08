import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Main.scss";
import axios from "axios";
import FilterBar from "./FilterBar";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsState, setItems] = useState([]);

  useEffect(() => {
    // const url =
    //   "https://www.googleapis.com/youtube/v3/search?&part=snippet&regionCode=KR&key=AIzaSyB9lShbMlPF9fz6shjhCGXiac9p5sMrUqk";

    const getData = async () => {
      //   const result = await axios.get(url);
      const result = {
        kind: "youtube#searchListResponse",
        etag: "RPwiKG-qcHXx94Um4MZPaFqZaYA",
        nextPageToken: "CAUQAA",
        regionCode: "KR",
        pageInfo: {
          totalResults: 1000000,
          resultsPerPage: 5,
        },
        items: [
          {
            kind: "youtube#searchResult",
            etag: "O0NgyVnqAjoIWYnEhNDCR5svhi4",
            id: {
              kind: "youtube#video",
              videoId: "Iiukq_ilT0Y",
            },
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
          },
          {
            kind: "youtube#searchResult",
            etag: "gYNeBWYr86PCIWlP08zVJS4HzGs",
            id: {
              kind: "youtube#video",
              videoId: "RmZ3DPJQo2k",
            },
            snippet: {
              publishedAt: "2018-04-04T15:00:05Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep3 Just give me a smile | BTS: Burn the Stage",
              description:
                "In their most private moment, BTS open up and reveal the truth about themselves. BTS continue their whirlwind South America tour. Though exhausted, the ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-04-04T15:00:05Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "M80FKAxZeB5dAsJApursh9s6jNk",
            id: {
              kind: "youtube#video",
              videoId: "adMBDxnhJMw",
            },
            snippet: {
              publishedAt: "2018-04-25T15:00:00Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep6 Moonchild | BTS: Burn the Stage",
              description:
                "A surprise appear while in Southeast Asia: BTS are nominated for a Billboard Music Award! Will success on the global stage change them? The members are ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-04-25T15:00:00Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "MRbqdfcw3ragBcLtzSuK-C9Fg08",
            id: {
              kind: "youtube#video",
              videoId: "YgG9f4MJ1eU",
            },
            snippet: {
              publishedAt: "2019-01-18T14:00:47Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Burn the Stage: the Movie",
              description:
                "Burn the Stage: the Movie is the first movie from BTS, going behind-the-scenes of the BTS WINGS TOUR to reveal the full story of the band's meteoric rise to ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2019-01-18T14:00:47Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "bkZeEid8tmdxxC3QyCQjalaQ_KM",
            id: {
              kind: "youtube#video",
              videoId: "L38H9yVb3d8",
            },
            snippet: {
              publishedAt: "2018-03-28T15:00:50Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep2 You already have the answer | BTS: Burn the Stage",
              description:
                "A moment of triumph takes a scary turn: Jungkook, the youngest member, falls terribly ill. The Wings tour officially kicks off with a BANG in Seoul, Korea.",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-03-28T15:00:50Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "O0NgyVnqAjoIWYnEhNDCR5svhi4",
            id: {
              kind: "youtube#video",
              videoId: "Iiukq_ilT0Y",
            },
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
          },
          {
            kind: "youtube#searchResult",
            etag: "gYNeBWYr86PCIWlP08zVJS4HzGs",
            id: {
              kind: "youtube#video",
              videoId: "RmZ3DPJQo2k",
            },
            snippet: {
              publishedAt: "2018-04-04T15:00:05Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep3 Just give me a smile | BTS: Burn the Stage",
              description:
                "In their most private moment, BTS open up and reveal the truth about themselves. BTS continue their whirlwind South America tour. Though exhausted, the ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-04-04T15:00:05Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "M80FKAxZeB5dAsJApursh9s6jNk",
            id: {
              kind: "youtube#video",
              videoId: "adMBDxnhJMw",
            },
            snippet: {
              publishedAt: "2018-04-25T15:00:00Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep6 Moonchild | BTS: Burn the Stage",
              description:
                "A surprise appear while in Southeast Asia: BTS are nominated for a Billboard Music Award! Will success on the global stage change them? The members are ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-04-25T15:00:00Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "MRbqdfcw3ragBcLtzSuK-C9Fg08",
            id: {
              kind: "youtube#video",
              videoId: "YgG9f4MJ1eU",
            },
            snippet: {
              publishedAt: "2019-01-18T14:00:47Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Burn the Stage: the Movie",
              description:
                "Burn the Stage: the Movie is the first movie from BTS, going behind-the-scenes of the BTS WINGS TOUR to reveal the full story of the band's meteoric rise to ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2019-01-18T14:00:47Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "bkZeEid8tmdxxC3QyCQjalaQ_KM",
            id: {
              kind: "youtube#video",
              videoId: "L38H9yVb3d8",
            },
            snippet: {
              publishedAt: "2018-03-28T15:00:50Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep2 You already have the answer | BTS: Burn the Stage",
              description:
                "A moment of triumph takes a scary turn: Jungkook, the youngest member, falls terribly ill. The Wings tour officially kicks off with a BANG in Seoul, Korea.",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-03-28T15:00:50Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "O0NgyVnqAjoIWYnEhNDCR5svhi4",
            id: {
              kind: "youtube#video",
              videoId: "Iiukq_ilT0Y",
            },
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
          },
          {
            kind: "youtube#searchResult",
            etag: "gYNeBWYr86PCIWlP08zVJS4HzGs",
            id: {
              kind: "youtube#video",
              videoId: "RmZ3DPJQo2k",
            },
            snippet: {
              publishedAt: "2018-04-04T15:00:05Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep3 Just give me a smile | BTS: Burn the Stage",
              description:
                "In their most private moment, BTS open up and reveal the truth about themselves. BTS continue their whirlwind South America tour. Though exhausted, the ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/RmZ3DPJQo2k/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-04-04T15:00:05Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "M80FKAxZeB5dAsJApursh9s6jNk",
            id: {
              kind: "youtube#video",
              videoId: "adMBDxnhJMw",
            },
            snippet: {
              publishedAt: "2018-04-25T15:00:00Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep6 Moonchild | BTS: Burn the Stage",
              description:
                "A surprise appear while in Southeast Asia: BTS are nominated for a Billboard Music Award! Will success on the global stage change them? The members are ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/adMBDxnhJMw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-04-25T15:00:00Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "MRbqdfcw3ragBcLtzSuK-C9Fg08",
            id: {
              kind: "youtube#video",
              videoId: "YgG9f4MJ1eU",
            },
            snippet: {
              publishedAt: "2019-01-18T14:00:47Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Burn the Stage: the Movie",
              description:
                "Burn the Stage: the Movie is the first movie from BTS, going behind-the-scenes of the BTS WINGS TOUR to reveal the full story of the band's meteoric rise to ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2019-01-18T14:00:47Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "bkZeEid8tmdxxC3QyCQjalaQ_KM",
            id: {
              kind: "youtube#video",
              videoId: "L38H9yVb3d8",
            },
            snippet: {
              publishedAt: "2018-03-28T15:00:50Z",
              channelId: "UCLkAepWjdylmXSltofFvsYQ",
              title: "Ep2 You already have the answer | BTS: Burn the Stage",
              description:
                "A moment of triumph takes a scary turn: Jungkook, the youngest member, falls terribly ill. The Wings tour officially kicks off with a BANG in Seoul, Korea.",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/L38H9yVb3d8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "BANGTANTV",
              liveBroadcastContent: "none",
              publishTime: "2018-03-28T15:00:50Z",
            },
          },
        ],
      };
      setItems(result);
      setIsLoading(false);
    };
    getData();
  }, []);

  const video_opt = {
    height: "auto",
    width: "100%",
  };

  return (
    <div className="main">
      {/* <YouTube videoId={"Lkrby-_NJTs"} opts={video_opt}></YouTube> */}

      <div className="contents-wrapper">
        <FilterBar />
        {isLoading
          ? "Loading ..."
          : itemsState.items.map((item, index) => (
              <div className="item-container" key={index}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="video-description-container">
                  <div className="channel-icon"></div>
                  <div className="video-description">
                    <div className="video-title">{item.snippet.title}</div>
                    <div className="video-channel-name">
                      {item.snippet.channelTitle}
                    </div>
                    <div className="video-viewcount"></div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Main;
