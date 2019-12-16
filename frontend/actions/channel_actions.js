import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
})

export const removeChannel = (channelId) => ({
  type: REMOVE_CHANNEL,
  channelId
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
})

export const fetchChannel = (channelId) => (dispatch) => {
  return APIUtil.fetchChannel(channelId)
    .then(
      (channel) => dispatch(receiveChannel(channel)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}

export const createChannel = (channel) => (dispatch) => {
  return APIUtil.createChannel(channel)
    .then(
      (channel) => dispatch(receiveChannel(channel)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}

export const updateChannel = (channel) => (dispatch) => {
  return APIUtil.updateChannel(channel)
    .then(
      (channel) => dispatch(receiveChannel(channel)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}

export const deleteChannel = (channelId) => (dispatch) => {
  return APIUtil.deleteChannel(channelId)
    .then(
      (channel) => dispatch(removeChannel(channel.id)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
}
