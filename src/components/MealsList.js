import React from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MealList = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (meals.length < 1) {
    return <h2 className="section-title">no meals matched your search term</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">meals</h2>
      <div className="meals-center">
        {meals.map((meal) => {
          return <Meal key={meal.id} {...meal} />;
        })}
      </div>
    </section>
  );
};

export default MealList;
