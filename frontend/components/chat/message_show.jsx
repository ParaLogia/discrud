import React from 'react';
import EditMessageForm from './edit_message_form';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: false };

    this.handleCopyID = this.handleCopyID.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  toggleDropdown() {
    this.setState(({ dropdown }) => ({ dropdown: !dropdown }));
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  handleCopyID(e) {
    e.preventDefault();
    const { message } = this.props;
    navigator.clipboard.writeText(message.id);
  }

  handleDelete(e) {
    e.preventDefault();
    const { message, deleteMessage } = this.props;
    deleteMessage(message.id);
  }

  handleEdit(e) {
    e.preventDefault();
    const { message, setEditing } = this.props;
    setEditing(message.id);
  }

  render() {
    const { 
      message, 
      canEdit, 
      canDelete,
      isEditing,
      deleteMessage,
      updateMessage,
      setEditing
    } = this.props;

    if (isEditing) {
      return (
        <div className="chat-message">
          <EditMessageForm 
            message={message}
            deleteMessage={deleteMessage}
            updateMessage={updateMessage} 
            setEditing={setEditing}/>
        </div>
      )
    }

    const editOption = canEdit ? (
      <div className="message-dropdown-option"
           onClick={this.handleEdit}>
        Edit
      </div>
    ) : null;

    const deleteOption = canDelete ? (
      <div className="message-dropdown-option"
           onClick={this.handleDelete}>
        Delete
      </div>
    ) : null;

    return (
      <div className="chat-message">
        <div className={`chat-options-button ${this.state.dropdown ? 'selected' : ''}`}
             onClick={() => this.toggleDropdown()}
             onBlur={() => this.hideDropdown()}
             tabIndex="0">
          <i className="fas fa-ellipsis-v"></i>

          <div className={`message-dropdown ${this.state.dropdown ? 'active' : 'hidden'}`}>
            {editOption}

            <div className="message-dropdown-option" onClick={this.handleCopyID}>
              Copy ID
            </div>

            {deleteOption}

          </div>
        </div>
        {message.body}
      </div>
    )
  }
}

export default MessageShow;