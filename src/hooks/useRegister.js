import { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ACTION_REGISTER_CHANGE_EMAIL,
  ACTION_REGISTER_CHANGE_NAME,
  ACTION_REGISTER_CHANGE_PASSWORD,
  ACTION_REGISTER_ERROR_API,
  ACTION_REGISTER_ERROR_EMAIL,
  ACTION_REGISTER_ERROR_NAME,
  ACTION_REGISTER_ERROR_PASSWORD, ROUTE_MOVIES,
} from '../constants';
import { validateEmail } from '../utils/ValidateEmail';
import {validateName} from '../utils/ValidateName';
import { signinApi, signupApi } from '../utils/MainApi';
import { AuthContext } from '../contexts/AuthContext';

const initialState = {
  status: '',
  name: '',
  errName: '',
  email: '',
  errEmail: '',
  password: '',
  errPassword: '',
  errApi: '',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_REGISTER_CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case ACTION_REGISTER_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    case ACTION_REGISTER_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case ACTION_REGISTER_ERROR_EMAIL:
      return {
        ...state,
        errEmail: action.payload,
      }
    case ACTION_REGISTER_ERROR_PASSWORD:
      return {
        ...state,
        errPassword: action.payload,
      }
    case ACTION_REGISTER_ERROR_NAME:
      return {
        ...state,
        errName: action.payload,
      }
    case ACTION_REGISTER_ERROR_API:
      return {
        ...state,
        errApi: action.payload,
      }
    default:
      throw new Error('Is not correct action type with useRegister');
  }
}

export function useRegister() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleName = (event) => {
    const { value } = event.target;
    const correctName = validateName(value);

    if (!correctName) {
      dispatch({ type: ACTION_REGISTER_ERROR_NAME, payload: 'Такое имя не подойдет' });
    }
    if (correctName && state.errName) {
      dispatch({ type: ACTION_REGISTER_ERROR_NAME, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_REGISTER_ERROR_API, payload: '' });
    }

    dispatch({ type: ACTION_REGISTER_CHANGE_NAME, payload: value });
  }

  const handleEmail = (event) => {
    const { value } = event.target;
    const correctEmail = validateEmail(value);

    if (!correctEmail) {
      dispatch({ type: ACTION_REGISTER_ERROR_EMAIL, payload: 'Такой email не подойдет' });
    }
    if (correctEmail && state.errEmail) {
      dispatch({ type: ACTION_REGISTER_ERROR_EMAIL, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_REGISTER_ERROR_API, payload: '' });
    }

    dispatch({ type: ACTION_REGISTER_CHANGE_EMAIL, payload: value });
  }

  const handlePassword = (event) => {
    const { value } = event.target;
    const correctPassword = value.length

    if (!correctPassword) {
      dispatch({ type: ACTION_REGISTER_ERROR_PASSWORD, payload: 'Обязательное поле' });
    }
    if (correctPassword && state.errPassword) {
      dispatch({ type: ACTION_REGISTER_ERROR_PASSWORD, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_REGISTER_ERROR_API, payload: '' });
    }

    dispatch({ type: ACTION_REGISTER_CHANGE_PASSWORD, payload: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = await signupApi({
      email: state.email,
      name: state.name,
      password: state.password,
    });

    if (error) {
      dispatch({ type: ACTION_REGISTER_ERROR_API, payload: error });
    } else {
      const { data } = await signinApi({
        email: state.email,
        password: state.password,
      });
      localStorage.setItem('jwt', data.token);
      auth.func.onUser(() => {
        navigate(ROUTE_MOVIES);
      });
    }
  }

  return [state, {
    onName: handleName,
    onEmail: handleEmail,
    onPassword: handlePassword,
    onSubmit: handleSubmit,
  }];
}
