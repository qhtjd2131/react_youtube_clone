import React, { createContext, useEffect, useState, useRef } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import SideBar from "./Side/SideBar";
export const SideBarContext = createContext({});
export const languageStateContext = createContext({});
export const themeStateContext = createContext({});
export const locationStateContext = createContext({});
export const restrictedModeContext = createContext({});
export const Overlay = ({ overlayClick }) => {
  return <div className="overlay" onClick={overlayClick}></div>;
};

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isWindowSizeXL, setIsWindowSizeXL] = useState(true);
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
    const handlerResizeEvent = () => {
      if (window.innerWidth <= 1300) {
        setIsWindowSizeXL(false);
      } else {
        setIsWindowSizeXL(true);
      }

      if (window.innerWidth <= 1330) {
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
    <div className="app">
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
                <Header />
                <Main />
                <SideBar />
                {isOpenSideBar && !isWindowSizeXL && (
                  <Overlay
                    overlayClick={() => {
                      setIsOpenSideBar(false);
                    }}
                  />
                )}
              </restrictedModeContext.Provider>
            </locationStateContext.Provider>
          </themeStateContext.Provider>
        </languageStateContext.Provider>
      </SideBarContext.Provider>
    </div>
  );
};

export default App;
