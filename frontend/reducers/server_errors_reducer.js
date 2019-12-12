import { RECEIVE_SERVER_ERRORS, RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../actions/server_actions';

const serverErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;

    case RECEIVE_SERVER:
    case RECEIVE_SERVERS:
    case REMOVE_SERVER:
      return {};

    default:
      return state;
  }
};

export default serverErrorsReducer;