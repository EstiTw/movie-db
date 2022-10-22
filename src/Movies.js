import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { loading, movies } = useGlobalContext();

  if (loading) return <h2>Loading..</h2>;
  if (movies.length < 1)
    return <h2>no cocktails matched your search criteria</h2>;
  console.log(movies);

  return (
    <section className="movies">
      {movies.map((movie) => {
        const {
          Poster: poster,
          Title: title,
          Type: type,
          Year: year,
          imdbID: id,
        } = movie;
        return (
          <Link to={`/movies/${id}`}>
            <article key={id} className="movie">
              <img src={poster || url} alt={title} />
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
