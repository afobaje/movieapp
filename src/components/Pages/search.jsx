import React, { useEffect, useState } from "react";
import "../Content/css/Trending.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Layout from "../Header/Layout/Layout";

const Search = () => {
  let [searchval, setSearchval] = useState([]);
  let imgpath = `https://image.tmdb.org/t/p/original/`;
  let query = useParams();
  let APiKEY = `63cf77803a5520db8357c863628edde9`;
  let queried = encodeURIComponent(query.id);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${APiKEY}&language=en-US&page=1&query=${queried}&include_adult=false`
      )
      .then((res) => {
        console.log("al", res);
        setSearchval(res.data.results);
      });
  }, [query.id]);

  let results = searchval || [];

  return (
    <Layout>
      <div className="trendname">
        <h1 className="trend">Search Results for {query.id}</h1>
        <div className="trenddata">
          {results.map((val, i) => {
            return (
              <div className="trendbar" key={i}>
                <Link to={`/Description/${val.id}`} className="sjj">
                  <div className="buuy">
                    {val.poster_path !== null && (
                      <img src={`${imgpath}${val.poster_path}`} alt="" />
                    )}
                  </div>
                  <p>
                    {val.title || val.original_name}|{val.release_date}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
