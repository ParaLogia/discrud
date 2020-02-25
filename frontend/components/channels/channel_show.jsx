import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectChannel, selectMessagesOfChannel } from "../../reducers/selectors";
import { fetchChannel } from '../../actions/channel_actions';
import { createChannelMessage } from '../../actions/message_actions';
import ChannelHeader from './channel_header';
import Chat from '../chat/chat';
import MemberList from './member_list';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMemberList: true
    }

    this.toggleMemberList = this.toggleMemberList.bind(this);
  }

  componentDidMount() {
    const { channel } = this.props;
    if (channel) {
      document.title = channel.name;
    }
  }

  componentDidUpdate(prevProps) {
    const { channel } = this.props;
    const prevChannel = prevProps.channel;
    if (channel && (!prevChannel || channel.id !== prevChannel.id)) {
      document.title = `#${channel.name}`;
    }

  }

  toggleMemberList() {
    this.setState(({ showMemberList }) => ({
      showMemberList: !showMemberList
    }))
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

    const memberList = (this.state.showMemberList) ? (
      <MemberList server={currentServer} />
    ) : null;

    return (
      <div className="channel-show">
        <ChannelHeader channel={channel} toggleMemberList={this.toggleMemberList} />

        <div className="channel-main">
          <Chat 
            threadId={channel.id}
            fetchThread={fetchChannel}
            messages={messages}
            submitMessage={createChannelMessage}
            receiveNewMessage={receiveNewMessage}
            removeMessage={removeMessage}
            isOwner={currentServer && currentServer.ownerId === currentUser.id} 
            currentUser={currentUser} />

            {memberList}
        </div>
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