// src/components/Home.js
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MovieLists from "../../components/MovieLists";
import { useParams } from "react-router-dom";

function Category() {
  const { genre } = useParams();

  useEffect(() => {
    const pathname = window.location.pathname;
    Cookies.set("currentPath", pathname);
  }, [genre]); // <-- rerun effect when `genre` changes

  return (
    <>
      <Header />
      <div className="mt-5"></div>
      <MovieLists genre={genre} limit={15} />
      <Footer />
    </>
  );
}

export default Category;
