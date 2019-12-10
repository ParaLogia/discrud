import { connect } from 'react-redux';
import SessionForm from './session_form';
import { register, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'register',
    inputFields: ['email', 'username', 'password']
  }
};

const mdp = (dispatch) => {
  return { 
    submitForm: (user) => dispatch(register(user)),
    clearErrors: () => dispatch(clearErrors())
  }
};

export default connect(msp, mdp)(SessionForm);