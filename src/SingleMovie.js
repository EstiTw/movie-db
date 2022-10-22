import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import { useFetch } from "./useFetch";
import Error from "./Error";
import { useGlobalContext } from "./context";

const SingleMovie = () => {
  const { loading, data } = useGlobalContext();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useFetch(`${API_ENDPOINT}&i=${id}`);

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);

  if (loading) return <div className="loading" />;

  const { Title: title, Year: year, Plot: description, Poster: image } = movie;

  if (!title) return <Error />;

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
