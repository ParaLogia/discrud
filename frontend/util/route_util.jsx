import React from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      loggedIn ? <Redirect to="/channels/@me" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const msp = state => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  }
}

export const AuthRoute = withRouter(
  connect(msp)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(msp)(Protected)
);