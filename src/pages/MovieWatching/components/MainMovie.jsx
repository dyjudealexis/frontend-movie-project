import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getPageLabel } from "../../../utils/getPageLabel";
import { getFirstItem } from "../../../utils/getFirstItem";

const MainMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const backToFunction = (id, genre) => {
    Cookies.set("currentPath", `/category/${getFirstItem(genre)}`);
    // console.log(genre)

    navigate(`/movie/details/${id}`);
  };

  useEffect(() => {
    axiosInstance
      .get(`/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data", error);
        setLoading(false);
      });
  }, [id]);

  // Function to extract YouTube video ID
  const extractYouTubeVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      return params.get("v");
    } catch (error) {
      console.error("Invalid YouTube URL", error);
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
    <section className="anime-details spad" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="mb-4">
          <button onClick={() => backToFunction(`${movie.id}`, `${movie.genre}`)} className="primary-btn">
            <span className="arrow_left"></span> Back To {`${getPageLabel(movie.id)}`}
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
  );
};

export default MainMovie;
