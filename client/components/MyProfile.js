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
import BoltIcon from "@mui/icons-material/Bolt";

import SailingIcon from "@mui/icons-material/Sailing";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import PoolIcon from "@mui/icons-material/Pool";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import ComputerIcon from "@mui/icons-material/Computer";

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
    const schools = [
      "Fullstack Academy of Code",
      "NYU",
      "Cornell",
      "Binghamton University",
      "SUNY Buffalo",
      "MIT",
      "USC",
      "Stanford",
      "Harvard",
      "Princeton",
      "Boston College",
      "UPenn",
      "Duke University",
      "Dartmouth",
      "City Tech",
      "Baruch",
      "UT Austin",
      "Brown University",
      "Georgetown",
    ];
    const randomNum = Math.ceil(Math.random() * schools.length - 1);
    const randomSchool = schools[randomNum];
    const hobbyList = [
      "SailingIcon",
      "DownhillSkiingIcon",
      "IceSkatingIcon",
      "PoolIcon",
      "SkateboardingIcon",
      "SnowboardingIcon",
      "SportsEsportsIcon",
      "FitnessCenterIcon",
      "GolfCourseIcon",
      "SportsBasketballIcon",
      "LocalAirportIcon",
      "ComputerIcon",
    ];
    const hobbyNums = new Array(Math.ceil(Math.random() * 7)).fill(1);
    const hobbies = [];
    hobbyNums.map((hooby) => {
      let randomNums = Math.ceil(Math.random() * hobbyList.length - 1);
      if (!hobbies.includes(hobbyList[randomNums])) {
        hobbies.push(hobbyList[randomNums]);
      }
    });
    const challengepointStyle = {
      ml: "-.3em",
      mr: "-.3em",
      mt: "0",
      color: "#f9a03f",
      fontSize: "1.7em",
    };
    return (
        <div>
        <Grid container p={2} spacing={1}>
          <Grid item xs={12} lg={12} p="1.5em">
            <Card p={1} sx={{ minWidth: 275, p: "1em" }}>
              <Grid container p={2} spacing={1}>
                <Grid item xs={6} md={8} lg={8} p="1.5em">
                  <Grid container p={2} spacing={1}>
                    <Grid item xs={6} md={8} lg={8}>
                      <img
                        className="accountImg"
                        src={
                          account.photoUrl
                            ? account.photoUrl
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                      />
                      <Typography variant="h4" component="div">
                        {account.name}
                      </Typography>
                    </Grid>
                    <Grid container spacing={1} align='center' paddingLeft={1}>
                      <Grid
                        sx={{ maxWidth: "12px" }}
                        item
                        xs={6}
                        align="left"
                        pt="0"
                      >
                        <ChevronLeftIcon sx={challengepointStyle} />
                      </Grid>
                      <Grid
                        sx={{ maxWidth: "12px" }}
                        item
                        xs={1}
                        align="left"
                        pt="0"
                      >
                        <BoltIcon sx={challengepointStyle} />
                      </Grid>
                      <Grid
                        sx={{ maxWidth: "12px" }}
                        item
                        xs={1}
                        align="left"
                        pt="0"
                      >
                        <ChevronRightIcon sx={challengepointStyle} />
                      </Grid>
                      <Grid item xs={1} align="left" ml=".2em" pt=".3em">
                        <Typography
                          sx={{ fontSize: "1em" }}
                          color="secondary.main"
                          variant="h6"
                          sx={{ marginTop: ".025em" }}
                        >
                          {account.challenge_points}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={6} md={2} lg={2} p="1.5em" align='center'>
                        <EmailIcon />
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Email:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6} p="1.5em">
                        <Typography variant="body1" gutterBottom>
                          {account.email}
                        </Typography>
                      </Grid>
                      <Grid />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={4} lg={4} align="center" marginTop={2}>
                  <div>
                    <Grid container p={1} spacing={1}>
                      <Grid item xs={12} md={5} lg={5}>
                        <ChevronLeftIcon style={{ fontSize: "1.1em" }} />
                        <FavoriteBorderIcon style={{ fontSize: "1.1em" }} />
                        <ChevronRightIcon style={{ fontSize: "1.1em" }} />
                        <Typography variant="caption" display="block">
                          Member Since:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={5} lg={5}>
                        <Typography align="center" variant="body">
                          {memberSince} Year(s)
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container p={1} spacing={1}>
                      <Grid item xs={12} md={5} lg={5}>
                        <SchoolIcon />
                        <Typography variant="caption" display="block">
                          Education:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={5} lg={5}>
                        <Typography align="center" variant="body">
                          {randomSchool}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container p={1} spacing={1}>
                      <Grid item xs={12} md={5} lg={5}>
                        <Typography align="center" variant="body">
                          Hobbies:
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={5} lg={5}>
                        <Typography align="center" variant="body">
                          {hobbies.map((hobby) => {
                            console.log(hobby);
                            if (hobby === "SailingIcon") {
                              return <SailingIcon />;
                            }
                            if (hobby === "DownhillSkiingIcon") {
                              return <DownhillSkiingIcon />;
                            }
                            if (hobby === "IceSkatingIcon") {
                              return <IceSkatingIcon />;
                            }
                            if (hobby == "PoolIcon") {
                              return <PoolIcon />;
                            }
                            if (hobby === "SkateboardingIcon") {
                              return <SkateboardingIcon />;
                            }
                            if (hobby === "SnowboardingIcon") {
                              return <SnowboardingIcon />;
                            }
                            if (hobby === "SportsEsportsIcon") {
                              return <SportsEsportsIcon />;
                            }
                            if (hobby === "FitnessCenterIcon") {
                              return <FitnessCenterIcon />;
                            }
                            if (hobby === "GolfCourseIcon") {
                              return <GolfCourseIcon />;
                            }
                            if (hobby === "SportsBasketballIcon") {
                              return <SportsBasketballIcon />;
                            }
                            if (hobby === "LocalAirportIcon") {
                              return <LocalAirportIcon />;
                            }
                            if (hobby === "ComputerIcon") {
                              return <ComputerIcon />;
                            }
                          })}
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
