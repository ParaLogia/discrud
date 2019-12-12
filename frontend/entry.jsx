import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { createServer, fetchServer, fetchServers, deleteServer, updateServer, joinServer, leaveServer } from './actions/server_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = {};
  if (window.currentUser) {
    const { currentUser } = window;

    preloadedState =  {
      entities: {
        users: {
          [currentUser.id]: currentUser
        }
      },
      session: {
        currentUserId: currentUser.id
      }
    }

    delete window.currentUser;
  }
    
  const store = configureStore(preloadedState);
  
  ReactDOM.render(<Root store={store} />, root);

  // TESTING ONLY - FIXME
  if (process.env.NODE_ENV !== "production") {
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.createServer = createServer
    window.deleteServer = deleteServer 
    window.updateServer = updateServer
    window.joinServer = joinServer
    window.leaveServer = leaveServer
    window.fetchServer = fetchServer
    window.fetchServers = fetchServers
  }
});