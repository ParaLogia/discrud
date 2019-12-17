import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../reducers/selectors';

const MessageShow = ({ message, author }) => {

  // const date = new Date(message.createdAt)
  // const time = date.toLocaleTimeString();

  return (
    <div className="chat-message">
      {author.username}: {message.body}
    </div>
  )
}

const msp = (state, ownProps) => {
  const { message } = ownProps;
  const author = selectUser(state, message.authorId)

  return {
    author
  }
}

export default connect(msp)(MessageShow);