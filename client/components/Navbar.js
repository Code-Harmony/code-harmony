import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import theme from "./Theme";

import {
  ThemeProvider,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  IconButton,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Navbar = ({ handleClick, isLoggedIn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [burgerEl, setBurgerEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const openBurger = Boolean(burgerEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleBurger = (event) => {
    setBurgerEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseBurger = () => {
    setBurgerEl(null);
  };
  //ask if we want to get rid of lots of stuff in the profile part
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <h1>Code Harmony</h1> */}
        {/* <hr /> */}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
              onClick={handleBurger}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={burgerEl}
                open={openBurger}
                onClose={handleCloseBurger}
                onClick={handleCloseBurger}
              >
              <Paper>
                <MenuItem>
                  <Link to="/levelup">Level Up</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Link to="/lookingfor">Looking For</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                <Link to="/mypeers">Messages</Link>
                </MenuItem>
                </Paper>
              </Menu>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/home">Code Harmony</Link>
              </Typography>
              {isLoggedIn ? (
                <div>
                  {/* The navbar will show these links after you log in */}
                  <IconButton
                    onClick={handleMenu}
                    aria-label="user"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                  >
                    <Paper>
                    <MenuItem>
                      <Avatar /> <Link to="/updateProfile">Profile</Link>
                    </MenuItem> 
                    <MenuItem>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <PersonAdd />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Settings />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                    </Paper>
                  </Menu>
                </div>
              ) : (
                <div>
                  {/* The navbar will show these links before you log in */}
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </ThemeProvider>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
