import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import ServerForm from './server_form';

const msp = () => {
  return {
    formType: 'create',
    server: { name: '' }
  }
}

const mdp = (dispatch) => {
  return {
    submitForm: (server) => dispatch(createServer(server))
  }
}

export default connect(msp, mdp)(ServerForm);