import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectMessagesOfChannel } from '../../reducers/selectors';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    const chatMessages = messages.map(message => (
      <div key={message.id}>
        {message.body}
      </div>
    ));

    return (
      <section className="chat-container">
        <section className="messages-container">
          {chatMessages}
        </section>
        <form className="chat-form">
          <input className="chat-input" type="text"/>
        </form>
      </section>
    )
  }
}

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const messages = selectMessagesOfChannel(state, channelId);

  return {
    messages
  }
}

export default withRouter(connect(msp)(Chat));