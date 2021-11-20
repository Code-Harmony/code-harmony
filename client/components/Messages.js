import React from 'react'
import { connect } from 'react-redux'

const Messages = props => {
  const { username } = props;
  
  return (
    <div>
      <h1>Messages</h1>
      <h2>Direct Messages and Project Groups</h2>
    </div>
  )

}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Messages)