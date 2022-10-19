import React from "react";
import axios from "axios";
import "./Banner.css";
import { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../constants/constant";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data.results[(1)]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : " "})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.name : ""} </h1>
        <div class  Name="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
