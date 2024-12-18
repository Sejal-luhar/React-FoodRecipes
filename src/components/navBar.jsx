import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import gsap from "gsap"; // Import GSAP

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    // GSAP continuous animation logic for the text
    const animateTitle = () => {
      gsap.to(".pinch", {
        x: 50, // Move "pinch" to the right
        opacity: 1,
        duration: 1.5, // Duration of each loop
        ease: "power2.inOut",
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation every time it loops
        delay: 0,
      });

      gsap.to(".of", {
        y: 50, // Move "of" from below
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.3, // Slight delay before "of" starts
      });

      gsap.to(".yum", {
        x: -50, // Move "yum" to the left
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.6, // Slight delay before "yum" starts
      });
    };

    animateTitle(); // Call animation function on mount

  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  // Determine background and text color based on the route
  const isRecipesPage = location.pathname === "/recipes";
  const navBackgroundColor = isRecipesPage ? "bg-white" : "bg-[#542C4B]";
  const navTextColor = isRecipesPage ? "text-[#542C4B]" : "text-white";

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${navBackgroundColor} ${navTextColor}  py-4 shadow-md`}>
      <div className="container mx-auto gap-8 flex justify-between items-center px-4 md:px-12">
        {/* Left Logo with GSAP continuous animations */}
        <Link
          to="/"
          className="text-3xl font-serif font-bold tracking-wide text-orange-300 hover:text-gray-300 transition duration-300"
        >
          <span className="pinch opacity-0">pinch</span>
          <span className="of opacity-0 font-serif italic text-orange-700">of</span>
          <span className="yum opacity-0">yum</span>
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
