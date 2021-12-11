import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Group";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ForumIcon from "@mui/icons-material/Forum";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@mui/styles";
import clsx from "clsx";
import theme from "./Theme";

const useStyles = makeStyles(() =>
  createStyles({
    foo: {
      fontSize: theme.typography.pxToRem(32),
      color: theme.palette.cardIcon.main,
      // fontSize: "2rem",
    },
    bazz: {
      color: theme.palette.primary.main,
    },
    homeCardMain: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;
  const classes = useStyles();
  return (
    <div>
      <h3
        className={clsx({
          [classes.foo]: username === "stephen",
        })}
      >
        Welcome, {username}
      </h3>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        align="center"
      >
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4 / 5 }} className={classes.homeCardMain}>
            <CardActionArea>
              <CardContent>
                <Link to="/levelup">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                    direction="column"
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <PersonIcon
                        fontSize="large"
                        className="cardIcon cardLabel"
                        style={{ fontSize: "4rem" }}
                      />
                      <AutoGraphIcon
                        fontSize="large"
                        className="cardIcon cardLabel"
                        style={{ fontSize: "4rem" }}
                      />
                    </Grid>
                    <Grid item xs={4} md={6}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        className="cardLabel"
                        component="div"
                      >
                        Level Up
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Level Up your skills?
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4 / 5 }} className={classes.homeCardMain}>
            <CardActionArea>
              <CardContent>
                <Link to="/lookingfor">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                    direction="column"
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <PersonSearchIcon
                        className="cardIcon cardLabel"
                        style={{ fontSize: "4rem" }}
                      />
                      <br />
                    </Grid>
                    <Grid item xs={4} md={6}>
                      <Typography
                        gutterBottom
                        className="cardLabel"
                        variant="h5"
                        component="div"
                      >
                        Looking For
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Looking for people
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4 / 5 }} className={classes.homeCardMain}>
            <CardActionArea>
              <CardContent>
                <Link to="/messages">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                    direction="column"
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <ChatIcon
                        fontSize="large"
                        className="cardIcon cardLabel"
                        style={{ fontSize: "4rem" }}
                      />
                    </Grid>
                    <Grid item xs={4} md={6}>
                      <Typography
                        gutterBottom
                        className="cardLabel"
                        variant="h5"
                        component="div"
                      >
                        Messages
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Direct Messages, Project Messages
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
