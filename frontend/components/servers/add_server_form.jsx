import React from 'react';
import { connect } from 'react-redux';
import { createServerModal, joinServerModal } from '../../actions/modal_actions';

const AddServerForm = ({ createServerModal, joinServerModal }) => {
  const handleCreateServer = createServerModal;
  const handleJoinServer = joinServerModal;

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
    createServerModal: () => dispatch(createServerModal()),
    joinServerModal: () => dispatch(joinServerModal())
  }
} 

export default connect(null, mdp)(AddServerForm);