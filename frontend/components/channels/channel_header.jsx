import React from 'react';

const ChannelHeader = ({ channel, toggleMemberList }) => {
  if (!channel) return null;

  const channelTopic = (channel.topic) ? (
    <>
      <div className="vertical-divider"></div>
      <p className="channel-topic">
        {channel.topic}
      </p>
    </>
  ) : null;

  return (
    <header className="channel-header">
      <div>
        <h3 className="channel-title">
          <i className="fas fa-hashtag"></i>
          {channel.name}
        </h3>

        {channelTopic}
      </div>

      <div onClick={toggleMemberList} className="members-icon">
        <i className="fas fa-user-friends"></i>
      </div>
    </header>
  )
}

export default ChannelHeader;