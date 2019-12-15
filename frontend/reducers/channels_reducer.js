import { merge } from 'lodash';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, {
        [action.channel.id]: action.channel
      })

    case REMOVE_CHANNEL:
      newState = Object.assign({}, state);
      delete newState[action.channelId];
      return newState;

    case RECEIVE_SERVER:
      return merge({}, state, action.channels)

    default:
      return state;
  }
}

export default channelsReducer;