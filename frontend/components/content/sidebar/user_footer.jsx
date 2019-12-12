import React from 'react';

const UserFooter = ({ currentUser, logout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }

  const avatarIcon = (
    <div className="avatar-mini">
      {currentUser.username[0]}
    </div>
  )

  return (
    <footer className="user-footer">
      {avatarIcon}
      <div className="username-container">

        <strong className="username">
          {currentUser.username}
        </strong>
        <span className="user-tag">
          #{currentUser.tag}
        </span>
      </div>
      
      <button onClick={handleLogout}>Log Out</button>
    </footer>
  )
};

export default UserFooter;