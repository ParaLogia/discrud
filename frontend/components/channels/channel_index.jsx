import React from "react";
import { connect } from 'react-redux';
import { editChannelModal } from '../../actions/modal_actions';
import { deleteChannel } from '../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channels, editChannelModal } = this.props;
    const channelItems = channels.map(channel => (
      <ChannelIndexItem key={channel.id} 
                        channel={channel}
                        editChannelModal={editChannelModal} />
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

const msp = (state, ownProps) => {
  return ownProps;
}

const mdp = (dispatch) => {
  return {
    editChannelModal: (channelId) => dispatch(editChannelModal(channelId))
  }
}

export default connect(msp, mdp)(ChannelIndex);