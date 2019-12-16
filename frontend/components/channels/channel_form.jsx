import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.channel;

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

  render() {
    const { formType } = this.props;

    return (
      <div className="channel-form-container">
        <form className="channel-form" onSubmit={this.handleSubmit}>
          <h2>
            Create Text Channel
          </h2>

          <label>
            Channel Name
            <input type="text" 
                   value={this.state.name}
                   onChange={this.handleUpdate('name')}/>
          </label>

          <label>
            Channel Topic
            <textarea value={this.state.topic}
                      onChange={this.handleUpdate('topic')}/>
          </label>

          <div className="button-container">
            <button className="cancel-button" onClick={this.handleCancel}>
              Cancel
            </button>
            <button>
              {formType}&nbsp;Channel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ChannelForm;