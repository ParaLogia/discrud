import React from 'react';
import { NavLink } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => {
  return (
    <li className="channel-index-item">
      <NavLink to={`/channels/${channel.serverId}/${channel.id}`}
               className="channel-link">
        <i className="fas fa-hashtag"></i>
        {channel.name}
      </NavLink>
    </li>
  )
}

export default ChannelIndexItem;