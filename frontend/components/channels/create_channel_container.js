import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createChannel } from '../../actions/channel_actions';
import { clearModal } from "../../actions/modal_actions";
import ChannelForm from './channel_form';

const msp = (state, ownProps) => {
  const currentChannelId = ownProps.match.params.channelId;
  const serverId = ownProps.match.params.serverId;
  return {
    formType: 'create',
    channel: {
      name: '',
      topic: '',
      serverId
    },
    currentChannelId
  }
}

const mdp = (dispatch) => {
  return {
    submitForm: (channel) => dispatch(createChannel(channel)),
    clearModal: () => dispatch(clearModal())
  }
}

export default withRouter(connect(msp, mdp)(ChannelForm));