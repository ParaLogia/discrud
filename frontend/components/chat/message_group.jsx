import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../reducers/selectors';
import MessageShow from './message_show';

const MessageGroup = ({ messages, author, currentServer, currentUser }) => {
  const canEdit = (author.id === currentUser.id);
  const canDelete = canEdit || (currentUser.id === currentServer.ownerId);

  const firstMessage = messages[0];
  const date = new Date(firstMessage.createdAt)
  const time = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });

  const messageShows = messages.map(message => (
    <MessageShow 
      key={message.id} 
      message={message} 
      canEdit={canEdit}
      canDelete={canDelete} />
  ));

  return (
    <>
      <div className="chat-message-group-divider"></div>
      <div className="chat-message-group">
        <div className="chat-message-header">
          <span className="chat-username">
            {author ? author.username : `user#${firstMessage.authorId}`}
          </span>
          <span className="chat-timestamp">
            {time}
          </span>
        </div>

        {messageShows}

      </div>
    </>
  )
}

const msp = (state, ownProps) => {
  const { messages } = ownProps;
  const author = selectUser(state, messages[0].authorId)

  return {
    author
  }
}

export default connect(msp)(MessageGroup);