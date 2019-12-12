import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({ server }) => {
  // Just render the first letter of the server's name
  const serverIcon = (
    <div>
      {server.name[0]}
    </div>
  )

  return (
    <li>
      <Link to={`/channels/${server.id}`} className="server-icon"> 
        {serverIcon}

        <div className="server-icon-tooltip">
          {server.name}
        </div>
      </Link>
    </li>
  )
}

export default ServerIndexItem;