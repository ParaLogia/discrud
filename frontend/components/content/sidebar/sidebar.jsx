import React from 'react';
import ServerHeader from '../../servers/server_header';
import UserFooter from './user_footer';

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
      <UserFooter currentUser={currentUser} logout={logout} />
    </aside>
  )
}

export default Sidebar;