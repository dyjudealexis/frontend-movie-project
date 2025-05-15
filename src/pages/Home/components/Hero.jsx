import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const movieTitles = ["One Shot", "You're My Boss", "The Legend of Lake Hollow"];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsVisible(true);

    const fetchMovies = async () => {
      try {
        const requests = movieTitles.map((title) =>
          axiosInstance.get(`/api/movies/?search=${encodeURIComponent(title)}`)
        );
        const responses = await Promise.all(requests);
        const movieData = responses
          .map((res) => res.data[0]) // Get the first movie from the response
          .filter(Boolean); // Filter out any null or undefined values

        setMovies(movieData);
        setLoading(false); // Set loading to false once data is fetched
      } catch {
        // console.error("Failed to fetch movies:", error);
        setLoading(false); // In case of an error, stop loading
        toast.error("Failed to fetch movies.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div
          id="heroCarousel"
          className="carousel carousel-fade"
          data-bs-ride="carousel"
          // data-bs-interval={5000}
        >
          <div className="carousel-inner">
            {/* Show loading state while fetching movies */}
            {loading ? (
              <div
                className="col-12 d-flex align-items-center justify-content-center"
                style={{ minHeight: "75vh" }}
              >
                <div className="spinner-border text-white" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              movies.map((movie, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={movie.id}
                >
                  <div
                    className="hero__items set-bg"
                    style={{ backgroundImage: `url(${movie.feature_img_url})` }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className={`hero__text ${isVisible ? "show" : ""}`}
                        >
                          <div className="label">
                            {movie.genre?.split(",")[0] || "Movie"}
                          </div>
                          <h2 className="shadow-hero">{movie.title}</h2>
                          <p className="shadow-hero">{movie.description}</p>
                          <Link to={`/movie/details/${movie.id}`}>
                            <span>Watch Now</span>{" "}
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Controls */}
          <button
            className={`carousel-control-prev ${loading ? 'd-none': ''}`}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next ${loading ? 'd-none': ''}`}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
