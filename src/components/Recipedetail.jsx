import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";
import Footer from "./Footer";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe, editRecipe } = useRecipes();

  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(null);

  const recipe = recipes.find((r) => r.idMeal === id);

  useEffect(() => {
    if (recipe) {
      setEditedRecipe(recipe);
    }
  }, [recipe]);

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <p className="text-lg font-semibold text-gray-700">Loading recipes...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <>
        <NavBar />
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recipe Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Back to Recipes
          </button>
        </div>
      </>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    if (editedRecipe) {
      editRecipe(id, editedRecipe);
      setIsEditing(false);
    } else {
      console.error("Edited recipe is undefined");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-10 px-6">
        <div className="bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-xl overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-full object-cover rounded-t-xl md:rounded-none md:rounded-l-xl"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
                {recipe.strMeal}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {recipe.strInstructions}
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              <button
                onClick={handleEdit}
                className="bg-gradient-to-br from-red-600 shadow-gray-600 to-orange-400 text-white px-5 py-3 rounded-3xl shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105"
              >
                Edit Recipe
              </button>
              <button
                onClick={handleDelete}
                className="bg-gradient-to-br from-red-600 shadow-gray-600 to-red-400 text-white px-5 py-3 rounded-3xl shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
              >
                Delete Recipe
              </button>
            </div>
          </div>
        </div>
      </div>

      {isEditing && editedRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-11/12 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Edit Recipe
            </h2>
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="strMeal"
                  value={editedRecipe.strMeal || ""}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Recipe Instructions
                </label>
                <textarea
                  name="strInstructions"
                  value={editedRecipe.strInstructions || ""}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gradient-to-br from-gray-500 to-gray-200 shadow-gray-600 shadow-md px-8 py-3 rounded-3xl hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="bg-gradient-to-br from-orange-600 shadow-gray-600 to-orange-400 text-white px-5 py-3 rounded-3xl shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default RecipeDetail;
