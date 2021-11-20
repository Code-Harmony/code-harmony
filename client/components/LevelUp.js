import React from 'react'
import { connect } from 'react-redux'

const LevelUp = props => {
  const { username } = props;
  
  return (
    <div>
      <h1>Level Up</h1>
    </div>
  )

}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(LevelUp)