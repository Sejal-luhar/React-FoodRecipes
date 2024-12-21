import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { useRecipes } from "../context/RecipeContext";
import Footer from "./Footer";

function HomePage() {
  const { recipes } = useRecipes();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Track the search term
    const filtered = recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const categories = [
    // Your categories array remains unchanged...
  ];

  return (
    <>
      <NavBar onSearch={handleSearch} />

      {/* Search Results Section */}
      {searchTerm && (
        <section className="py-8 bg-gray-100">
          <h2 className="text-center text-xl font-semibold mb-8 text-gray-700">
            Search Results for "{searchTerm}"
          </h2>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-16">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="bg-transparent w-[220px] rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-52 rounded-full border-orange-500 border-4 object-contain"
                  />
                  <div className="py-2 text-center">
                    <h3 className="font-semibold text-gray-700">
                      {recipe.strMeal}
                    </h3>
                    <Link
                      to={`/recipedetail/${recipe.idMeal}`}
                      className="inline-block mt-4 mb-3 bg-gradient-to-br from-red-500 via-orange-500 to-orange-300 shadow-md shadow-gray-600 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No recipes found.
            </p>
          )}
        </section>
      )}

      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Find Your Next Favorite Recipe
          </h1>
          <p className="text-lg mb-6">
            Delicious, quick, and easy recipes for every occasion.
          </p>
          <Link
            to="/recipes"
            className="px-8 py-4 opacity-90 bg-gradient-to-br from-red-500 via-orange-500 to-orange-300 text-lg rounded-full hover:bg-orange-600 transition shadow-white"
          >
            Browse Recipes
          </Link>
        </div>
      </div>

      {/* Category Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-700">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-6 md:px-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group rounded-full shadow-md shadow-black overflow-hidden"
            >
              <div
                className="w-full h-44 bg-cover bg-center rounded-lg shadow-md"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-75 transition duration-300"></div>
              <h3 className="absolute inset-x-0 bottom-4 text-center text-white text-lg font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white flex justify-center items-center">
        <div className="flex items-center shadow-md shadow-gray-600 rounded-3xl overflow-hidden">
          <input
            type="text"
            placeholder="Search for recipes..."
            className="p-3 w-80 border-none outline-none text-gray-600"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-700">
          Our Recipes
        </h2>
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-16">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-transparent w-[220px] rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-52 rounded-full border-orange-500 border-4 object-contain"
                />
                <div className="py-2 text-center">
                  <h3 className="font-semibold text-gray-700">
                    {recipe.strMeal}
                  </h3>
                  <Link
                    to={`/recipedetail/${recipe.idMeal}`}
                    className="inline-block mt-4 mb-3 bg-gradient-to-br from-red-500 via-orange-500 to-orange-300 shadow-md shadow-gray-600 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No recipes found.</p>
        )}
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default HomePage;
