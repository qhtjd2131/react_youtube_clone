import React from "react";
import "./App.scss";

// import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import SideBar from "./Side/SideBar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <SideBar />
    </div>
  );
};

export default App;
