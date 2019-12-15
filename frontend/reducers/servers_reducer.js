import { merge } from 'lodash';
import { mergeWithUniqueArray } from '../util/reducer_util';
import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server })

    case RECEIVE_SERVERS:
      return merge({}, state, action.servers)

    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      delete newState[action.serverId];
      return newState;

    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_CHANNEL:
      return mergeWithUniqueArray({}, state, {
        [action.channel.serverId]: {
          channelIds: action.channel.id
        }
      })

    default:
      return state;
  }
}

export default serversReducer;