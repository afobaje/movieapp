import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import axios from "axios";

import Layout from "./components/Header/Layout/Layout";
import Trending from "./components/Content/Trending";
import Genre from "./components/Content/Genre";
import Movie from "./components/Content/Movie";
import Tv from "./components/Content/Tv";

// let datarequest=`http://www.omdbapi.com/?apikey=${APIKEY}&`;
// let poster_request=`http://img.omdbapi.com/?apikey=${APIKEY}&`;
// let def = `https://api.themoviedb.org/3/movie/550?api_key=${APIKEY}`;
function App() {
  let [data, setData] = useState([]);
  let [trending, setTrending] = useState([]);
  let [seasons, setSeasons] = useState([]);
  let [genre, setGenre] = useState([]);
  let [movie, setMovie] = useState([]);
  let [tv, setTv] = useState([]);
  
  let APiKEY = `63cf77803a5520db8357c863628edde9`;
  let seasonsession = `https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=${APiKEY}&language=en-US`;
  let imgpath = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=63cf77803a5520db8357c863628edde9`
      )
      .then((res) => {
        
        setData(res.data);
      });
  }, []);

  function getData(string, setter) {
    axios
      .get(string)
      .then((res) => {
      
        setter(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APiKEY}`,
      setTrending
    );
  }, []);

 

  let prob = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APiKEY}&language=en-US`;
  let genresess = `https://api.themoviedb.org/3/genre/tv/list?api_key=${APiKEY}&language=en-US`;
  useEffect(() => {
    axios
      .get(prob)
      .then((res) => {
        setGenre(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APiKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //television
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${APiKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      )
      .then((res) => {
      
        setTv(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
    <div className="App">
      <Header value={data} />
      <Trending trend={trending || []} />
      <Genre genre={genre || []} />
      <Movie Movies={movie || []} />
      <Tv TV={tv} />
    </div>
   </Layout>
  );
}

export default App;
