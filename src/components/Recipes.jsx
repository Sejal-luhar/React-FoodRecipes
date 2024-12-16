import React, { useState } from "react";
import { useRecipes } from "../context/RecipeContext"; // Import the context hook
import NavBar from "./navBar";
import Footer from "./Footer";

// Recipe Data fetching from Context
const Recipes = () => {
  const { recipes, status, error } = useRecipes(); // Use the recipes from context
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to store the selected recipe for detailed view

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term on input change
  };

  // Filtered recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle recipe card click to show full recipe details
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe to show details
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  if (status === "failed") {
    return <div>Error: {error}</div>; // Show error if there is an issue with fetching
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <NavBar onSearch={handleSearch} />

      {/* Recipes Section */}
      <section className="bg-[#542C4B] text-white text-center py-16 px-4">
        <p className="text-sm mb-4 opacity-80">PINCH OF YUM &gt; RECIPES</p>
        <h2 className="text-4xl text-orange-500 font-bold mb-6">Recipes</h2>
        <p className="max-w-xl mx-auto text-base mb-8">
          We’ve organized these recipes every way we could think of so you don't have to! Dietary
          restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true... no
          matter how you browse, we’re sure you’ll find just what you were looking for.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search by keyword"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full max-w-md px-4 py-2 text-gray-700 rounded focus:outline-none"
          />
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-20 text-center">
        <h3 className="text-xl font-bold mb-4 text-[#542C4B]">TOP RATED RECIPES</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Out of all the many recipes on Pinch of Yum, these are our shining stars - the best of the best!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="text-left cursor-pointer"
              onClick={() => handleRecipeClick(recipe)} // Trigger the recipe click
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-md font-bold text-[#542C4B]">{recipe.strMeal}</h4>
              <div className="flex items-center text-yellow-500">
                {"★".repeat(Math.floor(4.6))}{" "}
                <span className="text-gray-500 ml-2">
                  1,797 REVIEWS / 4.6 AVERAGE
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Show Full Recipe Modal or Popup */}
      {selectedRecipe && (
        <div
          className="fixed py-20  top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedRecipe(null)} // Close modal when clicking outside
        >
          <div
            className="bg-white  p-6 rounded-lg  w-[800px]"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <h2 className="text-3xl font-bold mb-4">{selectedRecipe.strMeal}</h2>
            <img
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <p className="text-lg mb-4">{selectedRecipe.strInstructions}</p>
            <button
              onClick={() => setSelectedRecipe(null)}
              className="bg-[#542C4B] text-white px-6 py-2 rounded-full hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
         <section className="py-8 px-4 text-center">
        <h3 className="text-2xl font-bold text-[#542C4B] mb-8">Browse Recipes</h3>

        <div className="px-44">
          {/* Recipes By Course */}
          <div >
            <h4 className="text-lg text-left font-bold  text-[#542C4B] mb-4">RECIPES BY COURSE</h4>
            <hr />
            <ul className="text-gray-700 my-6 space-y-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li>• Appetizer</li>
              <li>• Soups</li>
              <li>• Salads</li>
              <li>• Sides</li>
              <li>• Desserts</li>
              <li>• Snacks</li>
              <li>• Baking</li>
              <li>• Sandwiches</li>
              <li>• Main Dishes</li>
            </ul>
          </div>

          {/* Recipes By Diet */}
          <div>
            <h4 className="text-lg text-left font-bold text-[#542C4B] mb-4">RECIPES BY DIET</h4>
            <hr />
            <ul className="text-gray-700 my-6 space-y-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li>• Dairy-Free</li>
              <li>• Gluten-Free</li>
              <li>• Healthy</li>
              <li>• Sugar-Free</li>
              <li>• Vegan</li>
              <li>• Vegetarian</li>
            </ul>
          </div>

          {/* Recipes By Season */}
          <div>
            <h4 className="text-lg font-bold text-left text-[#542C4B] mb-4">RECIPES BY SEASON</h4>
            <hr />
            <ul className="text-gray-700 my-6 space-y-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li>• Spring</li>
              <li>• Summer</li>
              <li>• Fall</li>
              <li>• Winter</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Recipes;
