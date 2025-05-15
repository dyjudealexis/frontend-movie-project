import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getPageLabel } from "../../../utils/getPageLabel";
import { getFirstItem } from "../../../utils/getFirstItem";
import { toast } from "react-toastify";
import SEO from "../../../components/SEO";

const MainMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovieData = (id) => {
    return axiosInstance.get(`/api/movies/${id}`).then((res) => res.data);
  };

  const backToFunction = (id, genre) => {
    Cookies.set("currentPath", `/category/${getFirstItem(genre)}`);
    // console.log(genre)

    navigate(`/movie/details/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    fetchMovieData(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Error fetching movie data.");
      });
  }, [id]);

  // Function to extract YouTube video ID
  const extractYouTubeVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      return params.get("v");
    } catch {
      //console.error("Invalid YouTube URL", error);
      toast.error("Invalid YouTube URL.");
      return null;
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const videoId = extractYouTubeVideoId(movie.movie_url);

  return (
    <>
      <SEO
        title={movie ? "Watch " + movie.title : "Loading Movie... | StreamFlix"}
        description={
          movie
            ? movie.description
            : "Browse movies and streaming details on StreamFlix."
        }
        keywords={[
          "movies",
          "streaming",
          "StreamFlix",
          "movie watch",
          "watch online",
        ]}
      />
      <section className="anime-details spad" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="mb-4">
            <button
              onClick={() => backToFunction(`${movie.id}`, `${movie.genre}`)}
              className="primary-btn"
            >
              <span className="arrow_left"></span> Back To{" "}
              {`${getPageLabel(movie.id)}`}
            </button>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="anime__video__player">
                {videoId && (
                  <iframe
                    width="100%"
                    height="463"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainMovie;
