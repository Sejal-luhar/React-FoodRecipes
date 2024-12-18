import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation(); // Get the current location (route)

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update local state
    onSearch(value); // Pass value to parent component's search handler
  };

  // Determine background and text color based on the route
  const isRecipesPage = location.pathname === "/recipes";
  const navBackgroundColor = isRecipesPage ? "bg-white" : "bg-[#542C4B]";
  const navTextColor = isRecipesPage ? "text-[#542C4B]" : "text-white";

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${navBackgroundColor} ${navTextColor} py-4 shadow-md`}>
      <div className="container mx-auto gap-8 flex justify-between items-center px-4 md:px-12">
        {/* Left Logo */}
        <Link
          to="/"
          className="text-3xl font-serif font-bold tracking-wide text-orange-300 hover:text-gray-300 transition duration-300"
        >
          pinch<span className="text-orange-600 italic">of</span>yum
        </Link>

        {/* Center Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className={`text-sm hover:font-semibold transition duration-300 ${isActive("/") ? "text-orange-500" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-sm hover:font-semibold transition duration-300 ${isActive("/about") ? "text-orange-500" : ""}`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className={`text-sm hover:font-semibold transition duration-300 ${isActive("/recipes") ? "text-orange-500" : ""}`}
            >
              RECIPES
            </Link>
          </li>
          <li>
            <Link
              to="/addrecipe"
              className={`text-sm hover:font-semibold transition duration-300 ${isActive("/addrecipe") ? "text-orange-500" : ""}`}
            >
              START HERE
            </Link>
          </li>
        </ul>

        {/* Right Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-3xl overflow-hidden shadow-sm shadow-gray-200">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 w-72 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
