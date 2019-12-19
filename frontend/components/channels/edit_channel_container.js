import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { updateChannel, deleteChannel } from '../../actions/channel_actions';
import { clearModal } from "../../actions/modal_actions";
import { selectChannel } from '../../reducers/selectors';
import ChannelForm from './channel_form';

const msp = (state, ownProps) => {
  const currentChannelId = ownProps.match.params.channelId;
  const channelId = ownProps.channelId;
  return {
    formType: 'edit',
    channel: selectChannel(state, channelId),
    currentChannelId
  }
}

const mdp = (dispatch) => {
  return {
    submitForm: (channel) => dispatch(updateChannel(channel)),
    clearModal: () => dispatch(clearModal()),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
  }
}

export default withRouter(connect(msp, mdp)(ChannelForm));