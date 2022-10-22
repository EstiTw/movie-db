import React, { useState, useContext, useEffect, useCallback } from "react";
// make sure to use https
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("ba");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultMovies, setDefaultMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${searchTerm}`);
      const data = await response.json();
      const { Response } = data;
      if (Response === "False") {
        setErrorMessage(data.Error);
        setMovies(defaultMovies);
      } else {
        setMovies(data.Search);
        setErrorMessage("");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchMovies();
  }, [searchTerm, fetchMovies]);

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&s=batman`);
      const data = await response.json();
      const { Response } = data;
      if (Response === "False") {
        setDefaultMovies([]);
      } else {
        setDefaultMovies(data.Search);
        setMovies(data.Search);
        setErrorMessage("");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, movies, errorMessage, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
