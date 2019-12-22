import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ServerFormFooter from './server_form_footer';
import { clearModal, addServerModal } from '../../actions/modal_actions';
import { joinServer, clearErrors } from '../../actions/server_actions';

class JoinServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteToken: ""
    }

    this.handleUpdateInviteToken = this.handleUpdateInviteToken.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdateInviteToken(e) {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
    this.setState({
      inviteToken: e.target.value
    });
  }

  handleClickBack(e) {
    e.preventDefault();
    this.props.backAction();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { joinServer, clearModal } = this.props;

    joinServer(this.state.inviteToken)
      .then(({ server }) => {
        clearModal();
        this.props.history.push(`/channels/${server.id}`);
      });
  }

  render() {
    const hasErrors = this.props.errors.length > 0;

    return (
      <form className="server-form-container join-server-form" onSubmit={this.handleSubmit}>
        <div className="server-form">
          <h1>
            Join a Server
          </h1>
          <p className="server-form-description">
            Enter an invite below to join an existing server.<br />
            The invite will look something like this:
          </p>
          <p className="sample-invite">
            e0jK8w
          </p>
          <div className="invite-input-container">
            <input className={hasErrors ? 'invite-error' : ''}
                  type="text"
                  onChange={this.handleUpdateInviteToken}
                  value={this.state.inviteToken} />
            <span className="invite-hint">
              Enter an invite&nbsp;
              <span className={`invite-error ${hasErrors ? '' : 'hidden'}`}>
                  (The invite is invalid or has expired.)
              </span>
            </span>
          </div>
        </div>

        <ServerFormFooter submitText="join" 
                          handleClickBack={this.handleClickBack} />
      </form>
    )
  }
}

const msp = (state) => {
  return {
    errors: state.errors.server
  }
}

const mdp = (dispatch) => {
  return {
    clearModal: () => dispatch(clearModal()),
    clearErrors: () => dispatch(clearErrors()),
    joinServer: (inviteToken) => dispatch(joinServer(inviteToken)),
    backAction: () => dispatch(addServerModal())
  }
}

export default withRouter(connect(msp, mdp)(JoinServerForm));