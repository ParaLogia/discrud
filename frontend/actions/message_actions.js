import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_NEW_MESSAGE = 'RECEIVE_NEW_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_MESSAGE_ERRORS = 'REMOVE_MESSAGE_ERRORS';

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

export const receiveNewMessage = (message) => ({
  type: RECEIVE_NEW_MESSAGE,
  message
})

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message
})

export const receiveErrors = (errors) => ({
  type: REMOVE_MESSAGE_ERRORS,
  errors
})

export const createChannelMessage = (message) => (dispatch) => {
  return APIUtil.createChannelMessage(message)
    .then(
      () => {},
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const updateMessage = (message) => (dispatch) => {
  return APIUtil.updateMessage(message)
    .then(
      () => {},
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const deleteMessage = (messageId) => (dispatch) => {
  return APIUtil.deleteMessage(messageId)
    .then(
      () => {},
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}