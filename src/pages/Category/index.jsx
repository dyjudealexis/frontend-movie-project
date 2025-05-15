// src/components/Home.js
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MovieLists from "../../components/MovieLists";
import { useParams } from "react-router-dom";
import SEO from "../../components/SEO";
import toSentenceCase from "../../utils/toSentenceCase";

function Category() {
  const { genre } = useParams();

  useEffect(() => {
    const pathname = window.location.pathname;
    Cookies.set("currentPath", pathname);
  }, [genre]);

  // Dynamically set page title and description based on genre
  const pageTitle = `Category - ${toSentenceCase(genre)}`;

  const pageDescription = genre
    ? `Watch the best ${genre} movies on StreamFlix. Stream top-rated and trending titles now.`
    : "Browse all genres and stream top-rated movies on StreamFlix.";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={[genre, "movies", "streaming", "StreamFlix"]}
      />
      <Header />
      <div className="mt-5"></div>
      <MovieLists genre={genre} limit={15} />
      <Footer />
    </>
  );
}

export default Category;
