import React from "react";
import MealsList from "../components/MealsList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <MealsList />
    </main>
  );
};

export default Home;
