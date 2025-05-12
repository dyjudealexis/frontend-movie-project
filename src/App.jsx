// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './pages/MovieDetails';
import MovieWatching from './pages/MovieWatching';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Category from './pages/Category';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/movie/watch/:id" element={<MovieWatching />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/category/:genre" element={<Category />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
