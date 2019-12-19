import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectChannel } from "../../reducers/selectors";
import { fetchChannel } from '../../actions/channel_actions';
import { createChannelMessage, receiveNewMessage, removeMessage } from '../../actions/message_actions';
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
    let { channel } = this.props;
    const { 
      createChannelMessage, 
      receiveNewMessage,
      removeMessage,
      currentServer,
      currentUser
    } = this.props;

    if (!channel) {
      if (!currentServer || !currentServer.channelIds || !currentServer.channelIds[0]) {
        const dummyChannel = {
          name: '',
          messageIds: []
        }

        channel = dummyChannel;
      }
      else {
        const firstChannelId = currentServer.channelIds[0];

        return (
          <Redirect to={`/channels/${currentServer.id}/${firstChannelId}`} />
        );
      }

    }

    return (
      <div className="channel-show">
        <ChannelHeader channel={channel} />

        <Chat threadId={channel.id} 
              submitMessage={createChannelMessage}
              receiveNewMessage={receiveNewMessage}
              removeMessage={removeMessage}
              currentServer={currentServer} 
              currentUser={currentUser} />
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
    createChannelMessage: (message) => dispatch(createChannelMessage(message)),
    receiveNewMessage: (message) => dispatch(receiveNewMessage(message)),
    removeMessage: (message) => dispatch(removeMessage(message))
  }
}

export default connect(msp, mdp)(ChannelShow);