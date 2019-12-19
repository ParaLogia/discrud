import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../reducers/selectors';
import { deleteMessage } from '../../actions/message_actions';
import MessageShow from './message_show';

const MessageGroup = ({ messages, author, currentServer, currentUser, deleteMessage }) => {
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
      canDelete={canDelete}
      deleteMessage={deleteMessage} />
  ));

  return (
    <>
      <hr className="chat-message-group-divider"></hr>
      <div className="chat-message-group">
        <h3 className="chat-message-header">
          <span className="chat-username">
            {author ? author.username : `user#${firstMessage.authorId}`}
          </span>
          <span className="chat-timestamp">
            {time}
          </span>
        </h3>

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

const mdp = (dispatch) => {
  return {
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
  }
}

export default connect(msp, mdp)(MessageGroup);