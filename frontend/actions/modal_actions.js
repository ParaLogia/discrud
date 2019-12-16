
export const ADD_SERVER_MODAL = "ADD_SERVER_MODAL";
export const CREATE_SERVER_MODAL = "CREATE_SERVER_MODAL";
export const EDIT_SERVER_MODAL = "EDIT_SERVER_MODAL";
export const INVITE_TO_SERVER_MODAL = "INVITE_TO_SERVER_MODAL";
export const JOIN_SERVER_MODAL = "JOIN_SERVER_MODAL";
export const CREATE_CHANNEL_MODAL = "CREATE_CHANNEL_MODAL";
export const EDIT_CHANNEL_MODAL = "EDIT_CHANNEL_MODAL";
export const CLEAR_MODAL = "CLEAR_MODAL";


export const addServerModal = () => ({
  type: ADD_SERVER_MODAL
})

export const createServerModal = () => ({
  type: CREATE_SERVER_MODAL
})

export const editServerModal = () => ({
  type: EDIT_SERVER_MODAL
})

export const inviteToServerModal = () => ({
  type: INVITE_TO_SERVER_MODAL
})

export const joinServerModal = () => ({
  type: JOIN_SERVER_MODAL
})

export const createChannelModal = () => ({
  type: CREATE_CHANNEL_MODAL
})

export const editChannelModal = (channelId) => ({
  type: EDIT_CHANNEL_MODAL,
  channelId
})

export const clearModal = () => ({
  type: CLEAR_MODAL
})