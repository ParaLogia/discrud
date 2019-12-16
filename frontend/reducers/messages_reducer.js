import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {
        [action.message.id]: action.message
      })

    case REMOVE_MESSAGE:
      newState = Object.assign({}, state);
      delete newState[action.messageId];
      return newState;

    default:
      return state;
  }
}

export default messagesReducer;