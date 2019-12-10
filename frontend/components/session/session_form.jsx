import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    const { inputFields } = this.props;
    const inputEntries = inputFields.map(input => [input, '']);
    this.state = Object.fromEntries(inputEntries);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field) {
    return (e) => {
      e.preventDefault();
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formValues = Object.assign({}, this.state);
    this.props.submitForm(formValues);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { formType, inputFields, errors } = this.props;

    const formHeader = (formType === 'login') ? (
      <>
        <h1>Welcome back!</h1>
        <h2>We&apos;re so excited to see you again!</h2>
      </>
    ) : (
      <>
        <h1>Create an account</h1>
      </>
    );

    const inputs = inputFields.map((field, idx) => {
      const isError = Boolean(errors[field]);
      return (
        <label key={idx} className={isError ? 'session-error' : ''}>
          {field}
          <i>
            {isError ? ' - ' : ''}
          </i>
          <span>
            {errors[field]}
          </span>
          <input type={field} 
                onChange={this.handleUpdate(field)} 
                value={this.state[field]}
                required />
        </label>
      )
    });

    const altLink = (formType === 'login') ?  (
      <span>
        Need an account?&nbsp;
        <Link to="/register">Register</Link>
      </span>
    ) : (
      <span>
        <Link to="/login">Already have an account?</Link>
      </span>
    )

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <header className="session-form-header">
          {formHeader}
        </header>

        {inputs}

        <button>{this.props.formType}</button>

        {altLink}

      </form>
    )
  }
}

export default SessionForm;