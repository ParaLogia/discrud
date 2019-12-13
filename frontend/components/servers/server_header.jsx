import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false
    };

    this.removeServerAction = () => {};
    this.removeServerText = '';

    this.handleRemoveServer = this.handleRemoveServer.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.updateDropdown();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.updateDropdown();
    }
  }

  updateDropdown() {
    const { currentServer, currentUser, deleteServer, leaveServer } = this.props;
    this.setState({ dropdown: false });

    if (currentServer.ownerId === currentUser.id) {
      this.removeServerAction = deleteServer;
      this.removeServerText = 'delete';
    } else {
      this.removeServerAction = leaveServer;
      this.removeServerText = 'leave';
    }
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
          <div 
            className="dropdown-option destructive" 
            onClick={this.handleRemoveServer}
          >
            {this.removeServerText}
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(ServerHeader);