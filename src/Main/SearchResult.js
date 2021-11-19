import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./SearchResult.scss";
import { themeStateContext, SideBarContext } from "../App";

const SearchResult = () => {
  const [queryString, setQueryString] = useState();
  const location = useLocation();
  const { themeState } = useContext(themeStateContext);
  const { isOpenSideBar, isWindowSizeXL } = useContext(SideBarContext);

  //   console.log(location);

  useEffect(() => {
    setQueryString(() => {
      //query string이 한개일때만 가정
      let q = decodeURI(location.search).slice(1); // [q=apple]
      let firstEqualIndex = q.indexOf("=");
      const key = q.slice(0, firstEqualIndex); //q
      const value = q.slice(firstEqualIndex + 1); //apple
      return value;
    });
  }, [location.search]);
  return (
    <div
      className={
        isOpenSideBar && isWindowSizeXL
          ? "main main-" + themeState
          : "main side-close-main main-" + themeState
      }
    >
      <div className="search-result-container">hello</div>
    </div>
  );
};

export default SearchResult;
