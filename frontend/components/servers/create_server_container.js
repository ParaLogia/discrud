import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { clearModal, receiveModal } from '../../actions/ui_actions';
import { ADD_SERVER } from '../modal/modal';
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
    backAction: () => dispatch(receiveModal(ADD_SERVER))
  }
}

export default withRouter(connect(msp, mdp)(ServerForm));