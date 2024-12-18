import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { useRecipes } from "../context/RecipeContext";
import Footer from "./Footer";

function HomePage() {
  const { recipes } = useRecipes();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const categories = [
    {
      name: "Quick and Easy",
      image: "https://plus.unsplash.com/premium_photo-1669687759526-750edcfb6cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVpY2slMjBhbmQlMjBlYXN5JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Dinner",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlubmVyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Vegetarian",
      image: "https://plus.unsplash.com/premium_photo-1694860348839-4d0ba30c7bc6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Instant Pot",
      image: "https://plus.unsplash.com/premium_photo-1671485194462-38008d29471f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhbnQlMjBwb3QlMjBmb29kfGVufDB8fDB8fHww",
    },
    {
      name: "Vegan",
      image: "https://plus.unsplash.com/premium_photo-1698867577020-38ae235fd612?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBmb29kfGVufDB8fDB8fHww",
    },
    {
      name: "Meal Prep",
      image: "https://plus.unsplash.com/premium_photo-1700061780538-79192a193d2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVhbCUyMFByZXB8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Soups",
      image: "https://plus.unsplash.com/premium_photo-1669559809615-b08af364b738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvdXBzfGVufDB8fDB8fHww",
    },
  ];
  

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Find Your Next Favorite Recipe
          </h1>
          <p className="text-lg mb-6">
            Delicious, quick, and easy recipes for every occasion.
          </p>
          <Link to="/recipes" className="px-8 py-4 bg-orange-500 text-lg rounded-lg hover:bg-orange-600 transition">
            Browse Recipes
          </Link>
        </div>
      </div>

      <NavBar onSearch={handleSearch} />

      {/* Category Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-700">Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-6 md:px-16">
          {categories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="w-full h-40 bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${category.image})` }}></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg group-hover:bg-opacity-75 transition duration-300"></div>
              <h3 className="absolute inset-x-0 bottom-4 text-center text-white text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white flex justify-center items-center">
        <div className="flex items-center shadow-md rounded-md overflow-hidden">
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
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-700">Our Recipes</h2>
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-16">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">{recipe.strMeal}</h3>
                  <Link
                    to={`/recipedetail/${recipe.idMeal}`}
                    className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
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
