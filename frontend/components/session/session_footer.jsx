import React from 'react';

const UserFooter = ({ currentUser, logout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }

  const colors = ['red', 'yellow', 'green', 'blue'];
  const color = colors[currentUser.id % 4];

  const avatarIcon = (
    <div className={`avatar-mini ${color}`}>
      {currentUser.username[0]}
    </div>
  )

  return (
    <footer className="session-footer">
      {avatarIcon}
      <div className="username-container">

        <strong className="username">
          {currentUser.username}
        </strong>
        <span className="user-tag">
          #{currentUser.tag}
        </span>
      </div>
      
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </footer>
  )
};

export default UserFooter;