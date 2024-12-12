import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieDetails from "../components/MovieDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound"; 
import AboutUs from "../components/AboutUs";
import AddMoviePage from "../components/AddMoviePage";
import PrivateRoute from "./PrivateRoute";

import FavoriteMoviesPage from "../components/FavoriteMoviesPage";

import UpdateMoviePage from "../components/UpdateMoviePage";
import UniqueThemeSection from "../FeatureSection/UniqueThemeSection";
import LatestMovies from "../FeatureSection/LatestMovies";





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    // children: [
    //   {
    //     path: "/",
    //         element: <FeaturedMovies />,
    //         loader: () => fetch('https://orchid-server-side.vercel.app/movie'),
    //         children: [
            
    //     ]
    //   },
    // ],
    },
  
//   
    {
        path: "/addMovie",
        element:<AddMoviePage/>
    },
    {
        path: "updateMovie/:id",
        element: <UpdateMoviePage />,
        loader:({params})=>fetch(`https://orchid-server-side.vercel.app/movie/${params.id}`)
    },
    
    {
        path: '/allmovies',
        element: 
            <FeaturedMovies />,
            loader: () => fetch('https://orchid-server-side.vercel.app/movie'),
        
    },
    {
        path: '/addMovie',
        element: <PrivateRoute>
            <AddMoviePage/>
        </PrivateRoute>
    },
    {
        path: "/movies/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
              const response = await fetch(`https://orchid-server-side.vercel.app/movie/${params.id}`);
              const data = await response.json();
              console.log(data);
              return data;
              
           
          } catch (error) {
            console.error("Loader error:", error);
            return null;
          }
        },
    },
    {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <FavoriteMoviesPage />
            </PrivateRoute>
            
        ),
        loader: () => fetch('https://orchid-server-side.vercel.app/favorites'),
        // loader: async ({ params }) => {
        //     try {
        //         const response = await fetch(`https://orchid-server-side.vercel.app/favorites/`);
        //         const data = await response.json();
        //         console.log(data);
        //         return data;
                
             
        //     } catch (error) {
        //       console.error("Loader error:", error);
        //       return null;
        //     }
        //   },
    },
    {
        path: "/view",
        element:<UniqueThemeSection/>
    },
    {
        path: "/latest",
        element:<LatestMovies/>
          
    },
    
      
   

  {
    path: "/auth",
      element: <AuthLayout />,
      children: [
          {
              path: "/auth/login",
              element:<Login/>,
        },
          {
              path: "/auth/register",
              element:<Register/>,
        },
    ]
    },
    {
        path: "/aboutus",
        element:<AboutUs/>
      
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

export default router;
