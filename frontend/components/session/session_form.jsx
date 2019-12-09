import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  render() {
    // TODO dynamic input list

    return (
      <form className='session-form'>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"/>

        <button>{this.props.formType}</button>
      </form>
    )
  }
}

export default SessionForm;