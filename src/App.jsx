// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";
import MovieWatching from "./pages/MovieWatching";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./pages/Category";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthMiddleware from "./middleware/AuthMiddleware";
import GuestRoute from "./middleware/GuestRoute";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route
          path="/movie/watch/:id"
          element={
            <AuthMiddleware>
              <MovieWatching />
            </AuthMiddleware>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <GuestRoute>
              <SignUp />
            </GuestRoute>
          }
        />
        <Route path="/category/:genre" element={<Category />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <ToastContainer
        position="bottom-right" // <-- here
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
