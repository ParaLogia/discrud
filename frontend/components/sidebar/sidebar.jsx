import React from 'react';
import ServerHeader from '../servers/server_header';
import UserFooter from './user_footer';

const Sidebar = ({ currentServer, currentUser, logout }) => {
  const header = (currentServer) ? (
    <ServerHeader currentServer={currentServer} />
  ) : (
    <header></header>
  )

  return (
    <aside className="content-sidebar">
      {header}
      <UserFooter currentUser={currentUser} logout={logout} />
    </aside>
  )
}

export default Sidebar;