import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouterComponent, ...props }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...props}
      render={routeProps =>
        !!currentUser ? (
          <RouterComponent {...routeProps} />
        )
          : (
            <Redirect to={'/login'} />
          )
      }
    />
  )
}

export default PrivateRoute;
