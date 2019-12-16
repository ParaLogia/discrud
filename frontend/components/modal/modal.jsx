import React from 'react';
import AddServerForm from '../servers/add_server_form';
import CreateServerContainer from '../servers/create_server_container';
import EditServerContainer from '../servers/edit_server_container';
import Invitation from '../servers/invitation';
import JoinServerForm from '../servers/join_server_form';
import CreateChannelContainer from '../channels/create_channel_container';
import EditChannelContainer from '../channels/edit_channel_container';
import {
  ADD_SERVER_MODAL,
  CREATE_SERVER_MODAL,
  EDIT_SERVER_MODAL,
  INVITE_TO_SERVER_MODAL,
  JOIN_SERVER_MODAL,
  CREATE_CHANNEL_MODAL,
  EDIT_CHANNEL_MODAL
} from '../../actions/modal_actions';

function Modal({ modal, clearModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.type) {
    case ADD_SERVER_MODAL:
      component = <AddServerForm />
      break;

    case CREATE_SERVER_MODAL:
      component = <CreateServerContainer />
      break;

    case EDIT_SERVER_MODAL:
      component = <EditServerContainer />
      break;

    case INVITE_TO_SERVER_MODAL:
      component = <Invitation />
      break;

    case JOIN_SERVER_MODAL:
      component = <JoinServerForm />
      break;

    case CREATE_CHANNEL_MODAL:
      component = <CreateChannelContainer />
      break;

    case EDIT_CHANNEL_MODAL:
      component = < EditChannelContainer channelId={modal.channelId}/>
      break;

    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={clearModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;