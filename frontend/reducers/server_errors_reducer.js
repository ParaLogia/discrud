import { RECEIVE_SERVER_ERRORS, RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER, CLEAR_SERVER_ERRORS } from '../actions/server_actions';
import { CLEAR_MODAL } from '../actions/modal_actions'

const serverErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;

    case CLEAR_SERVER_ERRORS:
    case RECEIVE_SERVER:
    case RECEIVE_SERVERS:
    case REMOVE_SERVER:
    case CLEAR_MODAL:
      return [];

    default:
      return state;
  }
};

export default serverErrorsReducer;