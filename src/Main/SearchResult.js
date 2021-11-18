import React from "react";
import "./SearchResult.scss";

const SearchResult = ({ match, location, history }) => {
  console.log("match");
  console.log(match);
  console.log("location");
  console.log(location);
  console.log("history");
  console.log(history);
  return <div className="search-result"> hello world im search result</div>;
};

export default SearchResult;
