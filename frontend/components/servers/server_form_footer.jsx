import React from 'react';

const ServerFormFooter = ({ submitText, handleClickBack }) => {
  return (
    <div className="server-form-footer">
      <div className="form-back-button" onClick={handleClickBack}>
        <i className="fas fa-arrow-left"></i>
        back
      </div>
      <button className="server-form-submit">
        {submitText}
      </button>
    </div>
  )
}

export default ServerFormFooter;