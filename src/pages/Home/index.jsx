// src/components/Home.js
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MovieLists from "../../components/MovieLists";
import SEO from "../../components/SEO";

function Home() {
  useEffect(() => {
    const pathname = window.location.pathname;
    Cookies.set("currentPath", pathname);
  }, []);

  return (
    <>
      <SEO
        title="StreamFlix - Watch Action, Horror, Fantasy, and Drama Movies"
        description="StreamFlix is your go-to platform for action-packed, spine-chilling, and emotionally gripping movies. Dive into fantasy worlds and dramatic tales today."
        keywords={[
          "StreamFlix",
          "movies",
          "action",
          "horror",
          "fantasy",
          "drama",
          "streaming",
        ]}
      />
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
