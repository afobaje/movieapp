import React from "react";
import { Link } from "react-router-dom";
import "../Content/css/Trending.css";
const Movie = ({ Movies }) => {
  let imgpath = `https://image.tmdb.org/t/p/original/`;
  return (
    
    <div className="trendname">
      <h1 className="trend">Movies</h1>
      <div className="trenddata">
        {Movies.map((val, i) => {
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
    
  );
};

export default Movie;
