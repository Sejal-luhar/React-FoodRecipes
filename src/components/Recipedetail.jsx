import React from "react";
import NavBar from "./navBar";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";
import Footer from "./Footer";

function RecipeDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const { recipes, deleteRecipe } = useRecipes();
  const recipe = recipes.find((r) => r.idMeal === id);

  // Random time generator for "Last Updated"
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);

  if (!recipe) {
    return (
      <>
        <NavBar />
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Recipe not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Back to Recipes
          </button>
        </div>
      </>
    );
  }

  const handleDelete = () => {
    deleteRecipe(recipe.idMeal);
    navigate("/"); // Redirect back to the recipes list after deletion
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-10 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {recipe.strMeal}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {recipe.strInstructions}
              </p>
              <p className="text-sm text-gray-500">
                Last updated {randomHours} hours {randomMinutes} minutes ago
              </p>
            </div>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="bg-[#542C4B] text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 transition"
            >
              Delete Recipe
            </button>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
}

export default RecipeDetail;
