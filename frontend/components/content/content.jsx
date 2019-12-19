import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import ChannelShow from '../channels/channel_show';

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { serverId } = this.props.match.params;
    if (serverId !== '@me') {
      this.props.fetchServer(serverId);
    }
  }

  componentDidUpdate(prevProps) {
    const prevServerId = prevProps.match.params.serverId;
    const currentServerId = this.props.match.params.serverId;
    if (currentServerId !== '@me' && prevServerId !== currentServerId) {
      this.props.fetchServer(currentServerId);
    }
  }

  render() {
    const { 
      currentServer,
      currentUser,
      logout,
      leaveServer,
      deleteServer,
      channels,
      addServerModal
    } = this.props;
    
    return (
      <div className="content-container">
        <Sidebar 
          currentServer={currentServer}
          currentUser={currentUser}
          logout={logout}
          leaveServer={leaveServer}
          deleteServer={deleteServer}
          channels={channels} 
          addServerModal={addServerModal} />

        <Switch>
          <Route
            path="/channels/@me/:channelId?"
            render={(props) => (
              <ChannelShow
                {...props}
                currentServer={currentServer}
                currentUser={currentUser} />
            )} /> 
          
          <Route 
            path="/channels/:serverId/:channelId?" 
            render={(props) => (
              <ChannelShow
                {...props} 
                currentServer={currentServer}
                currentUser={currentUser} />
            )} />
        </Switch>
      </div>
    )
  }
 }

export default Content