import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';

const msp = (state) => {
  const { currentUserId } = state.session;
  const { currentServerId } = state.ui;
  return {
    currentUser: state.entities.users[currentUserId],
    currentServer: state.entities.servers[currentServerId]
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Sidebar)