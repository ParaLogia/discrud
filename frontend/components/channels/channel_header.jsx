import React from 'react';

const ChannelHeader = ({ channel }) => {
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
      <h3 className="channel-title">
        <i className="fas fa-hashtag"></i>
        {channel.name}
      </h3>

      {channelTopic}
    </header>
  )
}

export default ChannelHeader;