import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchServers } from '../../actions/server_actions';
import { receiveModal } from '../../actions/ui_actions';
import { selectAllServers } from '../../reducers/selectors';

const msp = (state) => {
  return {
    servers: selectAllServers(state)
  }
}

const mdp = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    receiveModal: (modal) => dispatch(receiveModal(modal))
  }
}

export default connect(msp, mdp)(ServerIndex);