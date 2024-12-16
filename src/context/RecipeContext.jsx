import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setStatus("loading");
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        setStatus("succeeded");
        setRecipes(response.data.meals);
      } catch (err) {
        setStatus("failed");
        setError(err.message);
      }
    };

    fetchRecipes();
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  const editRecipe = (id, updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((recipe) => (recipe.idMeal === id ? updatedRecipe : recipe))
    );
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.idMeal !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, status, error, addRecipe, editRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  return useContext(RecipeContext);
};