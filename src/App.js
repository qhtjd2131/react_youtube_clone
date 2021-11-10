import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
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
  const [bodyScrollY, setBodyScrollY] = useState(0);

  const b = useCallback(() => {});
  // useEffect(() => {
  //   const scrollHandler = () => {
  //     console.log("window scroll y :", window.scrollY);
  //   };
  //   window.addEventListener("scroll", scrollHandler);
  // });
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
    const a = window.scrollY * -1;

    if (!isWindowSizeXL && isOpenSideBar) {
      setBodyScrollY(a);

      document.body.classList.add("scroll-in-overlay");
      document.body.style.top = a + "px";
    } else {
      if (document.body.classList.toString().length > 0) {
        document.body.style.top = "0px";
        document.body.classList.remove("scroll-in-overlay");
        window.scrollTo(0, bodyScrollY * -1);
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
