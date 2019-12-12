import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';

const msp = (state, ownProps) => {
  const { currentUserId } = state.session;
  const currentServerId = ownProps.match.params.serverId;
  const currentServer = (currentServerId !== '@me') ? 
      state.entities.servers[currentServerId] : null

  return {
    currentUser: state.entities.users[currentUserId],
    currentServer
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Sidebar)