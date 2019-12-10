import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    inputFields: ['email', 'password']
  }
};

const mdp = (dispatch) => {
  return {
    submitForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
};

export default connect(msp, mdp)(SessionForm);