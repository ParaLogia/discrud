import React from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import { CREATE_SERVER } from '../modal/modal';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddServer = this.handleAddServer.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  handleAddServer(e) {
    e.preventDefault();
    this.props.receiveModal(CREATE_SERVER);
  }

  render() {
    const serverItems = this.props.servers.map(server => (
      <ServerIndexItem key={server.id} server={server} />
    ))

    return (
      <nav className="servers-nav">
        <div className="home-button-container">
          <Link to="/channels/@me" className="servers-nav-icon home-button">
            Hm
            <div className="tooltip-wrapper">
              <div className="tooltip">
                Home
              </div>
            </div>
          </Link>
        </div>

        <div className="server-separator"></div>

        <ul>
          {serverItems}
        </ul>

        <div className="server-add-container">
          <button 
            className="servers-nav-icon server-add-button"
            onClick={this.handleAddServer}
          >
            +
            <div className="tooltip-wrapper">
              <div className="tooltip">
                Add a Server
              </div>
            </div>
          </button>
        </div>
      </nav>
    );
  }
}

export default ServerIndex;