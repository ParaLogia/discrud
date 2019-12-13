import React from 'react';
import { connect } from 'react-redux';
import ServerFormFooter from './server_form_footer';
import { clearModal } from '../../actions/ui_actions';
import { joinServer } from '../../actions/server_actions';

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
    this.setState({
      inviteToken: e.target.value
    });
  }

  handleClickBack(e) {
    e.preventDefault();
    this.props.clearModal();
  }

  handleSubmit() {
    const { joinServer, clearModal } = this.props;

    joinServer(this.state.inviteToken)
      .then(({ server }) => {
        clearModal();
        this.props.history.push(`${server.id}`);
      });
  }

  render() {
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
            qJq5C
          </p>
          <div className="invite-input-container">
            <input type="text"
                  onChange={this.handleUpdateInviteToken}
                  value={this.state.inviteToken} />
            <span className="invite-hint">
              Enter an invite
            </span>
          </div>
        </div>

        <ServerFormFooter submitText="join" 
                          handleClickBack={this.handleClickBack} />
      </form>
    )
  }
}

const mdp = (dispatch) => {
  return {
    clearModal: () => dispatch(clearModal()),
    joinServer: (inviteToken) => dispatch(joinServer(inviteToken))
  }
}

export default connect(null, mdp)(JoinServerForm);