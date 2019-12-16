import React from 'react';
import ServerHeader from '../servers/server_header';
import ChannelIndex from '../channels/channel_index';
import SessionFooter from '../session/session_footer';

const Sidebar = ({ 
  currentServer,
  currentUser,
  logout,
  leaveServer,
  deleteServer,
  channels
}) => {
  let header, channelIndex;

  if (currentServer) {   
    header = (
      <ServerHeader 
      currentServer={currentServer} 
      currentUser={currentUser} 
      leaveServer={leaveServer}
      deleteServer={deleteServer} />
    )

    channelIndex = (
      <ChannelIndex channels={channels} />
    )
  } 
  else {  
    header = (
      <header className="server-header">
        <div className="server-title-container">
          DMs
        </div>
      </header>
    )

    channelIndex = (
      <div>
        No DMs yet...
      </div>
    );
  }
  
  return (
    <aside className="content-sidebar">
      {header}

      {channelIndex}

      <SessionFooter currentUser={currentUser} logout={logout} />
    </aside>
  )
}

export default Sidebar;