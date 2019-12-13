import { connect } from 'react-redux';
import { updateServer } from '../../actions/server_actions';
import { clearModal } from '../../actions/ui_actions';
import ServerForm from './server_form';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const serverId = ownProps.match.params.serverId;
  const dummyServer = { name: '' }
  return {
    formType: 'edit',
    server: state.entities.servers[serverId] || dummyServer
  };
}

const mdp = (dispatch) => {
  return {
    submitForm: (server) => dispatch(updateServer(server)),
    clearModal: () => dispatch(clearModal())
  }
}

export default withRouter(connect(msp, mdp)(ServerForm));