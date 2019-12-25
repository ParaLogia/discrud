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
      currentServer, 
      currentUser, 
      deleteMessage,
      updateMessage,
      editing,
      setEditing
    } = this.props;

    // TODO factor out currentServer/user logic
    const canEdit = author && (author.id === currentUser.id);
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
        deleteMessage={deleteMessage} 
        updateMessage={updateMessage} 
        isEditing={message.id === editing}
        setEditing={setEditing} />
    ));

    return (
      <>
        <hr className="chat-message-group-divider"></hr>
        <div className="chat-message-group">
          <h3 className="chat-message-header">
            <span className="chat-username">
              {author ? author.username : `User#${firstMessage.authorId}`}
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
