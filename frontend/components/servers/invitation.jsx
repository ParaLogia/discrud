import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectServer } from "../../reducers/selectors";

const Invitation = ({ server }) => {
  const handleCopy = (e) => {
    e.preventDefault();
    const copyButton = e.target;
    const inviteContainer = copyButton.parentElement;

    navigator.clipboard.writeText(server.inviteToken)
      .then(() => {
        copyButton.textContent = "Copied";
        copyButton.classList.add('copy-success');
        inviteContainer.classList.add('copy-success');

        window.setTimeout(() => {
          copyButton.textContent = "Copy";
          copyButton.classList.remove('copy-success');
          inviteContainer.classList.remove('copy-success');
        }, 1000)
      });
  }

  return (
    <div className="invitation-modal">
      Send a server invitation code to a friend
      <div className="invite-container">
        <input type="text" 
              value={server.inviteToken} 
              onChange={e => e.preventDefault()} />
        <button className="copy-button"
                onClick={handleCopy}>
          Copy
        </button>
     </div>
    </div>
  )
}

const msp = (state, ownProps) => {
  const { serverId } = ownProps.match.params;
  return {
    server: selectServer(state, serverId)
  }
}

export default withRouter(connect(msp)(Invitation))