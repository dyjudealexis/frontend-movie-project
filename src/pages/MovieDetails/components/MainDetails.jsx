import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
import { getPageLabel } from "../../../utils/getPageLabel";
import Cookies from 'js-cookie';

const MainDetails = () => {
  const { id } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null);
  const currentPath = Cookies.get('currentPath');
  const navigate = useNavigate();

  const watchNowFunction = (id) => {
    const pathname = window.location.pathname;
    Cookies.set("currentPath", pathname);

    navigate(`/movie/watch/${id}`);
  }

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axiosInstance.get(`/api/movies/${id}`);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie)
    return (
      <>
        <Spinner />
      </>
    );

  return (
    <section className="anime-details spad" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="anime__details__content">
          <div className="mb-4">
            <Link to={currentPath} className="primary-btn">
              <span className="arrow_left"></span> Back To {`${getPageLabel()}`}
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div
                className="anime__details__pic set-bg"
                style={{ backgroundImage: `url(${movie.poster_url})` }}
              ></div>
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
                        <li>
                          <span>Genre:</span> {movie.genre}
                        </li>
                        <li>
                          <span>Cast:</span> {movie.casts}
                        </li>
                        <li>
                          <span>Release Date:</span>{" "}
                          {new Date(movie.release_date).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "short", day: "numeric" }
                          )}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>
                          <span>Language:</span> {movie.language}
                        </li>
                        <li>
                          <span>Country:</span> {movie.country}
                        </li>
                        <li>
                          <span>Type:</span> {movie.type}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="anime__details__btn">
                  <button
                    onClick={() => watchNowFunction(`${movie.id}`)}
                    className="watch-btn"
                  >
                    <span>Watch Now</span> <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Future components like Comments and RecommendMovies */}
          {/* <div className="row mt-5">
            <Comments />
            <RecommendMovies />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MainDetails;
