// src/components/Home.js
import React from "react";
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MainMovie from "./components/MainMovie";
import MovieLists from "../../components/MovieLists";

function MovieWatching() {
  return (
    <>
      <Header />
      <MainMovie />
      <MovieLists genre="You may also like" showViewAll={false} />
      <Footer />
    </>
  );
}

export default MovieWatching;
