import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const fetchUser = (userId) => (dispatch) => {
  return APIUtil.fetchUser(userId)
    .then(
      (user) => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
}