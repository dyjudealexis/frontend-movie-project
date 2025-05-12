import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { useLocation } from "react-router-dom";

const MovieLists = ({ genre = "", limit = 8 , search = "" }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isCategoryPage = location.pathname.includes("/category");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (genre == "You may also like" || (genre == "Popular movies" && search == "")) {
          const response = await axiosInstance.get(
            `/api/movies/?limit=${limit}`
          );

          setMovies(response.data);
        } 
        else if (search !== ""){
          const response = await axiosInstance.get(
            `/api/movies/?search=${search}`
          );

          setMovies(response.data);
        }
        else {
          const response = await axiosInstance.get(
            `/api/movies/?genre=${genre}&limit=${limit}`
          );

          setMovies(response.data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // <-- Stop loading after fetch
      }
    };

    fetchMovies();
  }, [genre, limit, search]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>{search ? `Search Results` : genre.charAt(0).toUpperCase() + genre.slice(1)}</h4>
                  </div>
                </div>
                {!isCategoryPage && !search && genre !== "You may also like" && genre !== "Popular movies" && (
                  <div className="col-lg-3 col-md-4 col-sm-4">
                    <div className="btn__all">
                      <Link to={`/category/${genre}`} className="primary-btn">
                        View All <span className="arrow_right"></span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="row">
                {loading ? (
                  <div
                    className="col-12 d-flex align-items-center justify-content-center"
                    style={{ minHeight: "75vh" }}
                  >
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div>
                ) : movies.length > 0 ? (
                  movies.map((movie) => (
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 mb-2"
                      key={movie.id}
                    >
                      <div className="product__item">
                        <Link
                          to={`/movie/details/${movie.id}`}
                          rel="noopener noreferrer"
                        >
                          <div
                            className="product__item__pic set-bg"
                            style={{
                              backgroundImage: `url(${movie.poster_url})`,
                            }}
                          ></div>
                        </Link>

                        <div className="product__item__text">
                          <ul className="d-flex gap-1">
                            {movie.genre.split(",").map((g, index) => (
                              <li key={index}>{g.trim()}</li>
                            ))}
                          </ul>
                          <h5>
                            <Link
                              to={`/movie/details/${movie.id}`}
                              rel="noopener noreferrer"
                            >
                              {movie.title}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p className="text-white">No movies found for search: {search}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieLists;
