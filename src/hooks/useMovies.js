import { useReducer, useEffect, useMemo } from 'react';
import {
  ACTION_MOVIES_CHANGE_VALUE,
  ACTION_MOVIES_SEARCH_ERROR,
  ACTION_MOVIES_API_ERROR,
  ACTION_MOVIES_API_SUCCESS,
  STATUS_INIT,
  ERROR_SEARCH_TEXT,
  LOCAL_STORAGE_MOVIES_NAME,
  LOCAL_STORAGE_SEARCH_VALUE,
  ACTION_MOVIES_API_INIT,
  ACTION_MOVIES_CHANGE_STATUS,
  STATUS_LOADING,
  ACTION_MOVIES_NOT_FOUND,
  STATUS_NOT_FOUND_CARD,
  LOCAL_STORAGE_IS_SHORTS,
  STATUS_API_ERROR, ACTION_MOVIES_SHORTS, ACTION_MOVIES_CHANGE_DATA,
} from '../constants';
import { moviesApi } from '../utils/MoviesApi';
import { getMoviesData } from '../utils/GetMoviesData';
import { useCardAddCount } from './useCardAddCount';
import {getSaveMovies, likeMovies} from '../utils/MainApi';

const initialState = {
  status: STATUS_INIT,
  value: '',
  errorSearchText: '',
  errorMoviesApiText: '',
  data: [],
  isMore: false,
  isShorts: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_MOVIES_CHANGE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case ACTION_MOVIES_SEARCH_ERROR:
      return {
        ...state,
        errorSearchText: action.payload,
      };
    case ACTION_MOVIES_API_ERROR:
      return {
        ...state,
        status: STATUS_API_ERROR,
        errorMoviesApiText: action.payload,
      };
    case ACTION_MOVIES_API_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isMore: action.payload.isMore,
        status: STATUS_INIT,
      };
    case ACTION_MOVIES_API_INIT:
      return {
        ...state,
        value: action.payload.value,
        data: action.payload.data,
        isMore: action.payload.isMore,
        isShorts: action.payload.isShorts,
      };
    case ACTION_MOVIES_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      }
    case ACTION_MOVIES_NOT_FOUND:
      return {
        ...state,
        data: [],
        isMore: false,
        status: STATUS_NOT_FOUND_CARD,
      }
    case ACTION_MOVIES_SHORTS:
      return {
        ...state,
        isShorts: !state.isShorts,
      }
    case ACTION_MOVIES_CHANGE_DATA:
      return {
        ...state,
        data: action.payload,
      }
    default:
      throw new Error('Action is not valid');
  }
}

function useMovies() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let moviesDataStorage = localStorage.getItem(LOCAL_STORAGE_MOVIES_NAME);
  let moviesData = useMemo(() => moviesDataStorage ? JSON.parse(moviesDataStorage) : [], [moviesDataStorage]);
  const { countAdd, countInit} = useCardAddCount();

  useEffect(() => {
    const searchValueStorage = localStorage.getItem(LOCAL_STORAGE_SEARCH_VALUE) ?? '';
    const isShortsStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_IS_SHORTS)) ?? false;

    if (searchValueStorage) {
      const { filteredData, searchLength } = getMoviesData(moviesData, searchValueStorage, isShortsStorage, countInit);
      dispatch({
        type: ACTION_MOVIES_API_INIT,
        payload: {
          value: searchValueStorage,
          data: filteredData,
          isMore: searchLength > countInit,
          isShorts: isShortsStorage,
        }})
    }
  }, [countInit, moviesData]);

  const handleChange = (e) => {
    if (state.errorSearchText) {
      dispatch({ type: ACTION_MOVIES_SEARCH_ERROR, payload: '' });
    }
    dispatch({ type: ACTION_MOVIES_CHANGE_VALUE, payload: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.value.length) {
      dispatch({ type: ACTION_MOVIES_SEARCH_ERROR, payload: ERROR_SEARCH_TEXT });
      return;
    }
    if (state.errorMoviesApiText) {
      dispatch({ type: ACTION_MOVIES_API_ERROR, payload: '' });
    }

    dispatch({ type: ACTION_MOVIES_CHANGE_STATUS, payload: STATUS_LOADING });

    if (!moviesData.length) {
      const [{ data, error }, { data: saveMovies }] = await Promise.all([moviesApi(), getSaveMovies()])

      if (error) {
        dispatch({ type: ACTION_MOVIES_API_ERROR, payload: error });
        return;
      }

      const newData = data.map(item => ({
        ...item,
        favorite: (saveMovies ?? []).some((card) => card.movieId === item.id),
      }));

      localStorage.setItem(LOCAL_STORAGE_MOVIES_NAME, JSON.stringify(newData));
      moviesData = newData;
    }

    const searchValue = state.value.toLowerCase();
    const { filteredData, searchLength } = getMoviesData(moviesData, searchValue, state.isShorts, countInit);
    localStorage.setItem(LOCAL_STORAGE_SEARCH_VALUE, searchValue);
    if (searchLength === 0) {
      dispatch({ type: ACTION_MOVIES_NOT_FOUND });
    } else {
      dispatch({ type: ACTION_MOVIES_API_SUCCESS, payload: { data: filteredData, isMore: searchLength > countInit } });
    }
  }

  const handleShorts = () => {
    dispatch({ type: ACTION_MOVIES_SHORTS });
    localStorage.setItem(LOCAL_STORAGE_IS_SHORTS, JSON.stringify(!state.isShorts));

    if (state.value.length) {
      const searchValue = state.value.toLowerCase();
      const { filteredData, searchLength } = getMoviesData(moviesData, searchValue, !state.isShorts, countInit);
      if (searchLength === 0) {
        dispatch({ type: ACTION_MOVIES_NOT_FOUND });
      } else {
        dispatch({ type: ACTION_MOVIES_API_SUCCESS, payload: { data: filteredData, isMore: searchLength > countInit } });
      }
    }
  }

  const handleMore = () => {
    const currentLength = state.data.length;
    const newCorrectLength = currentLength + countAdd;
    const { filteredData, searchLength } = getMoviesData(moviesData, state.value, state.isShorts, newCorrectLength);
    console.log(filteredData.length)

    dispatch({ type: ACTION_MOVIES_API_SUCCESS, payload: { data: filteredData, isMore: searchLength > newCorrectLength } });
  }

  const handleLike = async ({ favorite, ...req }) => {
    if (favorite) {

    } else {
      const { data, error } = await likeMovies(req);
      if (error) return;

      const currentLength = state.data.length;
      console.log(currentLength)
      return
      const storageMovies = localStorage.getItem(LOCAL_STORAGE_MOVIES_NAME);
      const parseMovies = JSON.parse(storageMovies);
      const newMoviesData = parseMovies.map((item) => ({...item, favorite: item.id === data.movieId ? true : item.favorite }));

      localStorage.setItem(LOCAL_STORAGE_MOVIES_NAME, JSON.stringify(newMoviesData));

      const { filteredData, searchLength } = getMoviesData(newMoviesData, state.value, state.isShorts, currentLength);
      dispatch({ type: ACTION_MOVIES_API_SUCCESS, payload: { data: filteredData, isMore: searchLength > currentLength } });
    }
  }

  return [state, {
    onChange: handleChange,
    onSubmit: handleSubmit,
    onShorts: handleShorts,
    onMore: handleMore,
    onLike: handleLike,
  }]
}

export { useMovies };
