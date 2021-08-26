import React from 'react';
import { Route, REdirect } from 'react-router';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  < Route {...rest} render={(props) => (
    auth === true
        ? <Component {...props} />
        : <Redirect to='/' />
  )} />
)

export default GuardedRoute;