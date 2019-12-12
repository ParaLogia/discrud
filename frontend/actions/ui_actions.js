
export const RECEIVE_MODAL = "RECEIVE_MODAL"
export const CLEAR_MODAL = "CLEAR_MODAL"
export const START_LOADING = "START_LOADING"
export const FINISH_LOADING = "FINISH_LOADING"
export const RECEIVE_CURRENT_SERVER = "RECEIVE_CURRENT_SERVER"
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL"

export const receiveModal = (modal) => ({
  type: RECEIVE_MODAL,
  modal
})

export const clearModal = () => ({
  type: CLEAR_MODAL
})

export const startLoading = () => ({
  type: START_LOADING
})

export const finishLoading = () => ({
  type: FINISH_LOADING
})

export const receiveCurrentServer = (server) => ({
  type: RECEIVE_CURRENT_SERVER,
  server
})

export const receiveCurrentChannel = (channel) => ({
  type: RECEIVE_CURRENT_CHANNEL,
  channel
})