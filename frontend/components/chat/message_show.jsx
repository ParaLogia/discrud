import React from 'react';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: false };
  }

  toggleDropdown() {
    this.setState(({ dropdown }) => ({ dropdown: !dropdown }));
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  render() {
    const { message, canEdit, canDelete } = this.props;

    const editOption = canEdit ? (
      <div className="message-dropdown-option">
        Edit
      </div>
    ) : null;

    const deleteOption = canDelete ? (
      <div className="message-dropdown-option">
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

          <div className={`message-dropdown ${this.state.dropdown ? '' : 'hidden'}`}>
            <div className="message-dropdown-option">
              ID: {message.id}
            </div>

            {editOption}

            {deleteOption}

          </div>
        </div>
        {message.body}
      </div>
    )
  }
}

export default MessageShow;