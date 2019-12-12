
export const RECEIVE_MODAL = "RECEIVE_MODAL"
export const CLEAR_MODAL = "CLEAR_MODAL"
export const START_LOADING = "START_LOADING"
export const FINISH_LOADING = "FINISH_LOADING"

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