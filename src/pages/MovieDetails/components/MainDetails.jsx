import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
import { getPageLabel } from "../../../utils/getPageLabel";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import SEO from "../../../components/SEO";

const MainDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const currentPath = Cookies.get("currentPath");
  const navigate = useNavigate();

  // Save current path for "Back To" button
  const watchNowFunction = (id) => {
    Cookies.set("currentPath", window.location.pathname);
    navigate(`/movie/watch/${id}`);
  };

  useEffect(() => {
    // Fetch movie details
    const fetchMovie = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/movies/${id}`);
        setMovie(data);
      } catch {
        toast.error("Failed to fetch movie details.");
      }
    };
    fetchMovie();
  }, [id]);

  // Fallback SEO values
  const fallbackTitle = "Loading movie… | StreamFlix";
  const fallbackDescription = "Discover movie details and stream your favorites on StreamFlix.";
  const seoTitle       = movie ? movie.title           : fallbackTitle;
  const seoDescription = movie ? movie.description     : fallbackDescription;
  const seoKeywords    = [
    "movies",
    "streaming",
    "StreamFlix",
    movie ? movie.genre : "",      // optionally include genre when available
    "watch online",
  ];

  return (
    <>
      {/* Always render SEO immediately with fallback, then update when `movie` is set */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords.filter(Boolean)}
      />

      {/* Show spinner while loading */}
      {!movie ? (
        <Spinner />
      ) : (
        <section className="anime-details spad" style={{ minHeight: "100vh" }}>
          <div className="container">
            <div className="anime__details__content">
              <div className="mb-4">
                <Link to={currentPath} className="primary-btn">
                  <span className="arrow_left"></span> Back To {getPageLabel()}
                </Link>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="anime__details__pic set-bg"
                    style={{ backgroundImage: `url(${movie.poster_url})` }}
                  />
                </div>
                <div className="col-lg-9">
                  <div className="anime__details__text">
                    <div className="anime__details__title">
                      <h3>{movie.title}</h3>
                      <span>{movie.director}</span>
                    </div>
                    <p>{movie.description}</p>
                    <div className="anime__details__widget">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li><span>Genre:</span> {movie.genre}</li>
                            <li><span>Cast:</span> {movie.casts}</li>
                            <li>
                              <span>Release Date:</span>{" "}
                              {new Date(movie.release_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li><span>Language:</span> {movie.language}</li>
                            <li><span>Country:</span> {movie.country}</li>
                            <li><span>Type:</span> {movie.type}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="anime__details__btn">
                      <button
                        onClick={() => watchNowFunction(movie.id)}
                        className="watch-btn"
                      >
                        <span>Watch Now</span> <i className="fa fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Future: <Comments /> <RecommendMovies /> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MainDetails;
