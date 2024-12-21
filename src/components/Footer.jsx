import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setMessage("Please fill in both fields.");
      return;
    }

    // Here, you can integrate an API to handle the email subscription
    // For now, we just simulate a success message
    setMessage("Thank you for signing up! You will receive email updates soon.");
    
    // Optionally, clear the form
    setName('');
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-orange-600 text-xl mb-4">PINCH OF YUM</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Recipe Index</li>
            <li>Blogging Resources</li>
            <li>Income Reports</li>
            <li>Sponsored Content</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-orange-600 text-xl mb-4">FOOD & RECIPES</h3>
          <ul className="space-y-2">
            <li>Sugar Free January</li>
            <li>Freezer Meals 101</li>
            <li>Quick and Easy Recipes</li>
            <li>Vegan Recipes</li>
            <li>Soup Recipes</li>
            <li>Meal Prep Recipes</li>
          </ul>
        </div>
        {/* Column 3 - Email Subscription */}
        <div>
          <h3 className="font-bold text-orange-600 text-xl mb-4">SIGN UP FOR EMAIL UPDATES</h3>
          <p className="mb-4">
            Get a Free eCookbook with our top 25 recipes.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center rounded-3xl overflow-hidden shadow-md shadow-gray-500">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 outline-none  w-1/2"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 outline-none w-1/2"
              />
              <button type="submit" className="bg-[#542C4B] text-white p-2 rounded-r">
                GO
              </button>
            </div>
          </form>

          {/* Display message after form submission */}
          {message && (
            <div className="mt-4 text-sm text-green-600">{message}</div>
          )}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 py-6">
        <Link to="#">
          <i className="fab fa-instagram text-2xl"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-pinterest text-2xl"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-facebook text-2xl"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-twitter text-2xl"></i>
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 bg-[#542C4B] border-t text-gray-300 text-sm">
        © {new Date().getFullYear()} Pinch of Yum. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
