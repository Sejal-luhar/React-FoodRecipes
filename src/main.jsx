import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import HomePage from './components/home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipeDetail from './components/Recipedetail.jsx';
import { RecipeProvider } from './context/RecipeContext.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import AboutPage from './components/AboutPage.jsx';
import Recipes from './components/Recipes.jsx';
 const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/addrecipe',
    element: <AddRecipe/>,
  },
  {
    path:  '/about',
    element: <AboutPage/>,},
    {
      path:  '/recipes',
      element: <Recipes/>,},
  {
    path:  '/recipedetail/:id',
    element: <RecipeDetail/>,}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeProvider>  
      <RouterProvider router={router} />
    </RecipeProvider>
  </StrictMode>
);