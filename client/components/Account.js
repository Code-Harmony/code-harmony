import React from 'react'
import { connect } from 'react-redux'

const Account = props => {
  const { username } = props;
  
  return (
    <div>
      <h1>My Account</h1>
    </div>
  )

}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Account)