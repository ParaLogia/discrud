import { combineReducers } from 'redux';
import { START_LOADING, FINISH_LOADING } from '../actions/ui_actions';
import modalReducer from './modal_reducer';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;

    case FINISH_LOADING:
      return false;

    default:
      return state;
  }
}

const uiReducer = combineReducers({
  modal: modalReducer,
  loading: loadingReducer
})

export default uiReducer;