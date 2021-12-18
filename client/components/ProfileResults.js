import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ErrorIcon from "@mui/icons-material/Error";
import BugReportIcon from "@mui/icons-material/BugReport";

import Avatar from "@mui/material/Avatar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BoltIcon from "@mui/icons-material/Bolt";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { addFriend } from "../store"

// class ProfileResults extends Component {
//   constructor(props) {
//     super(props);
//   }
const ProfileResults = (props) => {
  //   render() {
  const { accounts, userIndustries, userSkills, industries, skills, match } =
    props;
  //const { industries, skills, match} = this.props;

  const matchFilter = match.params.filter;
  let arr = [];
  if (matchFilter) {
    console.log(JSON.parse(matchFilter));
    arr = Object.keys(JSON.parse(matchFilter));
  }

  if (userIndustries.length === 0) {
    return (
      <div>
        <BugReportIcon />
        <Typography variant="h5" gutterBottom component="div">
          No userIndustries found here :(
        </Typography>
      </div>
    );
  }
  if (userSkills.length === 0) {
    return (
      <div>
        <BugReportIcon />
        <Typography variant="h5" gutterBottom component="div">
          No userSkills found here :(
        </Typography>
      </div>
    );
  }

  // matches the industry name from match param to the industryId - put in arr
  const industryArrId = [];
  arr.map((item) => {
    const industryFound = industries.find((industry) => industry.name === item);
    if (industryFound) {
      industryArrId.push(industryFound.id);
      // return(
      //     console.log(industryFound.id)
      // )
    }
  });

  // matches the skill name from match param to the skillId - put in arr
  const skillsArrId = [];
  arr.map((item) => {
    //C++
    if (item === "CPlusPlus") {
      const skillFound = skills.find((skill) => skill.name === "C++");
      if (skillFound) {
        skillsArrId.push(skillFound.id);
        // return(
        //     console.log(skillFound.id)
        // )
      }
    }
    //C#
    if (item === "CSharp") {
      const skillFound = skills.find((skill) => skill.name === "CSharp");
      if (skillFound) {
        skillsArrId.push(skillFound.id);
        // return(
        //     console.log(skillFound.id)
        // )
      }
    }
    // All else
    const skillFound = skills.find((skill) => skill.name === item);
    if (skillFound) {
      skillsArrId.push(skillFound.id);
      // return(
      //     console.log(skillFound.id)
      // )
    }
  });

  console.log("skills", skillsArrId);
  console.log("industries", industryArrId);

  //Takes arr of skill ids - matches to userId of users with that skill
  const skillUserId = [];
  userSkills.map((userSkillPair) => {
    skillsArrId.map((skillId) => {
      if (userSkillPair.skillId === skillId) {
        skillUserId.push(userSkillPair.userId);
        console.log(userSkillPair.userId);
      }
    });
  });

  console.log("skillUserId", skillUserId);

  //Takes arr of industry ids - matches to UserId of users with that industry
  const industryUserId = [];
  userIndustries.map((userIndustryPair) => {
    industryArrId.map((industryId) => {
      if (userIndustryPair.industryId === industryId) {
        industryUserId.push(userIndustryPair.userId);
        console.log(userIndustryPair.userId);
      }
    });
  });
  console.log("industryUserId", industryUserId);

  //Check which user is in both filters.
  let both = [];
  if (skillUserId.length === 0 && industryUserId.length !== 0) {
    both = industryUserId;
  } else if (industryUserId.length === 0 && skillUserId !== 0) {
    both = skillUserId;
  } else {
    skillUserId.map((userSkillId) => {
      if (!both.includes(userSkillId)) {
        both.push(userSkillId);
        console.log(both);
      }
    });
    industryUserId.map((userIndustryId) => {
      if (!both.includes(userIndustryId)) {
        both.push(userIndustryId);
        console.log(both);
      }
    });
  }
  console.log(both);

  if (both.length === 0) {
    return (
      <div>
        <ErrorIcon />
        <Typography variant="h5" gutterBottom component="div">
          No users found... try searching again!
        </Typography>
      </div>
    );
  }
  const { username } = props;
  // const { friendRequests } = props;

  const { auth } = props;
  const { loadFriendRequests } = props;

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const handleAddPeer = (userId) => {
    const { addFriend } = props;

    addFriend(auth.id, userId);
    if (!loading) {
      setSuccess(false);
      setLoading(userId);
      timer.current = window.setTimeout(() => {
        setSuccess(userId);
        setLoading(false);
      }, 800);
    }
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const challengepointStyle = {
    ml: "-.3em",
    mr: "-.3em",
    mt: "0",
    color: "#f9a03f",
    fontSize: "1.7em",
  };

  const bigScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <div>
        <ul>
          <Grid
            container
            p={2}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* change this variable */}
            {accounts.map((user) => {
              const skillIds = [];
              const skillsPairs = userSkills.filter(
                (userSkillPair) => userSkillPair.userId === user.id
              );
              skillsPairs.map((skillPair) => skillIds.push(skillPair.skillId));
              console.log("skillIds:", skillIds);

              const skillNames = [];

              skills.map((skill) => {
                if (skillIds.includes(skill.id)) {
                  return skillNames.push(skill.name);
                }
              });

              const industryIds = [];
              const industriesPairs = userIndustries.filter(
                (userIndustryPair) => userIndustryPair.userId === user.id
              );
              industriesPairs.map((userIndustryPair) => industryIds.push(userIndustryPair.industryId));


              const industryNames = [];

              industries.map((industry) => {
                if (industryIds.includes(industry.id)) {
                  return industryNames.push(industry.name);
                }
              });
              return both.map((userId) => {
                // change thisone too
                if (user.id * 1 === userId * 1) {
                  return (
                    // ---------- BEGIN stephen's code
                    // {singleAccount.name}
                    <Grid item xs={12} lg={6} key={user.id} align="center">
                      <Card align="center">
                        <CardContent>
                          <Grid
                            container
                            p={2}
                            rowSpacing={1}
                            columnSpacing={1}
                          >
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              key={Math.random() * user.id * 100}
                              align="center"
                              pt="1.5em"
                            >
                              <Avatar
                                alt={user.name}
                                src={user.photoUrl}
                                sx={{
                                  width: 100,
                                  height: 100,
                                }}
                              />
                              <Typography variant="h5">{user.name}</Typography>
                              <Grid
                                container
                                spacing={0}
                                alignItems="flex-start"
                                justifyContent="center"
                              >
                                <Grid
                                  sx={{ maxWidth: "12px" }}
                                  item
                                  xs={6}
                                  align="left"
                                  pt="0"
                                >
                                  <span style={{ color: "transparent" }}>
                                    0
                                  </span>
                                </Grid>
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
                                <Grid
                                  item
                                  xs={1}
                                  align="left"
                                  ml=".2em"
                                  pt=".3em"
                                >
                                  <Typography
                                    sx={{ fontSize: "1em" }}
                                    color="secondary.main"
                                    variant="h6"
                                  >
                                    {user.challenge_points}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              align={bigScreen === false ? "center" : "left"}
                              alignSelf="center"
                              justifyContent="center"
                            >
                              <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                              >
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  pb={".5em"}
                                  align={
                                    bigScreen === false ? "center" : "left"
                                  }
                                  alignSelf={
                                    bigScreen === false
                                      ? "center"
                                      : "flex-start"
                                  }
                                  justifyContent={
                                    bigScreen === false
                                      ? "center"
                                      : "flex-start"
                                  }
                                >
                                  <Grid
                                    container
                                    spacing={1}
                                    alignItems="flex-start"
                                    justifyContent="space-between"
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      pb={".5em"}
                                      align={
                                        bigScreen === false ? "center" : "left"
                                      }
                                      alignSelf={
                                        bigScreen === false
                                          ? "center"
                                          : "flex-start"
                                      }
                                      justifyContent={
                                        bigScreen === false
                                          ? "center"
                                          : "flex-start"
                                      }
                                    >
                                      <Typography variant="body1">
                                        Skills
                                      </Typography>
                                      {skillNames.map((skillName) => {
                                        return (
                                          <Typography
                                            color="primary.main"
                                            variant="body2"
                                            key={skillName + user.id}
                                          >
                                            {skillName}
                                          </Typography>
                                        );
                                      })}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      pb={".5em"}
                                      align={
                                        bigScreen === false ? "center" : "left"
                                      }
                                      alignSelf={
                                        bigScreen === false
                                          ? "center"
                                          : "flex-start"
                                      }
                                      justifyContent={
                                        bigScreen === false
                                          ? "center"
                                          : "flex-start"
                                      }
                                    >
                                      <Typography variant="body1">
                                        Industries
                                      </Typography>
                                      {industryNames.map((industryName) => {
                                        return (
                                          <Typography
                                            color="primary.main"
                                            variant="body2"
                                            key={industryName + user.id}
                                          >
                                            {industryName}
                                          </Typography>
                                        );
                                      })}
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  sm={6}
                                  align={
                                    bigScreen === false ? "center" : "left"
                                  }
                                  alignSelf={
                                    bigScreen === false
                                      ? "center"
                                      : "flex-start"
                                  }
                                  justifyContent={
                                    bigScreen === false
                                      ? "center"
                                      : "flex-start"
                                  }
                                >
                                  <Typography variant="body1">
                                    Info: {user.info}
                                  </Typography>
                                  <Typography variant="body1">
                                    Zipcode: {user.zipcode}
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  sm={6}
                                  align={
                                    bigScreen === false ? "center" : "left"
                                  }
                                  alignSelf={
                                    bigScreen === false
                                      ? "center"
                                      : "flex-start"
                                  }
                                  justifyContent={
                                    bigScreen === false
                                      ? "center"
                                      : "flex-start"
                                  }
                                >
                                  <Typography
                                    className="viewProfile"
                                    variant="body1"
                                  >
                                    <span className="viewProfileText">
                                      View Profile{" "}
                                    </span>
                                    <ArrowForwardIcon className="goArrow" />
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions
                          sx={{
                            textAlign: "center",
                            marginLeft: "auto",
                            mr: "auto",
                          }}
                        >
                          <Button
                            sx={
                              success === user.id
                                ? {
                                    ml: "auto",
                                    mr: "auto",
                                    boxShadow: "3px 3px 1px #f9a03f",
                                  }
                                : { ml: "auto", mr: "auto" }
                            }
                            variant="contained"
                            className="friendButton"
                            onClick={(userId) => handleAddPeer(user.id)}
                            endIcon={
                              success === user.id ? (
                                <CheckIcon sx={{ color: "secondary.main" }} />
                              ) : loading === user.id ? (
                                <CircularProgress
                                  size={17}
                                  sx={{ color: "primary.main" }}
                                />
                              ) : null
                            }
                            disabled={
                              loading === false
                                ? false
                                : loading === user.id
                                ? true
                                : false
                            }
                          >
                            {success === user.id ? (
                              <Typography variant="body2">
                                Friend Added!
                              </Typography>
                            ) : (
                              <Typography variant="body2">
                                Add Friend
                              </Typography>
                            )}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                    // ---------- END stephens code
                  );
                }
              });
            })}
          </Grid>
        </ul>
      </div>
    </div>
  );
  //   }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
    return {
        addFriend: (myId, otherId) => dispatch(addFriend(myId, otherId))
    }
}

export default connect(mapStateToProps, mapDispatch)(ProfileResults);
