import React from 'react';
import { connect } from 'react-redux';
import { receiveModal } from '../../actions/ui_actions';
import { CREATE_SERVER, JOIN_SERVER } from '../modal/modal';

const AddServerForm = ({ receiveModal }) => {
  const handleCreateServer = () => receiveModal(CREATE_SERVER);
  const handleJoinServer = () => receiveModal(JOIN_SERVER);

  return (
    <div className="add-server-form">
      <h1>Oh, another server huh?</h1>
      <div className="choice-container">
        <div className="add-server-choice create-server-box" onClick={handleCreateServer} >
          <h3>Create</h3>
          <p>
            Create a new server and invite your friends. It&apos;s free!
          </p>
          <div className="create-server-image">

          </div>
          <button>
            Create a server
          </button>
        </div>

        <div className="add-server-choice join-server-box" onClick={handleJoinServer}>
          <h3>Join</h3>
          <p>
            Enter an invite and join your friend&apos;s server.
          </p>
          <div className="join-server-image">

          </div>
          <button>
            Join a server
          </button>
        </div>
      </div>
    </div>
  )
}

const mdp = (dispatch) => {
  return {
    receiveModal: (modal) => dispatch(receiveModal(modal))
  }
} 

export default connect(null, mdp)(AddServerForm);