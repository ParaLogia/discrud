import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_NEW_CHANNEL = "RECEIVE_NEW_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

export const receiveChannel = ({ channel, messages = {}, users = {} }) => ({
  type: RECEIVE_CHANNEL,
  channel,
  messages,
  users
})

export const receiveNewChannel = ({ channel }) => ({
  type: RECEIVE_NEW_CHANNEL,
  channel
})

export const removeChannel = (channel) => ({
  type: REMOVE_CHANNEL,
  channel
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
})

export const fetchChannel = (channelId) => (dispatch) => {
  return APIUtil.fetchChannel(channelId)
    .then(
      (resp) => dispatch(receiveChannel(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}

export const createChannel = (channel) => (dispatch) => {
  return APIUtil.createChannel(channel)
    .then(
      ({ channel }) => dispatch(receiveNewChannel({ channel })),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}

export const updateChannel = (channel) => (dispatch) => {
  return APIUtil.updateChannel(channel)
    .then(
      ({ channel }) => dispatch(receiveChannel({ channel })),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}

export const deleteChannel = (channelId) => (dispatch) => {
  return APIUtil.deleteChannel(channelId)
    .then(
      ({ channel }) => dispatch(removeChannel(channel)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}
