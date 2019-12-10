import React from 'react';

const UserFooter = ({ currentUser, logout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <footer className="user-footer">
      <div>
        <strong>
          {currentUser.username}
        </strong>
        <span>
          #{currentUser.tag}
        </span>
      </div>
      
      <button onClick={handleLogout}>Log Out</button>
    </footer>
  )
};

export default UserFooter;