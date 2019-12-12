import React from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const serverItems = this.props.servers.map(server => (
      <ServerIndexItem key={server.id} server={server} />
    ))

    return (
      <nav className="servers-nav">
        <div className="home-button-container">
          <Link to="/channels/@me" className="servers-nav-icon">
            Hm
            <div className="tooltip">
              Home
            </div>
          </Link>
        </div>

        <div className="server-separator"></div>

        <ul>
          {serverItems}
        </ul>

        <div className="server-add-container">
          <Link to="/channels/@me" className="servers-nav-icon server-add-icon">
            +
            <div className="tooltip">
              Add a Server
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default ServerIndex;