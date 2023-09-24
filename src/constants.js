export const ROUTE_HOME = "/";
export const ROUTE_MOVIES = "/movies";
export const ROUTE_SAVED_MOVIES = "/saved-movies";
export const ROUTE_PROFILE = "/profile";
export const ROUTE_LOGIN = "/signin";
export const ROUTE_REGISTER = "/signup";
export const ROUTE_NOT_FOUND = "*";

export const NAVIGATION_MOBILE = [
  {
    id: 1,
    to: ROUTE_HOME,
    text: 'Главная'
  },
  {
    id: 2,
    to: ROUTE_MOVIES,
    text: 'Фильмы'
  },
  {
    id: 3,
    to: ROUTE_SAVED_MOVIES,
    text: 'Сохранённые фильмы'
  }
]

export const NAVIGATION_DESKTOP = [
  {
    id: 1,
    to: ROUTE_MOVIES,
    text: 'Фильмы'
  },
  {
    id: 2,
    to: ROUTE_SAVED_MOVIES,
    text: 'Сохранённые фильмы'
  }
]
