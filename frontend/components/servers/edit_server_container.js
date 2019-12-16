import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateServer } from '../../actions/server_actions';
import { clearModal } from '../../actions/modal_actions';
import ServerForm from './server_form';
import { selectServer } from "../../reducers/selectors";

const msp = (state, ownProps) => {
  const serverId = ownProps.match.params.serverId;
  const dummyServer = { name: '' }
  return {
    formType: 'edit',
    server: selectServer(state, serverId) || dummyServer
  };
}

const mdp = (dispatch) => {
  return {
    submitForm: (server) => dispatch(updateServer(server)),
    clearModal: () => dispatch(clearModal()),
    backAction: () => dispatch(clearModal())
  }
}

export default withRouter(connect(msp, mdp)(ServerForm));