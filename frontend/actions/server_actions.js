import * as APIUtil from '../util/server_api.util';
import { receiveUsers } from './user_actions';
import { receiveCurrentServer } from './ui_actions';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS'; 
export const RECEIVE_SERVER = 'RECEIVE_SERVER'; 
export const REMOVE_SERVER = 'REMOVE_SERVER'; 
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS'; 

export const receiveServers = (servers) => ({
  type: RECEIVE_SERVERS,
  servers
})

export const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server
})

export const removeServer = (serverId) => ({
  type: REMOVE_SERVER,
  serverId
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
})

export const fetchServers = () => (dispatch) => {
  return APIUtil.fetchServers()
    .then(
      ({ servers, users }) => {
        dispatch(receiveServers(servers));
        dispatch(receiveUsers(users));
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const fetchServer = (serverId) => (dispatch) => {
  return APIUtil.fetchServer(serverId)
    .then(
      ({ server, users }) => {
        dispatch(receiveCurrentServer(server));
        dispatch(receiveUsers(users));
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const createServer = (server) => (dispatch) => {
  return APIUtil.createServer(server)
    .then(
      ({ server }) => dispatch(receiveCurrentServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const updateServer = (server) => (dispatch) => {
  return APIUtil.updateServer(server)
    .then(
      ({ server }) => dispatch(receiveServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const deleteServer = (serverId) => (dispatch) => {
  return APIUtil.deleteServer(serverId)
    .then(
      ({ server }) => dispatch(removeServer(server.id)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const joinServer = (serverId) => (dispatch) => {
  return APIUtil.joinServer(serverId)
    .then(
      ({ server, users }) => {
        dispatch(receiveCurrentServer(server));
        dispatch(receiveUsers(users));
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const leaveServer = (serverId) => (dispatch) => {
  return APIUtil.leaveServer(serverId)
    .then(
      ({ server }) => dispatch(removeServer(server.id)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}