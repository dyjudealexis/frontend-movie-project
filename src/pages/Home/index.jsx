// src/components/Home.js
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MovieLists from "../../components/MovieLists";

function Home() {
  useEffect(() => {
    const pathname = window.location.pathname;
    Cookies.set("currentPath", pathname);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <div className="mt-5"></div>
      <MovieLists genre="action" />
      <MovieLists genre="horror" />
      <MovieLists genre="fantasy" />
      <MovieLists genre="drama" />
      <Footer />
    </>
  );
}

export default Home;
