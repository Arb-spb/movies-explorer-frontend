import {useReducer, useEffect, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ACTION_PROFILE_CHANGE_NAME,
  ACTION_PROFILE_EDIT,
  ACTION_PROFILE_ERROR_NAME,
  ACTION_PROFILE_INIT,
  ACTION_PROFILE_CHANGE_EMAIL,
  ACTION_PROFILE_ERROR_EMAIL,
  ACTION_PROFILE_RESET,
  ROUTE_HOME,
  ACTION_PROFILE_ERROR_API,
  ACTION_PROFILE_SUCCESS_API,
} from '../constants';
import { validateName } from '../utils/ValidateName';
import { validateEmail } from "../utils/ValidateEmail";
import {AuthContext} from "../contexts/AuthContext";
import {updateUser} from "../utils/MainApi";

const initialState = {
  name: '',
  errName: '',
  email: '',
  errEmail: '',
  isEdit: false,
  errApi: '',
  successApi: '',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_PROFILE_EDIT:
      return {
        ...state,
        isEdit: action.payload,
      }
    case ACTION_PROFILE_INIT:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      }
    case ACTION_PROFILE_ERROR_NAME:
      return {
        ...state,
        errName: action.payload,
      }
    case ACTION_PROFILE_CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case ACTION_PROFILE_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    case ACTION_PROFILE_ERROR_EMAIL:
      return {
        ...state,
        errEmail: action.payload,
      }
    case ACTION_PROFILE_RESET:
      return {
        ...state,
        ...initialState,
        name: action.payload.name,
        email: action.payload.email,
      }
    case ACTION_PROFILE_ERROR_API:
      return {
        ...state,
        errApi: action.payload,
      }
    case ACTION_PROFILE_SUCCESS_API:
      return {
        ...state,
        successApi: action.payload,
      }
    default:
      throw new Error('Is not valid action type in Profile reducer');
  }
}

export function useProfile() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef(null);

  useEffect(() => {
    dispatch({ type: ACTION_PROFILE_INIT, payload: { name: auth.user.name, email: auth.user.email } });
  }, [auth.user.email, auth.user.name]);

  useEffect(() => {
    const outsideClick = (event: Event) => {
      if (state.isEdit && ref.current && !ref.current.contains(event.target) && !event.target.closest('.Profile__actions')) {
        dispatch({ type: ACTION_PROFILE_RESET, payload: { name: auth.user.name, email: auth.user.email } });
      }
    };

    document.addEventListener('click', outsideClick, true);

    return () => document.removeEventListener('click', outsideClick, true);
  }, [auth.user.email, auth.user.name, state.isEdit]);

  const handleEdit = () => {
    if (state.successApi) {
      dispatch({ type: ACTION_PROFILE_SUCCESS_API, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_PROFILE_ERROR_API, payload: '' });
    }

    dispatch({ type: ACTION_PROFILE_EDIT, payload: true });
  }

  const handleName = (event) => {
    const { value } = event.target;
    const correctName = validateName(value);

    if (!correctName) {
      dispatch({ type: ACTION_PROFILE_ERROR_NAME, payload: 'Такое имя не подойдет' });
    }
    if (correctName && state.errName) {
      dispatch({ type: ACTION_PROFILE_ERROR_NAME, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_PROFILE_ERROR_NAME, payload: '' });
    }

    dispatch({ type: ACTION_PROFILE_CHANGE_NAME, payload: value });
  }

  const handleEmail = (event) => {
    const { value } = event.target;
    const correctEmail = validateEmail(value);

    if (!correctEmail) {
      dispatch({ type: ACTION_PROFILE_ERROR_EMAIL, payload: 'Такой email не подойдет' });
    }
    if (correctEmail && state.errEmail) {
      dispatch({ type: ACTION_PROFILE_ERROR_EMAIL, payload: '' });
    }
    if (state.errApi) {
      dispatch({ type: ACTION_PROFILE_ERROR_EMAIL, payload: '' });
    }

    dispatch({ type: ACTION_PROFILE_CHANGE_EMAIL, payload: value });
  }

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    auth.func.removeUser();
    navigate(ROUTE_HOME);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = updateUser({
      name: state.name,
      email: state.email,
    });

    if (error) {
      dispatch({ type: ACTION_PROFILE_ERROR_API, payload: 'Профиль успешно изменен' });
    } else {
      auth.func.onUser(() => {
        dispatch({ type: ACTION_PROFILE_RESET, payload: { name: auth.user.name, email: auth.user.email } });
        dispatch({ type: ACTION_PROFILE_SUCCESS_API, payload: 'Профиль успешно изменен' });
      });
    }
  }

  return [state, {
    onEdit: handleEdit,
    onName: handleName,
    onEmail: handleEmail,
    onLogout: handleLogOut,
    onSubmit: handleSubmit,
  }, ref];
}
