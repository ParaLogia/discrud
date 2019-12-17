import { merge } from 'lodash';
import { mergeWithConcat } from '../util/reducer_util';
import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

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

    case RECEIVE_NEW_CHANNEL:
      return mergeWithConcat({}, state, {
        [action.channel.serverId]: {
          channelIds: [action.channel.id]
        }
      })

    case REMOVE_CHANNEL: {
      const { channel } = action;
      const server = state[channel.serverId];
      const newChannelIds = server.channelIds.filter(id => id !== channel.id);
      return Object.assign({}, state, {
        [server.id]: {
          ...server,
          channelIds: newChannelIds
        }
      })
    }


    default:
      return state;
  }
}

export default serversReducer;