import React from 'react';
import UserFooter from './user_footer';

const Sidebar = ({ currentUser, logout }) => {
  return (
    <aside className="content-sidebar">
      <UserFooter currentUser={currentUser} logout={logout} />
    </aside>
  )
}

export default Sidebar;