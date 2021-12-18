import React, { Component } from "react";
import { connect } from "react-redux";
//import {Link} from 'react-router-dom';

import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";

import Grid from "@mui/material/Grid";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



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
    const memberSince = Math.ceil(Math.random() * 5);
    const schools = ['Fullstack Academy of Code', 'NYU', 'Cornell', 'Binghamton University', 'SUNY Buffalo', 'MIT', 'USC', 'Stanford','Harvard', 'Princeton', 'Boston College', 'UPenn', 'Duke University', 'Dartmouth', 'City Tech', 'Baruch', 'UT Austin', 'Brown University', 'Georgetown']
    const randomNum = Math.ceil(Math.random()*schools.length-1)
    const randomSchool = schools[randomNum]

    return (
      <div>
        <Grid container p={2} spacing={1}>
          <Grid item xs={12} lg={12} p="1.5em">
            <Card p={1} sx={{ minWidth: 275, p: "1em" }}>
              <Grid container p={2} spacing={1}>
                <Grid item xs={6} md={8} lg={8} p="1.5em">
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
                </Grid>
                <Grid item xs={6} md={4} lg={4} align="center">
                  <div>
                    <Grid container p={1} spacing={1}>
                      <Grid item xs={12} md={5} lg={5}>
                        <ChevronLeftIcon style={{ fontSize: "1.1em" }} />
                        <FavoriteBorderIcon style={{ fontSize: "1.1em" }} />
                        <ChevronRightIcon style={{ fontSize: "1.1em" }} />
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Member Since:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={5} lg={5}>
                        <Typography align="center" variant="body" gutterBottom>
                          {memberSince} Year(s)
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container p={1} spacing={1}>
                      <Grid item xs={12} md={5} lg={5}>
                        <SchoolIcon />
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Education:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={5} lg={5}>
                        <Typography align="center" variant="body" gutterBottom>
                          {randomSchool}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} p="1.5em">
            <Card p={1} sx={{ minWidth: 275 }}>
              <Grid container p={1} spacing={1} align="center">
                <Grid item xs={12} sm={2} lg={2} p="1.5em">
                  <GitHubIcon />
                  <Typography variant="caption" display="block" gutterBottom>
                    GitHub:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <Typography variant="body1" sx={{ mb: "4px" }}>
                    {account.github}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container p={1} spacing={1} align="center">
                <Grid item xs={12} sm={2} lg={2} p="1.5em">
                  <WorkIcon align="center" sx={{ align: "center" }} />
                  <Typography variant="caption" display="block" gutterBottom>
                    Industry/Market:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
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
