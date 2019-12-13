import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchServer, deleteServer, leaveServer } from '../../actions/server_actions';
import Content from './content';

const msp = (state, ownProps) => {
  const { currentUserId } = state.session;
  const currentUser = state.entities.users[currentUserId];

  const currentServerId = ownProps.match.params.serverId;
  const dummyServer = { name: 'Loading...' }
  let currentServer = null;
  if (currentServerId !== '@me') {
    currentServer = state.entities.servers[currentServerId] || dummyServer;
  }

  return {
    currentUser,
    currentServer
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    leaveServer: (serverId) => dispatch(leaveServer(serverId))
  }
}

export default connect(msp, mdp)(Content)