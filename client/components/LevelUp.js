import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import axios from 'axios';
// import specPage from '../../mochawesome-report/mochawesome.html';
import ReactDOM from 'react-dom';

// import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/theme/monokai';

import { Grid, Button, Typography, CardContent, CardItems, Card, Link } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PersonIcon from "@mui/icons-material/Person";
import { borders } from '@mui/system';
import theme from "./Theme";

const LevelUp = ({ userId, username, userlevel, levelup }) => {
  const currentChallenge = levelup.find(challenge => challenge.level == userlevel);
  const [ userSolution, setUserSolution ] = useState('');
  const [ userOutput, setUserOutput ] = useState('');

  const onChange = (newValue) => {
    setUserSolution(newValue);
  }
  
  const onClick = async () => {
    const {data} = await axios.post(`/api/levelup`, {
      userSolution: userSolution,
      userlevel: userlevel,
      userId: userId
    });

    data.failures === 0 ? setUserOutput('passed') : setUserOutput('failed');
  }

  useEffect(() => {
    console.log(userOutput)
  },[userOutput]);

  return (
    <div>
      <Grid container spacing={2} ml={3} mr={3} mt={2}>
        {/* BOX AT TOP */}
          <Grid mr={6} item xs={12} md={12} align="center">
            <Card height={100} sx={{ maxWidth: 3 / 5 }}>
              <CardContent style={{backgroundColor: "white", border:"3px solid #258ea6" }} align='center'>
                <PersonIcon
                  fontSize="large"
                  className="cardIcon cardLabel"
                  style={{ fontSize: "4rem", color: '#258ea6' }}
                  />
                <AutoGraphIcon
                  fontSize="large"
                  className="cardIcon cardLabel"
                  style={{ fontSize: "4rem", color: '#258ea6' }}
                  />
                <Typography variant="h5">Hello {username}, it's time to Level Up!</Typography>
              </CardContent>
            </Card>
            <br/>
          </Grid>

          {/* TO THE LEFT OF CODE STUFF */}
          <Grid item xs={12} md={5}>
            <CardContent height={500} border={1} style={{backgroundColor: "white"}}>
              <Typography variant="h6"> {currentChallenge.level}. {currentChallenge.title}</Typography>
            </CardContent>
            <CardContent height={500} border={1} style={{backgroundColor: "white"}}>
              <Typography>{ currentChallenge.prompt }</Typography>
              <br/>
              <Typography>{ currentChallenge.description }</Typography>
              <br/>
            </CardContent>
            <br/>
            <CardContent height={500} border={1} style={{backgroundColor: "white"}}>
              <Typography> Example: </Typography>
              <br/>
              {
                  currentChallenge.example.split('/n ').map( txt => <Typography key={txt}>{ txt }</Typography>)
              }
              {/* <Typography>{ example }</Typography> */}
            </CardContent>
          </Grid>

        {/* CODE AREA AND BUTTON */}
        <Grid ml={1} mr={0} item xs={12} md={6}> 
          < AceEditor
            mode = "javascript"
            theme = "github"
            // theme = "monokai"
            // name = "testando"
            //////////
            onChange={ onChange }
            fontSize = { 16 }
            showPrintMargin = { true }
            showGutter = { true } // shows in-line numbers
            highlightActiveLine = { true }
            // enableBasicAutocompletion = { false }
            // enableLiveAutocompletion = { false }
            // tabSize = { 1 }
            wrapEnabled = { true }
            // readOnly={this.props.readOnly}
            // maxLines={this.props.maxLines}
            setOptions={{
                showLineNumbers: true
              }}
            width = '100%'
            height = '100%'
          />
        </Grid>

        <Grid item xs={12} md={12} justifyContent="end">
          <Button variant="contained" color="primary" size="medium" style={{ height: 40}} startIcon={<DoubleArrowSharpIcon sx={{ fontSize: 40 }} />} onClick = { onClick }>
              RUN CODE
          </Button>
        </Grid>

        <Grid item xs={11} md={11} align="center">
         <CardContent height={500} style={{backgroundColor: "white", border:"1px solid #258ea6" }} align='center'>

          { 
            userOutput === 'failed' ?
              <iframe id="serviceFrameSend" src="http://localhost:8080/api/mochawesome.html" width="100%" height="1000"></iframe> :
                userOutput === 'passed' ?
                  <Typography>You passed all tests! Go to the next <Link to="/levelup" onClick={() => window.location.reload()}>challenge</Link></Typography>:
                    <Typography>Your results will be shown here.</Typography> }
          {/* <iframe id="serviceFrameSend" src="http://localhost:8080/api/mochawesome.html" width="1000" height="1000"></iframe> */}
          </CardContent>

        </Grid>
      </Grid>
    </div>
  )
}

const mapState = state => {
  console.log('in mapState')
  console.log(state)
  return {
    userId: state.auth.id,
    username: state.auth.username,
    userlevel: state.auth.challenge_points,
    levelup: state.levelup
  }
}

export default connect(mapState)(LevelUp)