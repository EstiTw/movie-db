import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import { useFetch } from "./useFetch";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { loading, data, searchTerm } = useGlobalContext();
  const [movies, setMovies] = useState([]);
  useFetch(`${API_ENDPOINT}&s=${searchTerm}`);

  useEffect(() => {
    if (data) {
      const { Search: movies } = data;
      setMovies(movies);
    }
  }, [data]);

  if (loading) return <div className="loading" />;

  return (
    <section className="movies">
      {movies &&
        movies.map((movie) => {
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
