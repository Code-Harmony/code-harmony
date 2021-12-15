import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import axios from 'axios';

// import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/theme/monokai'

import { Grid, Button, Typography, CardContent } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';

const LevelUp = ({ username, userlevel, levelup }) => {
  const currentChallenge = levelup.find(challenge => challenge.level == userlevel);

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
        {/* <Box m={5} pt={3}> */}
          <Grid m={2} item xs={12} md={12}>
            <br/>
            <Typography >Hello {username}, it's time to Level Up!</Typography>
            <br/>
            <Typography variant="h6"> #{currentChallenge.level}. {currentChallenge.title}</Typography>
          </Grid>
          {/* </Box> */}
          <Grid m={2} item xs={12} md={5}>
            <Typography>{currentChallenge.prompt}</Typography>
            <br/>
            <Typography>{currentChallenge.description}</Typography>
            <br/>
            <CardContent height={500} border={1} style={{backgroundColor: "white"}}>
              <Typography> Example: </Typography>
              <br/>
              <Typography>{`const obj = { color: 'green' }/n findObjKeys(obj)/n output: 'color'`}</Typography>
            </CardContent>
          </Grid> 

        <Grid m={1} item xs={12} md={6}> 
          < AceEditor
            mode = "javascript"
            theme = "github"
            // theme = "monokai"
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
              width = '100%'
              // height = '100%'
              />
        </Grid>
        <Button variant="contained" color="primary" size="medium" style={{ height: 40 }} startIcon={<DoubleArrowSharpIcon sx={{ fontSize: 40 }} />} onClick = { onClick }>
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