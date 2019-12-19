import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchServer, deleteServer, leaveServer } from '../../actions/server_actions';
import { selectUser, selectServer, selectChannelsOfServer } from '../../reducers/selectors';
import { addServerModal } from '../../actions/modal_actions'
import Content from './content';

const msp = (state, ownProps) => {
  const { currentUserId } = state.session;
  const currentUser = selectUser(state, currentUserId);

  let currentServer = null;
  const dummyServer = { name: 'Loading...' }
  const currentServerId = ownProps.match.params.serverId;
  if (currentServerId !== '@me') {
    currentServer = selectServer(state, currentServerId) || dummyServer;
  }

  const channels = selectChannelsOfServer(state, currentServerId);

  return {
    currentUser,
    currentServer,
    channels
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    leaveServer: (serverId) => dispatch(leaveServer(serverId)),
    addServerModal: () => dispatch(addServerModal()),
  }
}

export default connect(msp, mdp)(Content)