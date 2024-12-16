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
  const navigate=useNavigate();

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
    navigate('/')
  }

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold font-serif italic underline text-center text-orange-700 mb-6">
          Add New Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={strMeal}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Delicious Pasta..."
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={strMealThumb}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://image-link.jpg"
            />
          </div>

          {/* Instructions */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-lg font-medium text-gray-700"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={strInstructions}
              onChange={(e) => setInstruction(e.target.value)}
              rows="6"
              placeholder="Step-by-step cooking instructions..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#542C4B] text-white font-semibold rounded-md hover:bg-[#3f1736] focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default AddRecipe;
