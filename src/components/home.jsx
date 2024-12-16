import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { useRecipes } from "../context/RecipeContext";
import Footer from "./Footer";

function HomePage() {
  const { recipes } = useRecipes();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes); // Filtered list of recipes

  // Update filtered recipes whenever the original recipes change
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  // Function to handle the search input
  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  // Categories for the navigation section
  const categories = [
    { name: "Quick and Easy", image: "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-5-96x96.jpg" },
    { name: "Dinner", image: "https://pinchofyum.com/wp-content/uploads/Bang-Bang-Salmon-with-Rice-and-Cucumber-96x96.jpg" },
    { name: "Vegetarian", image: "https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-96x96.jpg" },
    { name: "Healthy", image: "https://pinchofyum.com/wp-content/uploads/Spicy-Peanut-Chicken-Salad-Soba-1-2-96x96.jpg" },
    { name: "Instant Pot", image: "https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-96x96.jpg" },
    { name: "Vegan", image: "https://pinchofyum.com/wp-content/uploads/Family-Style-Pitas-2-96x96.jpg" },
    { name: "Meal Prep", image: "https://pinchofyum.com/wp-content/uploads/Spicy-Short-Rib-Noodle-Soup-3-96x96.jpg" },
    { name: "Soups", image: "https://pinchofyum.com/wp-content/uploads/Kale-Apple-Salad-6-2-96x96.jpg" },
  ];

  return (
    <>
      <NavBar onSearch={handleSearch} /> {/* Pass search handler */}
      
      {/* Category Navigation Section */}
      <section className="py-8 px-4">
        <div className="flex justify-center flex-wrap gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-22 h-22 object-cover rounded-full border-2 border-gray-200 shadow-sm"
              />
              <p className="mt-2 text-sm font-bold text-gray-700">
                {category.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Title Section */}
      <h1 className="text-center font-serif italic text-4xl font-bold text-orange-500 my-8">
        Best Food Recipes
      </h1>

      {/* Search Bar Section */}
      <section className="flex justify-center items-center py-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search our recipes"
            className="p-3 w-72 border-2 border-gray-300 rounded-l-md focus:outline-none"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="bg-[#542C4B] text-white px-3 border-2 border-gray-400 py-3  rounded-r-md hover:bg-[#36142e]">
            + VIEW ALL RECIPES
          </button>
        </div>
      </section>

      {/* Recipe Cards Section */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-12">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2 text-gray-700">
                  {recipe.strMeal}
                </h5>
                <Link
                  to={`/recipedetail/${recipe.idMeal}`}
                  className="inline-block bg-[#542C4B] text-white text-sm px-4 py-2 rounded hover:bg-[#3f1635] transition duration-300"
                >
                  Show Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No recipes found.</p>
      )}

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default HomePage;
