import React from 'react';
import { connect } from 'react-redux';
import { selectChannel } from "../../reducers/selectors";
import { fetchChannel } from '../../actions/channel_actions';
import { createChannelMessage } from '../../actions/message_actions';
import ChannelHeader from './channel_header';
import Chat from '../chat/chat';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { channelId } = this.props.match.params;
    this.props.fetchChannel(channelId);
  }

  componentDidUpdate(prevProps) {
    const { channelId } = this.props.match.params;
    const prevChannelId = prevProps.match.params.channelId;
    if (channelId !== prevChannelId) {
      this.props.fetchChannel(channelId);
    }
  }
  
  render() {
    const { channel, createChannelMessage } = this.props;

    if (!channel) return null;

    return (
      <div className="channel-show">
        <ChannelHeader channel={channel} />

        <Chat thread={channel} submitMessage={createChannelMessage}/>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const { channelId } = ownProps.match.params;
  const channel = selectChannel(state, channelId);

  return {
    channel
  };
}

const mdp = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    createChannelMessage: (message) => dispatch(createChannelMessage(message))
  }
}

export default connect(msp, mdp)(ChannelShow);