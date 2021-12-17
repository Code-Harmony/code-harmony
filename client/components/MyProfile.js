import React, { Component } from "react";
import { connect } from "react-redux";
//import {Link} from 'react-router-dom';

import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";

import Grid from "@mui/material/Grid";

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { accounts, auth, match } = this.props;
    if (accounts.length === 0) {
      return <div>No one found here :(</div>;
    }
    const account = accounts.find((account) => account.id === auth.id);
    if (account === undefined) {
      return <div>Whoops...No one found here :(</div>;
    }
    return (
      <div>
        <Grid container p={2} spacing={1}>
          <Grid item xs={12} lg={12} p="1.5em">
            <Card p={1} sx={{ minWidth: 275, p: "1em" }}>
              <img
                className="accountImg"
                src={
                  account.photoUrl
                    ? account.photoUrl
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
              />
              <Typography variant="h4" gutterBottom component="div">
                {account.name}
              </Typography>
              <EmailIcon />
              <Typography variant="caption" display="block" gutterBottom>
                Email:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {account.email}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} p="1.5em">
            <Card p={1} sx={{ minWidth: 275 }}>
              <Grid container p={1} spacing={1}>
                <Grid item xs={12} sm={12} lg={12} p="1.5em">
                  <GitHubIcon />
                </Grid>
                <Grid item xs={12} sm={2} lg={2} p="1.5em" alignSelf="flex-start">
                  <Typography variant="caption" display="block" gutterBottom>
                    GitHub:
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  lg={10}
                  p="1.5em"
                  alignSelf="flex-end"
                  sx={{ mb: "15px" }}
                >
                  <Typography variant="body1" sx={{mb: '4px'}}>
                    {account.github}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container p={1} spacing={1}>
                <Grid item xs={12} sm={12} lg={12} p="1.5em">
                  <WorkIcon align="center" sx={{ align: "center" }} />
                </Grid>
                <Grid item xs={12} sm={6} lg={6} p="1.5em">
                  <Typography variant="caption" display="block" gutterBottom>
                    Industry/Market:
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  p="1.5em"
                  alignSelf="flex-end"
                  sx={{ mb: "-3px" }}
                >
                  <Typography variant="body1" gutterBottom>
                    {account.industry}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} p="1.5em">
            <Card p={1} sx={{ minWidth: 275, p: "1em" }}>
              <InfoIcon />
              <Typography variant="caption" display="block" gutterBottom>
                About Me:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {account.description}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MyProfile);
