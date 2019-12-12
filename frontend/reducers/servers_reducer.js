import { merge } from 'lodash';
import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_SERVER } from '../actions/ui_actions';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SERVER:
    case RECEIVE_CURRENT_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server })

    case RECEIVE_SERVERS:
      return merge({}, state, action.servers)

    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      delete newState[action.serverId];
      return newState;

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return state;
  }
}

export default serversReducer;