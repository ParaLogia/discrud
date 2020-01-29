import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../reducers/selectors';
import MessageShow from './message_show';

class MessageGroup extends React.Component {
  componentDidMount() {
    const { author, messages, fetchUser } = this.props;
    if (!author) {
      const { authorId } = messages[0];
      fetchUser(authorId);
    }
  }

  render() {
    const { 
      messages, 
      author, 
      isOwner, 
      currentUser, 
      deleteMessage,
      updateMessage,
      editing,
      setEditing
    } = this.props;

    const canEdit = author && (author.id === currentUser.id);
    const canDelete = isOwner || canEdit;

    const firstMessage = messages[0];
    const date = new Date(firstMessage.createdAt)
    const time = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });

    const username = author ? author.username : `User#${firstMessage.authorId}`;

    const messageShows = messages.map(message => (
      <MessageShow 
        key={message.id} 
        message={message} 
        canEdit={canEdit}
        canDelete={canDelete}
        deleteMessage={deleteMessage} 
        updateMessage={updateMessage} 
        isEditing={message.id === editing}
        setEditing={setEditing} />
    ));

    return (
      <>
        <hr className="chat-message-group-divider"></hr>
        <div className="chat-message-group">
          <div className="chat-avatar">
            {username[0]}
          </div>
          <h3 className="chat-message-header">
            <span className="chat-username">
              {username}
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
}

const msp = (state, ownProps) => {
  const { messages } = ownProps;
  const author = selectUser(state, messages[0].authorId)

  return {
    author
  }
}

export default connect(msp)(MessageGroup);
