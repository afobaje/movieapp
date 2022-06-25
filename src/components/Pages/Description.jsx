import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../Header/Layout/Layout";
import "../Pages/css/Description.css";
import '../Pages/css/Descriptionmin.css'
import { useParams } from "react-router-dom";

const Description = () => {
  let [desc, setDesc] = useState([]);
  let [error, setError] = useState();
  let uniqueid = useParams();
  const imgpath = `https://image.tmdb.org/t/p/original/`;
  const APiKEY = `63cf77803a5520db8357c863628edde9`;
  let param = `https://api.themoviedb.org/3/movie/${uniqueid.id}?api_key=${APiKEY}&language=en-US`;
  let gen = desc.genres || [];
  let lang = desc.spoken_languages || [];
  let genre = desc.genres || [];
  let prod = desc.production_companies || [{ name: "none" }];
  let country = desc.production_countries || [];
  function getData(string, setter) {
    axios
      .get(string)
      .then((res) => {
        setter(res.data);
      })
      .catch((err) => setError(err));
  }

  useEffect(() => {
    getData(param, setDesc);
  }, []);

  let date =
    desc.release_date !== undefined &&
    desc.release_date.split("").slice(0, 4).join("");

  return (
    <Layout>
      {desc ? (
        <div className="desc">
          <header
            className="deschead"
            style={{ backgroundImage: `url(${imgpath}${desc.backdrop_path})` }}
          >
            <div className="hbody">
              <div className="imgcon">
                <img src={`${imgpath}${desc.poster_path}`} alt="" />
              </div>
              <div className="cinfo">
                <h1>
                  {desc.original_title} ({date})
                </h1>
                <div className="medic">
                  {desc.release_date}|
                  <div>
                    {gen.map((val, i) => {
                      return (
                        <Fragment key={i}>
                          {val.name}
                          {", "}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="overview">{desc.overview}</div>
              </div>
            </div>
          </header>
          <div className="challenge">
            <div className="imgcarry">
              <img src={`${imgpath}${desc.poster_path}`} alt="" />
            </div>
            <div className="detailedbody">
              <div className="desctitle">
                <h3>Title</h3>
                <p>
                  {" "}
                  {desc.title} ({date})
                </p>
              </div>
              <div className="releasedate">
                <h3>Release Date</h3>
                {desc.release_date}
              </div>
              <div className="view">
                <h3>Overview</h3>
                {desc.overview}
              </div>
              <div className="genress">
                <h3>Genre</h3>{" "}
                <p>
                  {genre.map((val, i) => {
                    return <Fragment key={i}>{val.name}, </Fragment>;
                  })}
                </p>
              </div>
              <div className="rating">{desc.vote_average}</div>
              <div className="lang">
                <h3>Language</h3>{" "}
                <p>
                  {lang.map((val, i) => {
                    return <Fragment key={i}>{val.english_name}, </Fragment>;
                  })}
                </p>
              </div>
              <div className="prodcomp">
                <h3>Production Companies</h3>
                <div>
                  <ul className="points">
                    {prod.map((val, i) => {
                      return <li key={i}>{val.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="prodcountries">
                <h3>Production Countries</h3>
                <div>
                  <ul className="points">
                    {country.map((val, i) => {
                      return <li key={i}>{val.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="rev">
                F<h3>Revenue</h3>
                <p>${new Intl.NumberFormat().format(desc.revenue || 0)}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </Layout>
  );
};

export default Description;
