import { RECEIVE_MESSAGE, REMOVE_MESSAGE, RECEIVE_NEW_MESSAGE } from '../actions/message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
// import { RECEIVE_SERVER } from '../actions/server_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_MESSAGE:
    case RECEIVE_NEW_MESSAGE:
      if (!(action.message.createdAt instanceof Date)) {
        action.message.createdAt = new Date(action.message.createdAt);
      }
      return Object.assign({}, state, {
        [action.message.id]: action.message
      })

    case REMOVE_MESSAGE:
      newState = Object.assign({}, state);
      delete newState[action.messageId];
      return newState;

    case RECEIVE_CHANNEL:
      Object.values(action.messages).forEach(message => {
        if (!(message.createdAt instanceof Date)) {
          message.createdAt = new Date(message.createdAt);
        }
      })
      return Object.assign({}, state, action.messages);

    // case RECEIVE_SERVER:
      // return {};

    default:
      return state;
  }
}

export default messagesReducer;