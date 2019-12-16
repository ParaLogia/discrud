import {
  ADD_SERVER_MODAL,
  CREATE_SERVER_MODAL,
  EDIT_SERVER_MODAL,
  INVITE_TO_SERVER_MODAL,
  JOIN_SERVER_MODAL,
  CREATE_CHANNEL_MODAL,
  EDIT_CHANNEL_MODAL,
  CLEAR_MODAL
} from '../actions/modal_actions';

const emptyModal = {
  type: null
}

const modalReducer = (state = emptyModal, action) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_SERVER_MODAL:
    case CREATE_SERVER_MODAL:
    case EDIT_SERVER_MODAL:
    case INVITE_TO_SERVER_MODAL:
    case JOIN_SERVER_MODAL:
    case CREATE_CHANNEL_MODAL:
      return { type: action.type }

    case EDIT_CHANNEL_MODAL:
      return {
        type: EDIT_CHANNEL_MODAL,
        channelId: action.channelId
      }

    case CLEAR_MODAL:
      return Object.assign({}, emptyModal);

    default:
      return state;
  }
}

export default modalReducer;