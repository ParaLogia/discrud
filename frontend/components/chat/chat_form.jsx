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
    submitMessage(Object.assign({}, this.state, { threadId }))
      .then(() => this.setState({
        body: ''
      }));
  }

  render() {
    const placeholder = (this.state.body.length === 0) ? (
      <div className="chat-input-placeholder"
        aria-hidden="true">
        Type your message here, then hit enter
      </div>
    ) : null;

    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <div className="chat-input-container">
          {placeholder}

          <input type="text" 
                className="chat-input" 
                onChange={this.handleUpdate}
                value={this.state.body}
                tabIndex="0"/>
        </div>

        <input type="submit" 
               className="hidden" />
      </form>
    )
  }
}

export default ChatForm;