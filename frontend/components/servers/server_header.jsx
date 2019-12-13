import React from 'react';
import { withRouter } from 'react-router-dom';
import { EDIT_SERVER } from '../modal/modal';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false
    };

    this.removeServerAction = this.props.leaveServer;
    this.removeServerText = 'Leave';

    this.handleEditServer = this.handleEditServer.bind(this);
    this.handleRemoveServer = this.handleRemoveServer.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
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
    const { currentServer, currentUser, deleteServer } = this.props;
    if (this.state.dropdown) {
      this.setState({ dropdown: false });
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
    } 
  }

  handleEditServer(e) {
    e.preventDefault();
    this.props.receiveModal(EDIT_SERVER);
    this.setState({ dropdown: false })
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

  render() {
    const { currentServer } = this.props;
    const { dropdown } = this.state;

    const removeOption = (
      <div className="dropdown-option destructive"
        onClick={this.handleRemoveServer}>
        {this.removeServerText}
      </div>
    )

    return (
      <header className="server-header" 
        onClick={this.toggleDropdown}
        onBlur={this.toggleDropdown}
        tabIndex="0"
      >
        <div className="server-title-container">          
          <h1 className="server-title">
            {currentServer.name}
          </h1>
          <i className={dropdown ? "fas fa-times" : "fas fa-angle-down"}></i>
        </div>

        <div className={`server-dropdown ${dropdown ? '' : 'hidden'}`}>
          {this.editOption}

          {removeOption}
        </div>
      </header>
    )
  }
}

export default withRouter(ServerHeader);