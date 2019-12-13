import React from 'react';

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

  componentDidUpdate(prevProps) {
    const { currentServer, currentUser, deleteServer, leaveServer } = this.props;
    if (prevProps.currentServer.id === currentServer) {
      return;
    }

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
    this.removeServerAction(this.props.currentServer.id);
  } 

  toggleDropdown() {
    this.setState(({dropdown}) => this.setState({dropdown: !dropdown}));
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
          <button 
            className="server-remove-button" 
            onClick={this.handleRemoveServer}
            >
            {this.removeServerText}
          </button>
        </div>
      </header>
    )
  }
};

export default ServerHeader;