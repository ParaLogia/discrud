import React from 'react'
import { connect } from 'react-redux'
import { selectMembersOfServer } from '../../reducers/selectors'

const MemberList = ({ members }) => {
  const memberLis = members.map((member) => {
    const username = member.username || `User#${member.id}`
    const colors = ['red', 'yellow', 'green', 'blue'];
    const color = colors[member.id % 4];
    return (
      <li key={member.id}>
        <div className="member-list-item">
          <div className={`avatar-mini ${color}`}>
            {username[0]}
          </div>
          {username}
        </div>
      </li>
    )
  })

  return (
    <div className="member-list">
      <div className="scroller-wrapper">
        <div className="scroller">
          <header className="member-list-header">
            Members - {members.length}
          </header>
          <ul>
            {memberLis}
          </ul>
        </div>
      </div>
    </div>
  )
}

const msp = (state, ownProps) => {
  const { server } = ownProps;
  const members = server ? selectMembersOfServer(state, server.id) : [];
  return {
    members
  }
}

export default connect(msp)(MemberList);