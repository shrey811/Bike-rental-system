import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../../Services/Authprovider';

interface PrivateRouteProps extends RouteProps {
  // Define any additional props that you want to pass to the component
}
interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...rest} render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
    } />
  );
};

export default PrivateRoute;