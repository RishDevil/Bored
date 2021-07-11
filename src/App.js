import Banner from "./Component/Banner/Banner";
import SubConatiner from "./Component/SubCon/SubContainer";
import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { popular, toprated, upcoming, discoverromance } from "./Utility/URL";

function App() {
  useEffect(() => {}, []);
  const scroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    console.log(scrollTop);
    if (scrollTop > 20) {
      let vr = document.querySelector(".appName");
      vr.style.backgroundColor = "rgba(0,0,0,.8)";
    } else {
      let vr = document.querySelector(".appName");
      vr.style.backgroundColor = "transparent";
    }
  };
  return (
    <div className="container">
      <div className="show" onScroll={scroll}>
        <div className="appName">Bored</div>
        <Banner url={popular} />
        <SubConatiner title={"Popular"} url={popular} />
        <SubConatiner title={"Top Rated"} url={toprated} />
        <SubConatiner title={"Upcoming"} url={upcoming} />
        <SubConatiner title={"Romantic"} url={discoverromance} />
      </div>
      <div className="load">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default App;
