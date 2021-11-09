import React, { createContext, useCallback, useEffect, useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import SideBar from "./Side/SideBar";
export const isOpenSideBarContext = createContext({});

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);

  useEffect(() => {
    const handlerResizeEvent = () => {
      if (window.innerWidth <= 1300) {
        setIsOpenSideBar(false);
      } else {
        setIsOpenSideBar(true);
      }
    };
    window.addEventListener("resize", handlerResizeEvent);

    return () => {
      window.removeEventListener("resize", handlerResizeEvent);
    };
  }, []);

  return (
    <div className="app">
      <isOpenSideBarContext.Provider
        value={{ isOpenSideBar, setIsOpenSideBar }}
      >
        <Header />
        <Main />
        <SideBar />
      </isOpenSideBarContext.Provider>
    </div>
  );
};

export default App;
