import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectChannel, selectMessagesOfChannel } from "../../reducers/selectors";
import { fetchChannel } from '../../actions/channel_actions';
import { createChannelMessage } from '../../actions/message_actions';
import ChannelHeader from './channel_header';
import Chat from '../chat/chat';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { channel } = this.props;
    const { 
      messages,
      fetchChannel,
      createChannelMessage, 
      receiveNewMessage,
      removeMessage,
      currentServer,
      currentUser,
      match
    } = this.props;

    if (!channel) {
      if (!currentServer || !currentServer.channelIds || !currentServer.channelIds[0]) {
        const dummyChannel = {
          id: match.params.channelId,
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

        <Chat 
          threadId={channel.id}
          fetchThread={fetchChannel}
          messages={messages}
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
  const messages = selectMessagesOfChannel(state, channelId);

  return {
    channel,
    messages
  };
}

const mdp = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    createChannelMessage: (message) => dispatch(createChannelMessage(message))
  }
}

export default connect(msp, mdp)(ChannelShow);