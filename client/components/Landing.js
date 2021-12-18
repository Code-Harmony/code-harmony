import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { CardActionArea } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Group";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ForumIcon from "@mui/icons-material/Forum";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ChatIcon from "@mui/icons-material/Chat";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
// Styling checklist: 1. Import these things first
import { makeStyles, createStyles } from "@mui/styles";
// Styling optional checklist: 1. import clsx
import clsx from "clsx";
import theme from "./Theme";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Styling checklist: 2. Use this hook to create your classes
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

export const Landing = (props) => {
  // Styling checklist: 3. call useStyles() and store in a variable. You can call it anything.
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div id="hero">
        <Grid
          container
          p={2}
          rowSpacing={1}
          columnSpacing={1}
          align="center"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={12} lg={12}>
            <div style={{ color: "transparent", minHeight: "275px" }}>
              hello world
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            lg={3}
            alignSelf="center"
            justifyContent="center"
            alignSelf="center"
          >
            <div id="hero-action">
              <div>
                <Typography align="center" sx={{ color: "white" }} variant="h3">
                  <ChevronLeftIcon style={{ fontSize: "1em" }} />
                  <FavoriteBorderIcon style={{ fontSize: "1em" }} />
                  <ChevronRightIcon style={{ fontSize: "1em" }} />
                </Typography>
                <Typography sx={{ color: "white" }} variant="h3">
                  code harmony
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Link to="/login">
              <Button
                fullWidth
                variant="cta"
                sx={{ mt: 3, mb: 2, minWidth: "15%" }}
              >
                login
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Link to="/signup">
              <Button
                fullWidth
                variant="cta"
                sx={{ mt: 3, mb: 2, minWidth: "15%" }}
              >
                sign up
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* <h3
        // Styling optional checklist: 2. see conditional format syntax
        className={clsx({
          [classes.foo]: username === "stephen",
        })}
      >
        Welcome, {name}
      </h3> */}
      </div>
    </ThemeProvider>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    name: state.auth.name,
  };
};

export default connect(mapState)(Landing);
