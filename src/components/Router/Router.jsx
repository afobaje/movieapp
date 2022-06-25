import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import Category from "../Content/Categories";
import Movies from "../Content/Movies";
import Tvseries from "../Content/Tvseries";
import Description from "../Pages/Description";
import Search from "../Pages/search";
import Series from "../Pages/Series";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Description" element={<Description />}>
          <Route path=":id" element={<Description />} />
        </Route>
        <Route path="Series" element={<Series />}>
          <Route path=":id" element={<Series />} />
        </Route>
        <Route path="Search" element={<Search />}>
          <Route path=":id" element={<Search />} />
        </Route>
        <Route path="Category" element={<Category />}>
          <Route path=":id" element={<Category />} />
        </Route>
        <Route path="Movies" element={<Movies />} />
        <Route path="Tvseries" element={<Tvseries />} />

        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
