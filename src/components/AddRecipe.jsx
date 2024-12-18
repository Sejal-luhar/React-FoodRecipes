import React, { useState } from "react";
import NavBar from "./navBar";
import { useRecipes } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AddRecipe() {
  const [strMeal, setTitle] = useState("");
  const [strMealThumb, setImage] = useState("");
  const [strInstructions, setInstruction] = useState("");
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      idMeal: Date.now().toString(),
      strMeal,
      strInstructions,
      strMealThumb,
    };
    addRecipe(newRecipe);
    setImage("");
    setTitle("");
    setInstruction("");
    navigate("/");
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
        <div className="max-w-4xl w-full p-8 bg-white shadow-xl rounded-xl">
          <h1 className="text-4xl font-bold italic font-serif text-center text-orange-500 mb-10">
            Add a New Recipe
          </h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Recipe Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                value={strMeal}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Delicious Pasta..."
                className="w-full p-4 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#542C4B] focus:border-transparent"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Recipe Image URL
              </label>
              <input
                type="text"
                id="image"
                value={strMealThumb}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://image-link.jpg"
                className="w-full p-4 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#542C4B] focus:border-transparent"
              />
            </div>

            {/* Instructions */}
            <div>
              <label
                htmlFor="instructions"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Cooking Instructions
              </label>
              <textarea
                id="instructions"
                value={strInstructions}
                onChange={(e) => setInstruction(e.target.value)}
                rows="6"
                placeholder="Step-by-step cooking instructions..."
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#542C4B] focus:border-transparent"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-br from-red-500 via-orange-500 to-orange-300 text-white text-lg font-semibold rounded-3xl shadow-md hover:bg-[#3f1736] focus:outline-none focus:ring-2 focus:ring-[#542C4B] focus:ring-offset-2 transition-transform transform hover:scale-105"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddRecipe;
