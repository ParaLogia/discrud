import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { register, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  ReactDOM.render(<Root store={store} />, root);

  // TESTING ONLY - FIXME
  if (process.env.NODE_ENV !== "production") {
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.register = register;
    window.login = login;
    window.logout = logout;
  }
});