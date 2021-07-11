import React, { useState, useEffect, useCallback } from "react";
import Style from "./style.module.css";
import Axios from "axios";
const Banner = ({ url }) => {
  const [movie, setmovie] = useState();
  const fetch = useCallback(async () => {
    Axios.get(url).then((res) =>
      setmovie(
        (e) =>
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
      )
    );
  }, []);
  useEffect(() => {
    fetch();
  }, [fetch]);

  console.log(movie, "banner");
  return (
    <>
      {movie && (
        <div
          className={Style.container}
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}") `,
            backgroundPosition: "center center",
          }}
        >
          <div className={Style.detailCon}>
            {" "}
            <div className={Style.title}>{movie.title}</div>
            <div className={Style.des}>{movie.overview}</div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Banner;
