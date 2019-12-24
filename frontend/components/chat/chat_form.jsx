import React from 'react';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ''
    }
    
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({
      body: event.target.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { submitMessage, threadId } = this.props;
    submitMessage({ body: this.state.body, threadId })
      .then(() => this.setState({ body: '' }));
  }

  render() {
    if (!this.props.threadId) {
      return <div className="chat-form">
        <div className="chat-input-container">
          <div className="chat-input"></div>
        </div>
      </div>
    }

    const placeholder = (this.state.body.length === 0) ? (
      <span>
        <div className="chat-input-placeholder"
          aria-hidden="true">
          Type your message here, then hit enter
        </div>
      </span>
    ) : null;

    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <div className="chat-input-container">
          {placeholder}

          <input type="text" 
                className="chat-input" 
                onChange={this.handleUpdate}
                value={this.state.body}
                tabIndex="0" />
        </div>

        <input type="submit" 
               className="hidden" />
      </form>
    )
  }
}

export default ChatForm;