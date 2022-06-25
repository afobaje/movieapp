import React, {  useState } from "react";
import "../Nav/css/nav.css";
import '../Nav/css/navmin.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let [searchValue, setSearchValue] = useState();

  let navigate = useNavigate();

  function open(e) {
    setSearchValue(e.target.value);
  }

  function getVal() {
    navigate(`/Search/${searchValue}`, { replace: true });
  }

  return (
    <nav className="bignav">
      <div className="logo">
        <h1>
          <Link className="links" to={`/`}>
            MOVIEAWESOME
          </Link>
        </h1>
      </div>
      <div className="searchcontext">
        <div className="superheroes">
          <input
            type="search"
            value={searchValue}
            placeholder="Search for a movie.."
            name=""
            id=""
            onChange={(e) => open(e)}
          />
        </div>
        <button className="stormzy" onClick={() => getVal()}>
          Search
        </button>
      </div>

      <ul className="limn">
        <li>
          <Link to="/Movies" className="links">
            MOVIE
          </Link>
        </li>
        <li>
          <Link to="/Tvseries" className="links">
            TV SHOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
