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
  channels,
  addServerModal
}) => {
  let header, channelIndex;

  const isOwner = !currentServer || currentServer.ownerId === currentUser.id;

  if (currentServer) {
    header = (
      <ServerHeader 
        currentServer={currentServer} 
        currentUser={currentUser} 
        leaveServer={leaveServer}
        deleteServer={deleteServer} />
    )

    channelIndex = (
      <ChannelIndex 
        channels={channels} 
        isOwner={isOwner} />
    )
  } 
  else {  
    header = (
      <header className="server-header">
        <div className="server-title-container">
          Direct Messages
        </div>
      </header>
    )

    const dmPlaceholderStyle = { 
      textTransform: 'inherit',
      cursor: 'pointer'
    }

    const handleClick = () => {
      addServerModal();
    }

    channelIndex = (
      <div className="channel-index-container">
        <ul className="channel-index">
          <li className="channel-index-item">
            <div className="channel-link" style={dmPlaceholderStyle} onClick={handleClick}>
              DMs are under construction.
            </div>
          </li>
          <li className="channel-index-item">
            <div className="channel-link" style={dmPlaceholderStyle} onClick={handleClick}>
              Check out servers instead!
            </div>
          </li>
        </ul>
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