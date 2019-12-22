import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { clearModal, addServerModal } from '../../actions/modal_actions';
import ServerForm from './server_form';
import { withRouter } from 'react-router-dom';

const msp = () => {
  return {
    formType: 'create',
    server: { name: '' }
  }
}

const mdp = (dispatch) => {
  return {
    submitForm: (server) => dispatch(createServer(server)),
    clearModal: () => dispatch(clearModal()),
    backAction: () => dispatch(addServerModal())
  }
}

export default withRouter(connect(msp, mdp)(ServerForm));