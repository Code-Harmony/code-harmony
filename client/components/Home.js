import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Group";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ForumIcon from "@mui/icons-material/Forum";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4/5 }}>
          <Link to="/levelup">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <ArrowUpwardIcon />
                  <br />
                 Level Up
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Level Up your skills?
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4/5 }}>
          <Link to="/lookingfor">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <GroupsIcon /> 
                  <br />
                  Looking For
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Looking for people?
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4/5 }}>
          <Link to="/mypeers">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <ForumIcon />
                  <br />
                  Messages 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Direct Messages, Project Messages
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link> 
          </Card>
          </Grid>
          <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 4/5 }}>
          <Link to="/requests">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <PersonAdd /> 
                  <br />
                  Friend Requests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View everyone who added you
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
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
