import React from 'react';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;

    return (
      <div className="chat-message">
        <div className="chat-options-button">
          <i className="fas fa-ellipsis-v"></i>
        </div>
        {message.body}
      </div>
    )
  }
}

export default MessageShow;