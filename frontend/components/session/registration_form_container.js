import { connect } from 'react-redux';
import SessionForm from './session_form';
import { register } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Register'
  }
};

const mdp = (dispatch) => {
  return { 
    submitForm: (user) => dispatch(register(user))
  }
};

export default connect(msp, mdp)(SessionForm);