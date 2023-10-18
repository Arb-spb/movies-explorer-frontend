import { useEffect, useState, useCallback } from 'react';
import { getUser } from '../../utils/MainApi';
import { STATUS_AUTH_INIT, STATUS_AUTH_LOAD, STATUS_AUTH_SUCCESS } from '../../constants';
import { AuthContext } from '../../contexts/AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(STATUS_AUTH_INIT);

  useEffect(() => {
    setStatus(STATUS_AUTH_LOAD);

    getUser()
      .then(({ data, error }) => {
        if (error) {
          setStatus(STATUS_AUTH_SUCCESS);
        } else {
          setStatus(STATUS_AUTH_SUCCESS);
          setUser(data);
        }
      });

  }, []);

  const onUser = useCallback((callback) => {
    getUser()
      .then(({ data, error }) => {
        if (error) {
          setStatus(STATUS_AUTH_SUCCESS);
        } else {
          setStatus(STATUS_AUTH_SUCCESS);
          setUser(data);
          callback();
        }
      });
  }, []);

  const removeUser = useCallback(() => {
    setUser(null);
  }, [])

  return <AuthContext.Provider value={{ user, status, func: { onUser, removeUser } }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
