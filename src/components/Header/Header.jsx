import React from "react";
// import Nav from "./Nav/Nav";
import "../Header/css/Header.css";
import girl from "../Assets/aiony-haust-3TLl_97HNJo-unsplash-removebg-preview.png";
import Layout from "./Layout/Layout";
const Header = ({ value }) => {
  let desc = value;
  
  return (
    
      <header
        className="levitate">
        <div className="dua-lipa">
          <div className="fetty">
            <div className="imgbg">
              <img src={girl} alt="girl watching a movie" />
            </div>
            <div className="fsd">
              Discover the latest blockbuster before your friends
            </div>
          </div>
        </div>
      </header>
  
  );
};

export default Header;


