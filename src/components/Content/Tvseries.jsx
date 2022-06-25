import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../Content/css/Trending.css";
import axios from 'axios'
import Layout from "../Header/Layout/Layout";
const Tvseries = () => {
  let imgpath = `https://image.tmdb.org/t/p/original/`;

  let [series,setSeries]=useState([])

  const APiKEY = `63cf77803a5520db8357c863628edde9`;
  let modseries=series||[]

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${APiKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      )
      .then((res) => {
        console.log("TV", res);
        setSeries(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <Layout>
    <div className="trendname">
      <h1 className="trend">Tv Series</h1>
      <div className="trenddata">
        {modseries.map((val, i) => {
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

export default Tvseries;
