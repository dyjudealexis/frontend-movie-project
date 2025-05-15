import React from 'react';
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import MainSearch from './components/MainSearch';
import SEO from '../../components/SEO';

const Search = () => {
  return (
    <>
      <SEO
        title="Search - StreamFlix"
        description="Find your favorite movies, shows, and more on StreamFlix. Fast, accurate search results tailored to your tastes."
        keywords={['StreamFlix', 'movie search', 'TV shows', 'streaming', 'search movies', 'online streaming']}
      />
      <Header />
      <MainSearch />
      <Footer />
    </>
  );
};

export default Search;