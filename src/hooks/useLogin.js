import { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ACTION_LOGIN_CHANGE_EMAIL,
  ACTION_LOGIN_CHANGE_PASSWORD,
  ACTION_LOGIN_ERROR_API,
  ACTION_LOGIN_ERROR_EMAIL,
  ACTION_LOGIN_ERROR_PASSWORD,
  ROUTE_MOVIES,
} from '../constants';
import { validateEmail } from '../utils/ValidateEmail';
import { signinApi } from '../utils/MainApi';
import {AuthContext} from "../contexts/AuthContext";

const initialState = {
  status: '',
  email: '',
  password: '',
  errEmail: '',
  errPassword: '',
  errApi: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_LOGIN_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ACTION_LOGIN_ERROR_EMAIL:
      return {
        ...state,
        errEmail: action.payload,
      };
    case ACTION_LOGIN_ERROR_PASSWORD:
      return {
        ...state,
        errPassword: action.payload,
      }
    case ACTION_LOGIN_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case ACTION_LOGIN_ERROR_API:
      return {
        ...state,
        errApi: action.payload,
      }
    default:
      throw new Error('Is not valid action type');
  }
}
export function useLogin() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmail = (event) => {
    const { value } = event.target;
    const correctEmail = validateEmail(value);

    if (!correctEmail) {
      dispatch({ type: ACTION_LOGIN_ERROR_EMAIL, payload: 'Такой email не подойдет' });
    }
    if (correctEmail && state.errEmail) {
      dispatch({ type: ACTION_LOGIN_ERROR_EMAIL, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_LOGIN_ERROR_API, payload: '' });
    }

    dispatch({ type: ACTION_LOGIN_CHANGE_EMAIL, payload: value })
  }

  const handlePassword = (event) => {
    const { value } = event.target;
    const correctPassword = value.length

    if (!correctPassword) {
      dispatch({ type: ACTION_LOGIN_ERROR_PASSWORD, payload: 'Обязательное поле' });
    }
    if (correctPassword && state.errPassword) {
      dispatch({ type: ACTION_LOGIN_ERROR_PASSWORD, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_LOGIN_ERROR_API, payload: '' });
    }

    dispatch({ type: ACTION_LOGIN_CHANGE_PASSWORD, payload: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await signinApi({
      email: state.email,
      password: state.password,
    });

    if (error) {
      dispatch({ type: ACTION_LOGIN_ERROR_API, payload: error });
    } else {
      localStorage.setItem('jwt', data.token);
      auth.func.onUser(() => {
        navigate(ROUTE_MOVIES);
      });
    }
  }

  return [state, {
    onEmail: handleEmail,
    onPassword: handlePassword,
    onSubmit: handleSubmit,
  }];
}
