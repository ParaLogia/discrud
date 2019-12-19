import React from 'react';
import { Link } from 'react-router-dom';

const DEMO_USER = {
  email: 'demo@example.com',
  password: 'asdfasdf'
}

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    const { inputFields } = this.props;
    const inputEntries = inputFields.map(input => [input, '']);
    this.state = Object.fromEntries(inputEntries);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

  handleDemoLogin(e) {
    e.preventDefault();
    this.setState(DEMO_USER);
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

    const demoBlurb = (formType === 'login') ? (
      <span onClick={this.handleDemoLogin} className="demo-blurb">
        <a>Forgot your password? Use mine!</a>
      </span>
    ) : '';

    const altLink = (formType === 'login') ?  (
      <span className="alt-link">
        Need an account?&nbsp;
        <Link to="/register">Register</Link>
      </span>
    ) : (
      <span className="alt-link">
        <Link to="/login">Already have an account?</Link>
      </span>
    )

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <header className="session-form-header">
          {formHeader}
        </header>

        {inputs}

        {demoBlurb}

        <button>{this.props.formType}</button>

        {altLink}

      </form>
    )
  }
}

export default SessionForm;