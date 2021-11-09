import React, { createContext, useEffect, useState, useContext } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import SideBar from "./Side/SideBar";
export const SideBarContext = createContext({});
const Overlay = () => {
  const { setIsOpenSideBar } = useContext(SideBarContext);
  return (
    <div
      className="overlay"
      onClick={() => {
        setIsOpenSideBar(false);
      }}
    ></div>
  );
};
const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const [isWindowSizeXL, setIsWindowSizeXL] = useState(true);

  useEffect(() => {
    const handlerResizeEvent = () => {
      if (window.innerWidth <= 1300) {
        setIsOpenSideBar(false);
        setIsWindowSizeXL(false);
      } else {
        setIsOpenSideBar(true);
        setIsWindowSizeXL(true);
      }
    };

    handlerResizeEvent();

    window.addEventListener("resize", handlerResizeEvent);

    return () => {
      window.removeEventListener("resize", handlerResizeEvent);
    };
  }, []);

  useEffect(() => {
    if (!isWindowSizeXL && isOpenSideBar) {
      document.body.classList.add("scroll-in-overlay");
    } else {
      document.body.classList.remove("scroll-in-overlay");
    }
  }, [isWindowSizeXL, isOpenSideBar]);

  return (
    <div className="app">
      <SideBarContext.Provider
        value={{
          isOpenSideBar,
          setIsOpenSideBar,
          isWindowSizeXL,
          setIsWindowSizeXL,
        }}
      >
        <Header />
        <Main />
        <SideBar />
        {isOpenSideBar && !isWindowSizeXL && <Overlay />}
      </SideBarContext.Provider>
    </div>
  );
};

export default App;
