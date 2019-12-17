import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectMessagesOfChannel } from '../../reducers/selectors';
import ChatForm from './chat_form';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages, thread, submitMessage } = this.props;
    const chatMessages = messages.map(message => message ? (
      <div key={message.id}>
        {message.body}
      </div>
    ) : null);

    return (
      <section className="chat-container">
        <section className="messages-container">
          {chatMessages}
        </section>

        <ChatForm threadId={thread.id} submitMessage={submitMessage} />
      </section>
    )
  }
}

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const messages = selectMessagesOfChannel(state, channelId);

  return {
    thread: ownProps.thread,
    messages
  }
}

export default withRouter(connect(msp)(Chat));