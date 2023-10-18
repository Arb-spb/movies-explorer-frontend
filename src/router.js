import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/404/404';
import RequireAuth from './components/RequireAuth/RequireAuth';
import {
  ROUTE_HOME,
  ROUTE_MOVIES,
  ROUTE_SAVED_MOVIES,
  ROUTE_PROFILE,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_NOT_FOUND,
} from './constants';

export const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <App />,
    children: [
      {
        path: ROUTE_HOME,
        element: <Main />,
      },
      {
        path: ROUTE_MOVIES,
        Component(){
          return (
            <RequireAuth>
              <Movies />
            </RequireAuth>
          )
        },
      },
      {
        path: ROUTE_SAVED_MOVIES,
        Component(){
          return (
            <RequireAuth>
              <SavedMovies />
            </RequireAuth>
          )
        },
      },
      {
        path: ROUTE_PROFILE,
        Component(){
          return (
            <RequireAuth>
              <Profile />
            </RequireAuth>
          )
        },
      },
    ]
  },
  {
    path: ROUTE_LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_NOT_FOUND,
    element: <NotFound />,
  },
]);
