import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
} from "react";
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
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isWindowSizeXL, setIsWindowSizeXL] = useState(true);
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
        <Header />
        <Main />
        <SideBar />
        {isOpenSideBar && !isWindowSizeXL && <Overlay />}
      </SideBarContext.Provider>
    </div>
  );
};

export default App;
