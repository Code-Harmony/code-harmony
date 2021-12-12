import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import axios from 'axios';

// import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';


const LevelUp = ({ username, userlevel, levelup }) => {
  const currentChallenge = levelup.find(chanllenge => chanllenge.level == userlevel);

  // const { username } = props;
  const [ userSolution, setUserSolution ] = useState('');

  // var userCode = "";
  const onChange = (newValue) => {
    // userCode = newValue;
    setUserSolution(newValue);
  }

  const onClick = async () => {
    await axios.post(`/api/levelup`, {
      userSolution: userSolution,
      // challengeId: challengeId
    });
    // dispatch(gotResults(data))

    // var result = eval(userSolution);
    // console.log(result);
  }

  // useEffect(() => {
  //   console.log(userSolution)
  // },[userSolution]); 


  // render(){    
  //   if (!this.props.students.length || !this.props.campuses.length) return (
  //     <div className="load-wrapper">
  //       <h1>...LOADING MY STACK UNIVERSITY DASHBOARD</h1>
  //       <div className="loader"></div>
  //       </div>
  //     )      
  //   return(
  //     <div>
        
  //       <Router>
  //         <div id="main-content">
  //           <Main />
  
  return (
    <div>
      <h1>Level Up</h1>
      <h2> Instructions </h2>
      <h4> { currentChallenge.prompt} </h4>
      <h4> { currentChallenge.description} </h4>

      < AceEditor
        mode = "javascript"
        theme = "github"
        // name = "testando"
        //////////
        onChange={ onChange }
        //////////////////
        // onSelectionChange={this.onSelectionChange}
        // onCursorChange={this.onCursorChange}
        fontSize = { 16 }
        // showPrintMargin = { true }
        showGutter = { true } // shows in-line numbers
        highlightActiveLine = { true }
        // value={this.props.value}
        // enableBasicAutocompletion = { false }
        // enableLiveAutocompletion = { false }
        // tabSize = { 50 }
        wrapEnabled = { true }
        // readOnly={this.props.readOnly}
        // maxLines={this.props.maxLines}
        // setOptions={{
          //   showLineNumbers: this.props.showLineNumbers
          // }}
          width = '60%'
          // height = '100%'
          />
      <button onClick = { onClick }>
            RUN CODE
      </button>
    </div>
  )

}

const mapState = state => {
  console.log('in mapState')
  console.log(state)
  return {
    username: state.auth.username,
    userlevel: state.auth.challenge_points,
    levelup: state.levelup
  }
}

export default connect(mapState)(LevelUp)