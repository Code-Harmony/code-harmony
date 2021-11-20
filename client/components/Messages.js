import React from 'react'
import { connect } from 'react-redux'

const Messages = props => {
  const { username } = props;
  
  return (
    <div>
      <h1>Messages</h1>
    </div>
  )

}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Messages)