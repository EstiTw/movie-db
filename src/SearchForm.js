import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm, errorMessage } = useGlobalContext();
  //using useRef (uncontrolled input) for the focus() function
  const searchValue = useRef("");

  const searchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className="section search-form">
      <h2>search movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          id="name"
          placeholder="batmen"
          ref={searchValue}
          onChange={searchMovie}
        />
      </form>
      <p className="error">{errorMessage}</p>
    </section>
  );
};

export default SearchForm;
