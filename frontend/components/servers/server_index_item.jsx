import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerIndexItem = ({ server }) => {
  // Placeholder for server image -- first letter
  const serverIcon = (
    <div>
      {server.name[0]}
    </div>
  )

  return (
    <li>
      <NavLink to={`/channels/${server.id}`} className="servers-nav-icon"> 
        {serverIcon}

        <div className="tooltip-wrapper">
          <div className="tooltip">
            {server.name}
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default ServerIndexItem;