import React from 'react';
import { NavLink } from 'react-router-dom';

const ChannelIndexItem = ({ channel, editChannelModal }) => {
  const handleSettings = (e) => {
    e.stopPropagation();
    editChannelModal(channel.id);
  }

  return (
    <li className="channel-index-item">
      <NavLink to={`/channels/${channel.serverId}/${channel.id}`}
               className="channel-link">
        <i className="fas fa-hashtag"></i>
        {channel.name}
        <button className="channel-settings-button" onClick={handleSettings}>
          <i className="fas fa-cog"></i>
        </button>
      </NavLink>
    </li>
  )
}

export default ChannelIndexItem;