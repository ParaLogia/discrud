import React from "react";
import { connect } from 'react-redux';
import { editChannelModal } from '../../actions/modal_actions';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channels, editChannelModal, isOwner } = this.props;
    const channelItems = channels.map(channel => (
      <ChannelIndexItem key={channel.id} 
                        channel={channel}
                        editChannelModal={editChannelModal}
                        isOwner={isOwner} />
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

const mdp = (dispatch) => {
  return {
    editChannelModal: (channelId) => dispatch(editChannelModal(channelId))
  }
}

export default connect(null, mdp)(ChannelIndex);