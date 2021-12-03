import React, { createContext, useEffect, useState, useRef } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import SearchResult from "./Main/SearchResult";
import SideBar from "./Side/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Main/Test";
import WatchVideo from "./Main/WatchVideo";

//Context
export const SideBarContext = createContext({});
export const languageStateContext = createContext({});
export const themeStateContext = createContext({});
export const locationStateContext = createContext({});
export const restrictedModeContext = createContext({});
export const MiniSideBarContext = createContext({});

export const Overlay = ({ overlayClick }) => {
  return <div className="overlay" onClick={overlayClick}></div>;
};

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isWindowSizeXL, setIsWindowSizeXL] = useState(true);
  const [isOpenMiniSideBar, setIsOpenMiniSideBar] = useState(true);
  const [restrictedMode, setRestrictedMode] = useState(() => {
    const a = window.localStorage.getItem("restrictedMode");
    if (a) {
      return a;
    }
    return false;
  });
  const [languageState, setLanguageState] = useState(() => {
    const a = window.localStorage.getItem("languageState");
    if (a) {
      return a;
    }
    return "KOR";
  });
  const [themeState, setThemeState] = useState(() => {
    const a = window.localStorage.getItem("themeState");
    if (a) {
      return a;
    }
    return "lightTheme";
  });
  const [locationState, setLocationState] = useState("southKorea");

  let scroll_y = useRef(window.scrollY * -1);
  let scroll_y_temp = useRef(0);

  useEffect(() => {
    //반응형을 위한 width 사이즈변경 감지
    const handlerResizeEvent = () => {
      if (window.innerWidth <= 1300) {
        setIsWindowSizeXL(false);
      } else {
        setIsWindowSizeXL(true);
      }

      if (window.innerWidth <= 1320) {
        setIsOpenSideBar(false);
      } else {
        setIsOpenSideBar(true);
      }
    };
    handlerResizeEvent();
    window.addEventListener("resize", handlerResizeEvent);
    return () => {
      window.removeEventListener("resize", handlerResizeEvent);
    };
  }, []);

  useEffect(() => {
    //overlay가 랜더링되면 스크롤바가 사라지고, 위치가 초기화된다.
    //그래서 스크롤바 위치를 기억하는 코드이다
    
    
    scroll_y.current = window.scrollY * -1;
    if (!isWindowSizeXL && isOpenSideBar) {
      scroll_y_temp.current = scroll_y.current;
      document.body.classList.add("scroll-in-overlay");
      document.body.style.top = scroll_y.current + "px";
    } else {
      if (document.body.classList.toString().length > 0) {
        document.body.style.top = "0px";
        document.body.classList.remove("scroll-in-overlay");
        window.scrollTo(0, scroll_y_temp.current * -1);
      }
    }
  }, [isWindowSizeXL, isOpenSideBar]);

  return (
    <BrowserRouter basename="react_youtube_clone/">
      <div className={"app app-"+themeState}>
        <SideBarContext.Provider
          value={{
            isOpenSideBar,
            setIsOpenSideBar,
            isWindowSizeXL,
            setIsWindowSizeXL,
          }}
        >
          <languageStateContext.Provider
            value={{ languageState, setLanguageState }}
          >
            <themeStateContext.Provider value={{ themeState, setThemeState }}>
              <locationStateContext.Provider
                value={{ locationState, setLocationState }}
              >
                <restrictedModeContext.Provider
                  value={{ restrictedMode, setRestrictedMode }}
                >
                  <MiniSideBarContext.Provider
                    value={{ isOpenMiniSideBar, setIsOpenMiniSideBar }}
                  >
                    <Header />
                    {/* <Main /> */}
                    <Routes>
                      <Route path="/" element={<Main />} />
                      <Route path="result/*" element={<SearchResult />} />
                      <Route path="watch/*" element={<WatchVideo />} />
                      <Route path="test/*" element={<Test />} />
                    </Routes>
                    <SideBar />
                    {isOpenSideBar && !isWindowSizeXL && (
                      <Overlay
                        overlayClick={() => {
                          setIsOpenSideBar(false);
                        }}
                      />
                    )}
                  </MiniSideBarContext.Provider>
                </restrictedModeContext.Provider>
              </locationStateContext.Provider>
            </themeStateContext.Provider>
          </languageStateContext.Provider>
        </SideBarContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
