import React from "react";
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channels } = this.props;
    const channelItems = channels.map(channel => (
      <ChannelIndexItem key={channel.id} channel={channel}/>
    ));

    return (
      <div className="channel-index-container">
        <ul className="channel-index">
          {channelItems}
        </ul>
      </div>
    )
  }
}

export default ChannelIndex;