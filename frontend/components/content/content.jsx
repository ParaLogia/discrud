import React from 'react';
import Sidebar from './sidebar/sidebar';

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { serverId } = this.props.match.params;
    this.props.fetchServer(serverId);
  }

  componentDidUpdate(prevProps) {
    const prevServerId = prevProps.match.params.serverId;
    const currentServerId = this.props.match.params.serverId;
    if (currentServerId !== '@me' && prevServerId !== currentServerId) {
      this.props.fetchServer(currentServerId);
    }
  }

  render() {
    const { currentServer, currentUser, logout } = this.props;
    return (
      <Sidebar 
        currentServer={currentServer}
        currentUser={currentUser}
        logout={logout}
      />
    )
  }
 }

export default Content