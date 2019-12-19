import { merge } from 'lodash';
import { mergeWithConcat } from '../util/reducer_util';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL, RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_NEW_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CHANNEL:
    case RECEIVE_NEW_CHANNEL:
      return Object.assign({}, state, {
        [action.channel.id]: action.channel
      })

    case REMOVE_CHANNEL:
      newState = Object.assign({}, state);
      delete newState[action.channelId];
      return newState;

    case RECEIVE_SERVER:
      return merge({}, state, action.channels);

    case RECEIVE_NEW_MESSAGE:
      return mergeWithConcat({}, state, {
        [action.message.threadId]: {
          messageIds: [action.message.id]
        }
      });

    case REMOVE_MESSAGE: {
      const { message } = action;
      const channel = state[message.threadId];
      const newMessageIds = channel.messageIds.filter(id => id !== message.id);
      return Object.assign({}, state, {
        [channel.id]: {
          ...channel,
          messageIds: newMessageIds
        }
      })
    }      

    default:
      return state;
  }
}

export default channelsReducer;