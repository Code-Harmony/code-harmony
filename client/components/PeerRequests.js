import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend } from "../store";
import { friendRequests } from "../store";
import { loadAllFriendRequests } from "../store/loadFriendRequests";

import Avatar from "@mui/material/Avatar";

// Remove the below line after testing:
import TestAddFriendForm from "./TestAddFriendForm";

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

/**
 * COMPONENT
 */
export const PeerRequests = (props) => {
  const { username } = props;
  // const { friendRequests } = props;

  const { auth } = props;
  const { loadFriendRequests, userSkills, userIndustries, skills } = props;

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const handleAddPeer = (userId) => {
    const { addFriend } = props;
    const { loadAllFriendRequests } = props;

    addFriend(auth.id, userId);
    if (!loading) {
      setSuccess(false);
      setLoading(userId);
      timer.current = window.setTimeout(() => {
        setSuccess(userId);
        setLoading(false);
      }, 800);
    }
    window.setTimeout(() => {
      loadAllFriendRequests(auth.id);
    }, 1600);
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
    <div className="main-content">
      <ThemeProvider theme={theme}>
        <Typography align="center" pt=".3em" variant="body1">
          {auth.name}
        </Typography>
        <Typography align="center" pt=".3em" variant="h4">
          Friend Requests
        </Typography>

        <Grid
          container
          p={2}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {loadFriendRequests.map((user) => {
            // {accounts.map((user) => {
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

            return (
              <Grid item xs={12} lg={6} key={user.id} align="center">
                <Card align="center">
                  <CardContent>
                    <Grid container p={2} rowSpacing={1} columnSpacing={1}>
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
                            <span style={{ color: "transparent" }}>0</span>
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
                          <Grid item xs={1} align="left" ml=".2em" pt=".3em">
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
                            align={bigScreen === false ? "center" : "left"}
                            alignSelf={
                              bigScreen === false ? "center" : "flex-start"
                            }
                            justifyContent={
                              bigScreen === false ? "center" : "flex-start"
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
                                align={bigScreen === false ? "center" : "left"}
                                alignSelf={
                                  bigScreen === false ? "center" : "flex-end"
                                }
                                justifyContent={
                                  bigScreen === false ? "center" : "flex-start"
                                }
                              >
                                <Typography variant="body1">Skills</Typography>
                                {skillNames.map((skillName) => {
                                  return (
                                    <Typography
                                      color="primary.main"
                                      variant="body2"
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
                                align={bigScreen === false ? "center" : "left"}
                                alignSelf={
                                  bigScreen === false ? "center" : "flex-start"
                                }
                                justifyContent={
                                  bigScreen === false ? "center" : "flex-start"
                                }
                              >
                                <Typography variant="body1">Skills</Typography>
                                {skillNames.map((skillName) => {
                                  return (
                                    <Typography
                                      color="primary.main"
                                      variant="body2"
                                    >
                                      {skillName}
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
                            align={bigScreen === false ? "center" : "left"}
                            alignSelf={
                              bigScreen === false ? "center" : "flex-start"
                            }
                            justifyContent={
                              bigScreen === false ? "center" : "flex-start"
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
                            align={bigScreen === false ? "center" : "left"}
                            alignSelf={
                              bigScreen === false ? "center" : "flex-start"
                            }
                            justifyContent={
                              bigScreen === false ? "center" : "flex-start"
                            }
                          >
                            <Typography className="viewProfile" variant="body1">
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
                    sx={{ textAlign: "center", marginLeft: "auto", mr: "auto" }}
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
                        <Typography variant="body2">Friend Added!</Typography>
                      ) : (
                        <Typography variant="body2">Add Friend</Typography>
                      )}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <TestAddFriendForm />
      </ThemeProvider>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    auth: state.auth,
    friends: state.friends,
    loadFriendRequests: state.loadFriendRequests,
    accounts: state.account || [
      { id: 3, name: "stephen" },
      { id: 6, name: "liana" },
    ],
    friendRequests: state.friendRequests,
    userSkills: state.userSkills,
    userIndustries: state.userIndustries,
    skills: state.skills,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addFriend: (myId, otherId) => dispatch(addFriend(myId, otherId)),
    loadAllFriendRequests: (id) => dispatch(loadAllFriendRequests(id)),
  };
};

export default connect(mapState, mapDispatch)(PeerRequests);
