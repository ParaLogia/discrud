import React from 'react'; 

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.channel;

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field) {
    return (e) => {
      e.preventDefault();
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    const { channel, deleteChannel, clearModal, history, currentChannelId } = this.props;
    const deletedChannelId = channel.id;
    deleteChannel(deletedChannelId)
      .then(() => {
        clearModal();
        if (currentChannelId == deletedChannelId) {
          history.push(`/channels/${channel.serverId}`);
        }
      });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.clearModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const {submitForm, clearModal } = this.props;

    submitForm(Object.assign({}, this.state))
      .then(({ channel }) => {
        clearModal();
        this.props.history.push(`/channels/${channel.serverId}/${channel.id}`)
      });
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const { formType } = this.props;

    const deleteButton = formType === 'edit' ? (
      <button type="button" 
              className="delete-button"
              onClick={this.handleDelete}>
        Delete
      </button>
    ) : <div></div>;

    return (
      <form className="channel-form" onSubmit={this.handleSubmit}>
        <div className="channel-form-wrapper">
          <h2>
            {formType} Text Channel
          </h2>

          <label>
            Channel Name
            <input type="text" 
                   ref={(nameInput) => this.nameInput = nameInput}
                   value={this.state.name}
                   onChange={this.handleUpdate('name')}/>
          </label>

          <label>
            Channel Topic
            <textarea value={this.state.topic}
                      onChange={this.handleUpdate('topic')}/>
          </label>

        </div>
        <div className="button-container">

          {deleteButton}

          <div>
            <button type="button" 
                    className="cancel-button" 
                    onClick={this.handleCancel}>
              Cancel
            </button>

            <button type="submit">
              {formType} channel
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default ChannelForm;