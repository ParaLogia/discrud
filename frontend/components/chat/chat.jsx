import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectMessagesOfChannel } from '../../reducers/selectors';
import ChatForm from './chat_form';
import MessageShow from './message_show';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    if (this._shouldScroll(prevProps)) {
      this.scrollToBottom();
    }
  }

  _shouldScroll(prevProps) {
    if (prevProps.threadId !== this.props.threadId) {
      return true;
    } 
    const prevMsgs = prevProps.messages;
    const currMsgs = this.props.messages;

    if (currMsgs.length) {
      if (!prevMsgs.length) {
        return true;
      } 
      const prevLastMsg = prevMsgs[prevMsgs.length - 1];
      const currLastMsg = currMsgs[currMsgs.length - 1];

      if (prevLastMsg.id !== currLastMsg.id) {
        return true;
      }
    }
    
    return false;
  }

  scrollToBottom() {
    const { current } = this.bottom;
    if (current) {
      current.scrollIntoView({
        behavior: 'smooth',
        block: "end"
      });
    }
  }

  render() {
    const { messages, threadId, submitMessage } = this.props;
    const chatMessages = messages.map((message) => (
      <MessageShow key={message.id} 
                   message={message} />
    ));

    return (
      <div className="chat-content-wrapper">
        <section className="chat-content">
          <section className="messages-container">
            <div className="scroller-wrapper">
              <div className="scroller">
                <div className="chat-header">
                </div>

                {chatMessages}

                <div className="chat-bottom" ref={this.bottom}>
                </div>
              </div>
            </div>
          </section>

          <ChatForm threadId={threadId} submitMessage={submitMessage} />        
        </section>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const { threadId } = ownProps;
  const messages = selectMessagesOfChannel(state, threadId);

  return {
    threadId,
    messages
  }
}

export default withRouter(connect(msp)(Chat));