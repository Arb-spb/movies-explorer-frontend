import { ERROR_MOVIES_API_TEXT, ERROR_SIGNIN_TEXT, ROUTE_LOGIN, ROUTE_REGISTER, URL_BASE_MAIN_API } from '../constants';

const fetcher = async (path, options) => {
  const response = await fetch(`${URL_BASE_MAIN_API}${path}`, options);
  if (!response.ok) {
    throw response.json();
  }
  return response.json();
}

export async function getUser() {
  try {
    const response = await fetcher('/users/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    });
    return { data: response.data, error: null }
  } catch {
    return { data: null, error: ERROR_MOVIES_API_TEXT }
  }
}

export async function signinApi(data) {
  try {
    const response = await fetcher(ROUTE_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return { data: response, error: null }
  } catch {
    return { data: null, error: ERROR_SIGNIN_TEXT }
  }
}

export async function signupApi(data) {
  try {
    const response = await fetcher(ROUTE_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return { data: response, error: null }
  } catch {
    return { data: null, error: ERROR_SIGNIN_TEXT }
  }
}

export async function updateUser(data) {
  try {
    const response = await fetcher('/users/me', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    });
    return { data: response.data, error: null }
  } catch {
    return { data: null, error: ERROR_SIGNIN_TEXT }
  }
}

export async function likeMovies(data) {
  try {
    const response = await fetcher('/movies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    });
    return { data: response.data, error: null }
  } catch {
    return { data: null, error: ERROR_SIGNIN_TEXT }
  }
}

export async function getSaveMovies() {
  try {
    const response = await fetcher('/movies', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    });
    return { data: response.data, error: null }
  } catch {
    return { data: null, error: ERROR_SIGNIN_TEXT }
  }
}
