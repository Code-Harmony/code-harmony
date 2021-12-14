import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import axios from 'axios';

// import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';


import { Grid, Button, ListItem } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
  
  return (
    <div>
      <Grid container spacing={2}>
        {/* <Grid container spacing={2} item xs={4} md={12}>    */}
          {/* <Grid item xs={6} md={6}>  */}
          <Grid item xs={12} md={12}>
            <ListItem>Level Up</ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>Prompt</ListItem>
            <ListItem>{ currentChallenge.prompt}</ListItem>
            <ListItem>Description</ListItem>
            <ListItem>{ currentChallenge.description}</ListItem>
          </Grid> 
            {/* <h1>Level Up</h1>
            <h2> Instructions </h2>
            <h4> { currentChallenge.prompt} </h4>
            <h4> { currentChallenge.description} </h4> */}


        <Grid item xs={12} md={6}> 
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
              width = '95%'
              // height = '100%'
              />
        </Grid>
        <Button variant="contained" color="primary" size="medium" style={{ height: 40 }} startIcon={<ArrowRightIcon />} onClick = { onClick }>
            RUN CODE
        </Button>
      </Grid>
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