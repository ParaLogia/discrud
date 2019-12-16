import React from 'react';
import ServerFormFooter from './server_form_footer';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.server;

    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameUpdate(e) {
    this.setState({name: e.target.value});
  }

  handleClickBack(e) {
    e.preventDefault();
    this.props.backAction();
  }

  handleSubmit(e) {
    e.preventDefault();

    const {submitForm, clearModal} = this.props;
    submitForm(Object.assign({}, this.state))
      .then(({server}) => {
        clearModal();
        this.props.history.push(`/channels/${server.id}`);
      });
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const { formType } = this.props;

    const title = <h1>{`${formType} your server`}</h1>

    const description = (
      <p className="server-form-description">
        {
          (formType === 'create') ? 
            "By creating a server, you will have access to free voice and text chat to use amongst your friends." :
            "By editing your server, you will confuse every member of the server, most likely."
        }
      </p>
    )
      
    return (
      <form className="server-form-container" onSubmit={this.handleSubmit}>
        <div className="server-form">

          {title}

          {description}

          <div className="server-form-inner-container">
            <div className="server-form-input-container">
              <label htmlFor="name">
                server name
              </label>
              <input
                type="text"
                id="name"
                onChange={this.handleNameUpdate}
                value={this.state.name}
                ref={(nameInput) => this.nameInput = nameInput}
                placeholder="Enter a server name"
              />
            </div>
            <div className="server-photo-preview">
              {this.state.name[0]}
            </div>
          </div>
        </div>

        <ServerFormFooter 
          submitText={formType} 
          handleClickBack={this.handleClickBack} />
          
      </form>
    )
  }
}

export default ServerForm;