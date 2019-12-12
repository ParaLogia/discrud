import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.server;

    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameUpdate(e) {
    this.setState({name: e.target.value});
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(Object.assign(this.state));
  }

  render() {
    const { formType } = this.props;

    return (
      <form className="server-form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" onChange={this.handleNameUpdate} value={this.state.name}/>
        </label>

        <button>
          {formType}
        </button>
      </form>
    )
  }
}

export default ServerForm