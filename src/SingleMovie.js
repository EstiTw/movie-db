import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import Error from "./Error";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&i=${id}`);
      const data = await response.json();
      const { Response } = data;
      if (Response === "False") {
        console.log("no movie");
        setMovie({});
      } else {
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (loading) return <div className="loading" />;

  const { Title: title, Year: year, Plot: description, Poster: image } = movie;
  if (!movie.title) return <Error />;
  console.log("movie", movie, movie == {});
  return (
    <section className="single-movie">
      <img src={image} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
