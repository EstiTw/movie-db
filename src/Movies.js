import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { loading, movies } = useGlobalContext();

  if (loading) return <div className="loading" />;

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { Poster: image, Title: title, Year: year, imdbID: id } = movie;
        return (
          <Link to={`/movies/${id}`} key={id}>
            <article className="movie">
              <img src={image || url} alt={title} />
              <div className="movie-info">
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
