import React, { useEffect } from "react";
import YouTube from "react-youtube";
import "./Main.scss";

const Main = () => {
  useEffect(() => {
    // https://www.googleapis.com/youtube/v3/videos
  });

  return (
    <div className="main">
      <YouTube
        videoId={"Lkrby-_NJTs"}
        opts={{ height: "200", width: "400" }}
      ></YouTube>
    </div>
  );
};

export default Main;
