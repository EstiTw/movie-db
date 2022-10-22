import React, { useState, useContext } from "react";
// make sure to use https
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("batman");
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState({});

  return (
    <AppContext.Provider
      value={{
        loading,
        errorMessage,
        setSearchTerm,
        setLoading,
        data,
        searchTerm,
        setData,
        setErrorMessage,
      }}
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
