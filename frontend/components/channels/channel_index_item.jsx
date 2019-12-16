import React from 'react';
import { NavLink } from 'react-router-dom';

const ChannelIndexItem = ({ channel, editChannelModal, isOwner }) => {
  const handleSettings = (e) => {
    e.stopPropagation();
    e.preventDefault();
    editChannelModal(channel.id);
  }

  const settingsButton = isOwner ? (
    <button className="channel-settings-button" onClick={handleSettings}>
      <i className="fas fa-cog"></i>
    </button>
  ) : null;

  return (
    <li className="channel-index-item">
      <NavLink to={`/channels/${channel.serverId}/${channel.id}`}
               className="channel-link">
        <i className="fas fa-hashtag"></i>
        <div className="channel-name">
          {channel.name}
        </div>

        {settingsButton}
      </NavLink>
    </li>
  )
}

export default ChannelIndexItem;