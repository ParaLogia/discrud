import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { inviteToServerModal, createChannelModal, editServerModal } from '../../actions/modal_actions';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false
    };

    this.removeServerAction = this.props.leaveServer;
    this.removeServerText = 'Leave';
    this.removeServerIcon = <i className="fas fa-arrow-alt-circle-left"></i>

    this._currentUserIsOwner = this._currentUserIsOwner.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.handleInviteToServer = this.handleInviteToServer.bind(this);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.handleEditServer = this.handleEditServer.bind(this);
    this.handleRemoveServer = this.handleRemoveServer.bind(this);
  }

  componentDidMount() {
    this._updateDropdown();
  }

  componentDidUpdate(prevProps) {
    const prevServer = prevProps.currentServer;
    const nextServerId = this.props.match.params.serverId;
    if (prevServer.id != nextServerId) {
      this._updateDropdown();
    }
  }

  _currentUserIsOwner() {
    const { currentServer, currentUser } = this.props;
    return currentServer.ownerId === currentUser.id;
  }

  _updateDropdown() {
    const { deleteServer, leaveServer } = this.props;
    if (this.state.dropdown) {
      this.hideDropdown();
    }

    if (this._currentUserIsOwner()) {
      this.removeServerAction = deleteServer;
      this.removeServerText = 'delete';
      this.removeServerIcon = <i className="fas fa-trash"></i>
    } else {
      this.removeServerAction = leaveServer;
      this.removeServerText = 'leave';
      this.removeServerIcon = <i className="fas fa-arrow-alt-circle-left"></i>

    }
  }

  toggleDropdown() {
    this.setState(({ dropdown }) => ({ dropdown: !dropdown }));
  }

  hideDropdown() {
    this.setState({ dropdown: false })
  }

  handleInviteToServer(e) {
    e.preventDefault();
    this.hideDropdown();
    this.props.inviteToServerModal();
  }

  handleCreateChannel(e) {
    e.preventDefault();
    this.hideDropdown();
    this.props.createChannelModal();
  }

  handleEditServer(e) {
    e.preventDefault();
    this.hideDropdown();
    this.props.editServerModal();
  }

  handleRemoveServer(e) {
    e.preventDefault();
    const serverId = this.props.currentServer.id;
    this.removeServerAction(serverId)
      .then(this.props.history.push('/channels/@me'));
  }

  render() {
    const { currentServer } = this.props;
    const { dropdown } = this.state;

    const inviteOption = (
      <div className="dropdown-option invite-option"
           onClick={this.handleInviteToServer}>
        Invite People
        <div className="icon-container">
          <i className="fas fa-user-plus"></i>
        </div>
      </div>
    )

    const createChannelOption = (this._currentUserIsOwner()) ? (
      <div className="dropdown-option"
           onClick={this.handleCreateChannel}>
        Create Channel
        <div className="icon-container">
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    ) : null;

    const editOption = (this._currentUserIsOwner()) ? (
      <div className="dropdown-option"
           onClick={this.handleEditServer}>
        Edit
        <div className="icon-container">
          <i className="fas fa-edit"></i>
        </div>
      </div>
    ) : null;

    const removeOption = (
      <div className="dropdown-option destructive"
           onClick={this.handleRemoveServer}>
        {this.removeServerText}
        <div className="icon-container">
          {this.removeServerIcon}          
        </div>
      </div>
    )

    return (
      <header className="server-header" 
        onClick={this.toggleDropdown}
        onBlur={this.hideDropdown}
        tabIndex="0"
      >
        <div className="server-title-container">          
          <h1 className="server-title">
            {currentServer.name}
          </h1>
          <i className={dropdown ? "fas fa-times" : "fas fa-angle-down"}></i>
        </div>

        <div className={`server-dropdown ${dropdown ? 'active' : 'hidden'}`}>

          {inviteOption}

          {createChannelOption}

          {editOption}

          {removeOption}
        </div>
      </header>
    )
  }
}

const msp = (state, ownProps) => {
  return { 
    currentServer: ownProps.currentServer,
    currentUser: ownProps.currentUser
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    inviteToServerModal: () => dispatch(inviteToServerModal()),
    createChannelModal: () => dispatch(createChannelModal()),
    editServerModal: () => dispatch(editServerModal()),
    deleteServer: ownProps.deleteServer,
    leaveServer: ownProps.leaveServer
  }
}

export default withRouter(connect(msp, mdp)(ServerHeader));