import React from 'react';
import { connect } from 'react-redux';
import { selectChannel } from "../../reducers/selectors";
import ChannelHeader from './channel_header';

const ChannelShow = ({ channel }) => {
  return (
    <div className="channel-show">
      <ChannelHeader channel={channel} />
    </div>
  )
}

const msp = (state, ownProps) => {
  const { channelId } = ownProps.match.params;
  const channel = selectChannel(state, channelId);

  return {
    channel
  };
}

export default connect(msp)(ChannelShow);