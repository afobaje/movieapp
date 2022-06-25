import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../Content/css/Trending.css";
import axios from 'axios'
import Layout from "../Header/Layout/Layout";
const Movies = () => {
  let imgpath = `https://image.tmdb.org/t/p/original/`;

  let [movies,setMovies]=useState([])

  const APiKEY = `63cf77803a5520db8357c863628edde9`;
  let modmovies=movies||[]

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APiKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        console.log("MOVIE", res);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
    <div className="trendname">
      <h1 className="trend">Movies</h1>
      <div className="trenddata">
        {modmovies.map((val, i) => {
          return (
            <div className="trendbar" key={i}>
              {/* <div className="colorbar"></div> */}
              <Link to={`/Description/${val.id}`} className="sjj">
                <div className="buuy">
                  {val.poster_path !== null && (
                    <img src={`${imgpath}${val.poster_path}`} alt="" />
                  )}
                  
                </div>
                <p>{val.title || val.original_name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    </Layout>
    
  );
};

export default Movies;
