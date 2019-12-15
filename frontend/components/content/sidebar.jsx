import React from 'react';
import ServerHeader from '../servers/server_header';
import SessionFooter from '../session/session_footer';

const Sidebar = ({ currentServer, currentUser, logout, leaveServer, deleteServer, receiveModal }) => {
  const header = (currentServer) ? (
    <ServerHeader 
      currentServer={currentServer} 
      currentUser={currentUser} 
      leaveServer={leaveServer}
      deleteServer={deleteServer}
      receiveModal={receiveModal}
    />
  ) : (
    <header className="server-header">
      <div className="server-title-container">
        DMs
      </div>
    </header>
  )

  return (
    <aside className="content-sidebar">
      {header}
      <SessionFooter currentUser={currentUser} logout={logout} />
    </aside>
  )
}

export default Sidebar;