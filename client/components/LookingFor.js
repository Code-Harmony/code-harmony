import React from 'react'
import { connect } from 'react-redux'

const LookingFor = props => {
  const { username } = props;
  
  return (
    <div>
      <h1>Looking For</h1>
    </div>
  )

}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(LookingFor)