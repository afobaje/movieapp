import React from "react";
import { Link } from "react-router-dom";
import "../Content/css/Trending.css";
const Tv = ({ TV }) => {
  let imgpath = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className="trendname">
      <h1 className="trend">TV Series</h1>
      <div className="trenddata">
        {TV.map((val, i) => {
          return (
            <div className="trendbar" key={i}>
              <Link to={`/Series/${val.id}`} className="sjj">
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
  );
};

export default Tv;
