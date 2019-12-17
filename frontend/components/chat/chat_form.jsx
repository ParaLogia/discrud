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