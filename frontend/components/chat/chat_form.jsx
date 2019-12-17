import React from 'react';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      threadId: this.props.threadId,
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
    this.props.submitMessage(this.state)
      .then(() => this.setState({
        body: ''
      }));
  }

  render() {
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <input type="text" 
               className="chat-input" 
               onChange={this.handleUpdate}
               value={this.state.body}/>

        <input type="submit"/>
      </form>
    )
  }
}

export default ChatForm;