import { ERROR_MOVIES_API_TEXT, URL_MOVIES_API } from '../constants';

async function fetcher() {
  const response = await fetch(URL_MOVIES_API);
  return response.json();
}

export async function moviesApi() {
  try {
    const response = await fetcher();
    return { data: response, error: null }
  } catch {
    return { data: null, error: ERROR_MOVIES_API_TEXT }
  }
}
