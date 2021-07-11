import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Style from "./style.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const SubContainer = ({ title, url }) => {
  const [movie, setmovie] = useState([]);
  const [trailer, settrailer] = useState("");

  const fetch = useCallback(async () => {
    Axios.get(url).then((res) => setmovie((e) => res.data.results));
  }, []);
  console.log(movie, title);
  useEffect(() => {
    fetch();
  }, [fetch]);

  const opts = {
    height: "390",
    width: " 100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const play = (movie) => {
    if (trailer) {
      settrailer("");
    }
    console.log("enter");
    movieTrailer(movie.title || "")
      .then((it) => {
        const urlParas = new URLSearchParams(new URL(it).search);
        settrailer(urlParas.get("v"));
      })
      .catch((err) => console.log(err, "error"));
  };

  return (
    <div className={Style.container}>
      <div className={Style.title}>{title}</div>
      <div className={Style.poster}>
        {movie &&
          movie.map((it) => {
            if (it.poster_path)
              return (
                <img
                  className={Style.img}
                  src={`http://image.tmdb.org/t/p/w500/${it.poster_path}`}
                  onClick={() => play(it)}
                ></img>
              );
          })}
      </div>
      {trailer && (
        <div className={Style.youTube}>
          <button onClick={() => settrailer("")} className={Style.button}>
            cancel
          </button>
          <YouTube videoId={trailer} opts={opts}></YouTube>
        </div>
      )}
    </div>
  );
};

export default SubContainer;
