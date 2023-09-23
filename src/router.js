import {createBrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import React from 'react';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/saved-movies",
    element: <SavedMovies />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
