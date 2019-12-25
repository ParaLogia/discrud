import React from 'react';

class EditMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();

    this.state = Object.assign({}, this.props.message);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.input.current.focus();
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { updateMessage, deleteMessage, setEditing, message } = this.props;
    if (this.state.body === '') {
      deleteMessage(message.id);
    }
    else if (this.state.body !== message.body) {
      const newMessage = { 
        id: message.id,
        body: this.state.body
      };
      updateMessage(newMessage);
    } 
    setEditing(null);
  }

  handleCancel() {
    this.props.setEditing(null);
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.handleCancel();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          className="chat-input"
          ref={this.input}
          onChange={this.handleUpdate}
          value={this.state.body}
          tabIndex="0" 
          onKeyDown={this.handleKeyDown}/>

        <input type="submit"
          className="hidden" />

        <div className="edit-message-hints">
          escape to&nbsp;
          <a onClick={this.handleCancel}>
            cancel
          </a>
          &nbsp;• enter to&nbsp;
          <a onClick={this.handleSubmit}>
            save
          </a>
        </div>
      </form>
    )
  }
}

export default EditMessageForm;