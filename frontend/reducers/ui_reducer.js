import { 
  RECEIVE_MODAL, 
  CLEAR_MODAL, 
  START_LOADING, 
  FINISH_LOADING,
} from '../actions/ui_actions';

const preloadedState = {
  modal: null,
  loading: false,
  // onlineUsers: []
}

const uiReducer = (state = preloadedState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MODAL:
      return Object.assign({}, state, { modal: action.modal });
      
    case CLEAR_MODAL:
      return Object.assign({}, state, { modal: null });

    case START_LOADING:
      return Object.assign({}, state, { loading: true });

    case FINISH_LOADING:
      return Object.assign({}, state, { loading: null });
    default:
      return state;
  }
}

export default uiReducer;