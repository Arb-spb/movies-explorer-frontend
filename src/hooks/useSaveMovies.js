import { useReducer, useEffect } from 'react';
import {
  ACTION_SAVE_MOVIES_ERROR_API,
  ACTION_SAVE_MOVIES_SUCCESS_API,
  ACTION_SAVE_CHANGE,
  ERROR_SIGNIN_TEXT, STATUS_API_ERROR,
  STATUS_INIT,
  STATUS_LOADING,
  ACTION_SAVE_RESET_ERROR_API,
  ACTION_SAVE_MOVIES_SEARCH_ERROR,
  ACTION_SAVE_MOVIES_SHORTS,
  ACTION_SAVE_MOVIES_SEARCH,
  ACTION_SAVE_MOVIES_DELETE,
} from '../constants';
import {deleteLike, getSaveMovies} from '../utils/MainApi';
import { getMoviesData } from '../utils/GetMoviesData';

const initialState = {
  status: STATUS_LOADING,
  requestData: [],
  data: [],
  errorApiText: '',
  value: '',
  errorSearchText: '',
  isShorts: false,
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_SAVE_MOVIES_SUCCESS_API:
      return {
        ...state,
        requestData: action.payload,
        data: action.payload,
        status: STATUS_INIT
      }
    case ACTION_SAVE_MOVIES_SEARCH:
      return {
        ...state,
        data: action.payload,
      }
    case ACTION_SAVE_MOVIES_ERROR_API:
      return {
        ...state,
        errorApiText: action.payload,
        status: STATUS_API_ERROR,
      }
    case ACTION_SAVE_CHANGE:
      return {
        ...state,
        value: action.payload,
      }
    case ACTION_SAVE_RESET_ERROR_API:
      return {
        errorApiText: '',
        status: STATUS_INIT,
      }
    case ACTION_SAVE_MOVIES_SEARCH_ERROR:
      return {
        ...state,
        errorSearchText: action.payload,
      }
    case ACTION_SAVE_MOVIES_SHORTS:
      return {
        ...state,
        isShorts: !state.isShorts
      }
    case ACTION_SAVE_MOVIES_DELETE:
      return {
        ...state,
        requestData: action.payload.requestData,
        data: action.payload.data,
      }
    default:
      throw new Error('Is not valid action type useSaveMovies hook');
  }
}

export function useSaveMovies() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getSaveMovies()
      .then(({ data, error }) => {
      if (error) {
        dispatch({ type: ACTION_SAVE_MOVIES_ERROR_API, payload: ERROR_SIGNIN_TEXT });
      } else {
        dispatch({ type: ACTION_SAVE_MOVIES_SUCCESS_API, payload: data });
      }
    });
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;

    if (state.errorApiText) {
      dispatch({ type: ACTION_SAVE_RESET_ERROR_API });
    }
    if (state.errorSearchText) {
      dispatch({ type: ACTION_SAVE_MOVIES_SEARCH_ERROR, payload: '' });
    }

    dispatch({ type: ACTION_SAVE_CHANGE, payload: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.value.length && !state.isShorts) {
      dispatch({ type: ACTION_SAVE_MOVIES_SEARCH, payload: state.requestData });
      return;
    }
    if (!state.value.length && state.isShorts) {
      const filteredData = state.requestData.filter((item) => item.duration < 41);
      dispatch({ type: ACTION_SAVE_MOVIES_SEARCH, payload: filteredData });
      return;
    }

    const { filteredData } = getMoviesData(state.requestData, state.value, state.isShorts, 10000);
    dispatch({ type: ACTION_SAVE_MOVIES_SEARCH, payload: filteredData });
  }

  const handleShorts = () => {
    dispatch({ type: ACTION_SAVE_MOVIES_SHORTS });

    if (state.value) {
      const { filteredData } = getMoviesData(state.requestData, state.value, !state.isShorts, 10000);
      dispatch({ type: ACTION_SAVE_MOVIES_SEARCH, payload: filteredData });
      return;
    }

    const filteredData = state.requestData.filter((item) => {
      if (!state.isShorts) {
        return item.duration < 41
      }

      return true;
    });
    dispatch({ type: ACTION_SAVE_MOVIES_SEARCH, payload: filteredData });
  }

  const handleDelete = async (movieId) => {
    const { data, error } = await deleteLike(movieId);
    if (error) return;

    const newRequestData = state.requestData.filter((item) => item._id !== data._id);
    const newData = state.data.filter((item) => item._id !== data._id);

    dispatch({ type: ACTION_SAVE_MOVIES_DELETE, payload: { requestData: newRequestData, data: newData } });
  }

  return [state, {
    onChange: handleChange,
    onSubmit: handleSubmit,
    onShorts: handleShorts,
    onDelete: handleDelete,
  }];
}
