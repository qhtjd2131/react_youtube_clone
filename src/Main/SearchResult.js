import React from "react";
import { useLocation } from "react-router";
import "./SearchResult.scss";

const SearchResult = ({}) => {
  const a = useLocation();
  console.log(a);
  return (
    <div className="search-result">
      {" "}
      hello world im search result
      <br />
      <div>{a.search}</div>
    </div>
  );
};

export default SearchResult;
