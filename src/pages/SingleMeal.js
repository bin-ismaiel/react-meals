import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMeal = () => {
  const { mealId } = useParams();
  const [loading, setloading] = useState(false);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        setloading(true);
        const resp = await axios(`${url}${mealId}`, {
          headers: {
            Accept: "application/json",
          },
        });

        const { data } = resp;
        let loadedData;
        if (data.meals) {
          data.meals.map((meal) => {
            const ingredients = [];
            for (let i = 1; i < 16; i++) {
              if (meal[`strIngredient${i}`]) {
                ingredients.push(meal[`strIngredient${i}`]);
              }
            }
            const newObj = {
              id: meal.idMeal,
              name: meal.strMeal,
              info: meal.strTags,
              category: meal.strCategory,
              area: meal.strArea,
              insturctons: meal.strInstructions,
              ingredients: ingredients,
              img: meal.strMealThumb,
            };

            loadedData = newObj;
          });
          console.log(loadedData);
          setloading(false);
          setMeal(loadedData);
        } else {
          setMeal(null);
          setloading(false);
        }
      } catch (error) {
        setloading(false);
        console.log(error);
      }
    }
    fetchMeal();
  }, [mealId]);

  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h1 className="section-title">No Meal to display</h1>;
  }
  return (
    <section className="section meal-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{meal.name}</h2>
      <div className="food">
        <img src={meal.img} alt="A1" />
        <div className="food-info">
          <p>
            <span className="food-data">name :</span> {meal.name}
          </p>
          <p>
            <span className="food-data">category :</span> {meal.category}
          </p>

          <p>
            <span className="food-data">area :</span> {meal.area}
          </p>
          <p>
            <span className="food-data">instructons :</span> {meal.insturctons}
          </p>
          <p>
            <span className="food-data">ingredients :</span>
            {meal.ingredients.map((item, idx) => {
              return <span key={idx}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMeal;
