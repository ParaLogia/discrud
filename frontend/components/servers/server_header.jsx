import React from 'react';

const ServerHeader = ({ currentServer }) => {
  return (
    <header className="server-header">
      <h1 className="server-title">
        {currentServer.name}
      </h1>
    </header>
  )
};

export default ServerHeader;