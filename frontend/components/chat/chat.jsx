import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectMessagesOfChannel } from '../../reducers/selectors';
import ChatForm from './chat_form';
import MessageGroup from './message_group';
import { createThreadSubscription } from '../../util/chat_util'

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();

    const { threadId, receiveNewMessage, removeMessage } = this.props;
    this.subscription = createThreadSubscription(threadId, receiveNewMessage, removeMessage);
  }

  componentDidUpdate(prevProps) {
    const { threadId, receiveNewMessage, removeMessage } = this.props;

    if (!prevProps.threadId || prevProps.threadId !== threadId) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      } 
      this.subscription = createThreadSubscription(threadId, receiveNewMessage, removeMessage);
    }

    if (this._shouldScroll(prevProps)) {
      this.scrollToBottom();
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
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

  shouldGroupMessages(prevMsg, currMsg) {
    if (currMsg.authorId !== prevMsg.authorId) {
      return false;
    }
    const currMsgDate = new Date(currMsg.createdAt);
    const prevMsgDate = new Date(prevMsg.createdAt);
    const timeDiff = currMsgDate.getTime() - prevMsgDate.getTime();
    
    // Five minutes
    return timeDiff < (5 * 60 * 1000);
  }

  render() {
    const { 
      messages, 
      threadId, 
      submitMessage,
      currentServer,
      currentUser
    } = this.props;
    
    let messageGroups = [];

    let prevMsg = { createdAt: 0 };
    messages.forEach((msg) => {
      if (this.shouldGroupMessages(prevMsg, msg)) {
        const lastGroup = messageGroups[messageGroups.length-1];
        lastGroup.push(msg);
      } else {
        messageGroups.push([msg]);
      }
      prevMsg = msg;
    })

    messageGroups = messageGroups.map((messages, idx) => (
      <MessageGroup 
        key={idx} 
        messages={messages}
        currentServer={currentServer}
        currentUser={currentUser} />
    ));

    return (
      <div className="chat-content-wrapper">
        <section className="chat-content">
          <section className="messages-container">
            <div className="scroller-wrapper">
              <div className="scroller">
                <div className="chat-header">
                </div>

                {messageGroups}

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