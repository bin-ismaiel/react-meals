import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const search = useRef();
  useEffect(() => {
    search.current.focus();
  }, []);
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search your favorite meal</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={search}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
