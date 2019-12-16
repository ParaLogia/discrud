import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchServers } from '../../actions/server_actions';
import { addServerModal } from '../../actions/modal_actions';
import { selectAllServers } from '../../reducers/selectors';

const msp = (state) => {
  return {
    servers: selectAllServers(state)
  }
}

const mdp = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    addServerModal: () => dispatch(addServerModal())
  }
}

export default connect(msp, mdp)(ServerIndex);