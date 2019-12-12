import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { clearModal } from '../../actions/ui_actions';
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
    clearModal: () => dispatch(clearModal())
  }
}

export default withRouter(connect(msp, mdp)(ServerForm));