import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ROUTE_HOME, STATUS_AUTH_SUCCESS } from '../../constants';

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (auth.status !== STATUS_AUTH_SUCCESS) {
    return (
      <div style={{background: 'var(--main-bg-color)'}}></div>
    );
  }

  if (!auth.user) {
    return <Navigate to={ROUTE_HOME} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
