import React, { useEffect } from "react";
import "../Content/css/Trending.css";
import { Link } from "react-router-dom";
const Genre = ({ genre }) => {
  
  
  
  



  return (
    <div className="genre">
      <h1>Genre</h1>
      <div className="genredata">
        {genre.map((val, i) => {
          return (
            <div className="genrebar" key={i}>
              <Link to={`/Category/${val.id}`} className="sjj" >
                {val.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Genre;
