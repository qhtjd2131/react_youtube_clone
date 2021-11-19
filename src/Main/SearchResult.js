import React from "react";
import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import "./SearchResult.scss";

const SearchResult = () => {
  const [queryString, setQueryString] = useState();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    let query = location.search.slice(1).split("&");
    setQueryString(() => decodeURI(location.search).slice(1).split("&"));
    console.log("query:", query);
  }, [location.search]);
  return (
    <div className="search-result">
      <div>hello world im search result</div>
      <br />
      <div>{queryString}</div>
    </div>
  );
};

export default SearchResult;
