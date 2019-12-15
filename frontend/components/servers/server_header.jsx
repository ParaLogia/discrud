import React from 'react';
import { withRouter } from 'react-router-dom';
import { EDIT_SERVER, INVITE_TO_SERVER } from '../modal/modal';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false
    };

    this.removeServerAction = this.props.leaveServer;
    this.removeServerText = 'Leave';

    this.handleInviteToServer = this.handleInviteToServer.bind(this);
    this.handleEditServer = this.handleEditServer.bind(this);
    this.handleRemoveServer = this.handleRemoveServer.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  componentDidMount() {
    this.updateDropdown();
  }

  componentDidUpdate(prevProps) {
    const prevServer = prevProps.currentServer;
    const nextServerId = this.props.match.params.serverId;
    if (prevServer.id != nextServerId) {
      this.updateDropdown();
    }
  }

  updateDropdown() {
    const { currentServer, currentUser, deleteServer, leaveServer } = this.props;
    if (this.state.dropdown) {
      this.hideDropdown();
    }

    if (currentServer.ownerId === currentUser.id) {
      this.removeServerAction = deleteServer;
      this.removeServerText = 'delete';

      this.editOption = (
        <div className="dropdown-option"
             onClick={this.handleEditServer}>
          Edit
        </div>
      )
    } else {
      this.removeServerAction = leaveServer;
      this.removeServerText = 'leave';

      delete this.editOption;
    }
  }

  handleInviteToServer(e) {
    e.preventDefault();
    this.props.receiveModal(INVITE_TO_SERVER);
    this.hideDropdown();
  }

  handleEditServer(e) {
    e.preventDefault();
    this.props.receiveModal(EDIT_SERVER);
    this.hideDropdown();
  }

  handleRemoveServer(e) {
    e.preventDefault();
    const serverId = this.props.currentServer.id;
    this.removeServerAction(serverId)
      .then(this.props.history.push('/channels/@me'));
  }

  toggleDropdown() {
    this.setState(({dropdown}) => ({dropdown: !dropdown}));
  }

  hideDropdown() {
    this.setState({ dropdown: false })
  }

  render() {
    const { currentServer } = this.props;
    const { dropdown } = this.state;

    const inviteOption = (
      <div className="dropdown-option invite-option"
        onClick={this.handleInviteToServer}>
        Invite People
      </div>
    )

    const editOption = this.editOption;

    const removeOption = (
      <div className="dropdown-option destructive"
        onClick={this.handleRemoveServer}>
        {this.removeServerText}
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

        <div className={`server-dropdown ${dropdown ? '' : 'hidden'}`}>

          {inviteOption}

          {editOption}

          {removeOption}
        </div>
      </header>
    )
  }
}

export default withRouter(ServerHeader);