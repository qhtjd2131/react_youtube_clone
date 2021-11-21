import React, {useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./WatchVideo.scss";
import { MiniSideBarContext } from "../App";

const WatchVideo = () => {
  const location = useLocation();
  const { isOpenMiniSideBar, setIsOpenMiniSideBar } =
    useContext(MiniSideBarContext);

    useEffect(()=>{
        setIsOpenMiniSideBar(false);
    },[])

  return <div className="test-watch-video">im watch video component</div>;
};

export default WatchVideo;
