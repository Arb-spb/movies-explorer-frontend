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
];

export const TECHNOLOGIES = [
  {
    id: 1,
    text: 'HTML'
  },
  {
    id: 2,
    text: 'CSS'
  },
  {
    id: 3,
    text: 'JS'
  },
  {
    id: 4,
    text: 'React'
  },
  {
    id: 5,
    text: 'Git'
  },
  {
    id: 6,
    text: 'Express.js'
  },
  {
    id: 7,
    text: 'mongoDB'
  }
];
export const PORTFOLIO = [
  {
    id: 1,
    to: 'https://arba-octo.github.io/russian-travel-my',
    text: 'Статичный сайт'
  },
  {
    id: 2,
    to: 'https://arba-octo.github.io/mesto-arb',
    text: 'Адаптивный сайт'
  },
  {
    id: 3,
    to: 'https://github.com/arba-octo/movies-explorer-frontend',
    text: 'Одностраничное приложение'
  }
];

export const STATUS_INIT = 'status-init';
export const STATUS_LOADING = 'status-loading';
export const STATUS_NOT_FOUND_CARD = 'status-not-found-card';
export const STATUS_API_ERROR = 'status-api-error';

export const ACTION_MOVIES_CHANGE_VALUE = 'action-movies-change-value';
export const ACTION_MOVIES_CHANGE_DATA = 'action-movies-change-data';
export const ACTION_MOVIES_SEARCH_ERROR = 'action-movies-search-error';
export const ACTION_MOVIES_API_ERROR = 'action-movies-api-error';
export const ACTION_MOVIES_API_SUCCESS = 'action-movies-api-success';
export const ACTION_MOVIES_API_INIT = 'action-movies-api-init';
export const ACTION_MOVIES_CHANGE_STATUS = 'action-movies-change-status';
export const ACTION_MOVIES_NOT_FOUND = 'action-movies-not-found';
export const ACTION_MOVIES_SHORTS = 'action-movies-shorts';
export const ACTION_MOVIES_ADD_MORE = 'action-movies-add-more';
export const ACTION_LOGIN_CHANGE_EMAIL = 'action-login-change-email';
export const ACTION_LOGIN_CHANGE_PASSWORD = 'action-login-change-password';
export const ACTION_LOGIN_ERROR_EMAIL = 'action-login-error-email';
export const ACTION_LOGIN_ERROR_PASSWORD = 'action-login-error-password';
export const ACTION_LOGIN_ERROR_API = 'action-login-error-api';
export const ACTION_REGISTER_CHANGE_NAME = 'action-register-change-name';
export const ACTION_REGISTER_ERROR_NAME = 'action-register-error-name';
export const ACTION_REGISTER_CHANGE_EMAIL = 'action-register-change-email';
export const ACTION_REGISTER_ERROR_EMAIL = 'action-register-error-email';
export const ACTION_REGISTER_CHANGE_PASSWORD = 'action-register-change-password';
export const ACTION_REGISTER_ERROR_PASSWORD = 'action-register-error-password';
export const ACTION_REGISTER_ERROR_API = 'action-register-error-api';
export const ACTION_PROFILE_EDIT = 'action-profile-edit';
export const ACTION_PROFILE_INIT = 'action-profile-init';
export const ACTION_PROFILE_ERROR_NAME = 'action-profile-error-name';
export const ACTION_PROFILE_CHANGE_NAME = 'action-profile-change-name';
export const ACTION_PROFILE_CHANGE_EMAIL = 'action-profile-change-email';
export const ACTION_PROFILE_ERROR_EMAIL = 'action-profile-error-email';
export const ACTION_PROFILE_RESET = 'action-profile-reset';
export const ACTION_PROFILE_ERROR_API = 'action-profile-error-api';
export const ACTION_PROFILE_SUCCESS_API = 'action-profile-success-api';
export const ACTION_SAVE_MOVIES_SUCCESS_API = 'action-save-movies-success-api';
export const ACTION_SAVE_MOVIES_ERROR_API = 'action-save-movies-error-api';
export const ACTION_SAVE_CHANGE = 'action-save-movies-change';
export const ACTION_SAVE_RESET_ERROR_API = 'action-save-movies-reset-error-api';
export const ACTION_SAVE_MOVIES_SEARCH_ERROR = 'action-save-movies-search-error';
export const ACTION_SAVE_MOVIES_SHORTS = 'action-save-movies-shorts';
export const ACTION_SAVE_MOVIES_SEARCH = 'action-save-movies-search';
export const ACTION_SAVE_MOVIES_DELETE = 'action-save-movies-delete';

export const ERROR_SEARCH_TEXT = 'Нужно ввести ключевое слово';
export const ERROR_MOVIES_API_TEXT = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const ERROR_SIGNIN_TEXT = 'Что-то пошло не так...';

export const URL_BASE_MOVIES_API = 'https://api.nomoreparties.co';
export const URL_BASE_MAIN_API = 'https://api.movies.best.nomoredom.nomoredomainsrocks.ru';
export const URL_MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

export const LOCAL_STORAGE_MOVIES_NAME = 'local_storage_movies_name';
export const LOCAL_STORAGE_SEARCH_VALUE = 'local_storage_search_value';
export const LOCAL_STORAGE_IS_SHORTS = 'local_storage_is_shorts';
export const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
export const NAME_REGEXP = /^[a-zа-яё\s-]+$/i ;
export const STATUS_AUTH_INIT = 'init-auth';
export const STATUS_AUTH_LOAD = 'init-load';
export const STATUS_AUTH_SUCCESS = 'init-success';
