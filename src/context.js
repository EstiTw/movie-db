import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
// console.log(API_ENDPOINT);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("ba");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("errorMessage", errorMessage, "movies", movies);

  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${searchTerm}`);
      const data = await response.json();
      const { Response } = data;
      // console.log(data, Response);
      if (Response === "False") {
        setErrorMessage(data.Error);
        setSearchTerm("batman");
      } else {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);
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
