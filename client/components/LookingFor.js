import React, { Component } from "react";
import { connect } from "react-redux";

import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

import { Button } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import { Card } from "@mui/material";

import { Accordion } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import TestAddFriendForm from "./TestAddFriendForm";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

class LookingFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lookingFor: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onClick(name) {
    const { lookingFor } = this.state;
    if (lookingFor.find((value) => value === name) === undefined) {
      lookingFor.push(name);
    } else {
      const indxDelete = lookingFor.indexOf(name);
      lookingFor.splice(indxDelete, 1);
    }
    this.setState(lookingFor);
  }
  onSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    const { lookingFor } = this.state;
    const obj = {};
    lookingFor.map((item) => {
      if (item === "C#") {
        obj["CSharp"] = "";
      } else if (item === "C++") {
        obj["CPlusPlus"] = "";
      } else {
        obj[item] = "";
      }
    });

    console.log(obj);

    history.push(`/profileResults/${JSON.stringify(obj)}`);
  }
  render() {
    const { accounts, lookingFor, industries, skills } = this.props;
    const { onClick, onSubmit } = this;
    console.log(this.state.lookingFor);
    if (industries.length === 0) {
      return <div>No industries found here :(</div>;
    }
    if (skills.length === 0) {
      return <div>No skills found here :(</div>;
    }
    return (
      <div>
          <ThemeProvider theme={theme}>

          
        {/* <form> */}

        
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12} sm={6}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Filter By Industry:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {industries.map((industry, idx) => {
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onClick={() => {
                              onClick(industry.name);
                            }}
                          />
                        }
                        label={industry.name}
                      />
                    );
                  })}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Filter By Skill:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {skills.map((skill, idx) => {
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onClick={() => {
                              onClick(skill.name);
                            }}
                          />
                        }
                        label={skill.name}
                      />
                    );
                  })}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid align="center" item xs={12} md={12} lg={12}>
            <Button
              align="center"
              sx={{ minWidth: "65%", textAlign: "center", minHeight: "4em", color: 'white' }}
              variant="contained"
              endIcon={<PersonSearchIcon />}
              onClick={onSubmit}
              color={'secondary'}
            >
              Lets find people!
            </Button>
          </Grid>
        </Grid>
        {/* </form> */}
        <TestAddFriendForm />
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(LookingFor);
