import React, { useState, useContext, useEffect } from "react";

import axios from "axios";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState();

  async function fetchMeals() {
    try {
      setIsloading(true);
      const resp = await axios(`${url}${searchTerm || ""}`, {
        headers: {
          Accept: "application/json",
        },
      });

      const { data } = resp;
      const loadedData = [];

      data.meals.map((meal) => {
        const newObj = {
          id: meal.idMeal,
          name: meal.strMeal,
          info: meal.strTags,
          category: meal.strCategory,
          area: meal.strArea,
          insturctons: meal.strInstructions,
          ingredients: [meal.strIngredient1],
          img: meal.strMealThumb,
        };

        loadedData.push(newObj);
      });
      setMeals(loadedData);
      setIsloading(false);
      return loadedData;
    } catch (error) {
      setIsloading(false);
      setMeals([]);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMeals();
  }, [setMeals, searchTerm]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setIsloading,
        meals,
        setSearchTerm,
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
