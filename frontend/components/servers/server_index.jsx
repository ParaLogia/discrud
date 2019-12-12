import React from 'react';
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
        <ul>
          {serverItems}
        </ul>
      </nav>
    );
  }
}

export default ServerIndex;