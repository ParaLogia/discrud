import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchServers } from '../../actions/server_actions';

const msp = (state) => {
  return {
    servers: Object.values(state.entities.servers)
  }
}

const mdp = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers())
  }
}

export default connect(msp, mdp)(ServerIndex);