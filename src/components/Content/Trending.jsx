import React from "react";
import "../Content/css/Trending.css";
import { Link } from "react-router-dom";

const Trending = ({ trend }) => {
  let imgpath = `https://image.tmdb.org/t/p/original/`;
  return (
    // {trend?():'loading'}
    <div className="trendname">
      <h1 className="trend">Trending</h1>
      <div className="trenddata">
        {trend.map((val, i) => {
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
  );
};

export default Trending;
