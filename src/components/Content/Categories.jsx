import React, { useState, useEffect } from "react";
import "../Content/css/Trending.css";
import "../Content/css/Trendingmin.css";
import axios from "axios";
import Layout from "../Header/Layout/Layout";
import { useParams, Link } from "react-router-dom";

const Category = ({ genre }) => {
  let val = useParams();

  const imgpath = `https://image.tmdb.org/t/p/original/`;
  let [category, setCategory] = useState([]);
  let cat = category || [];
  let APiKEY = `63cf77803a5520db8357c863628edde9`;
  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APiKEY}&with_genres=${val.id}`
      )
      .then((res) => {
        setCategory(res.data.results);
      });
  }, []);

  return (
    <Layout>
      <div className="genre">
        <h1>Categories</h1>
        <div className="genredata">
          {cat.map((val, i) => {
            return (
              <div className="trendbar" key={i}>
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

export default Category;
