import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// We may be able to remove line 7 and bring theme in from props, now that the Theme Provider is wrapping our entire app in index.js
import theme from "./Theme";
import {
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
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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

  return (
    <div>
      {/* <h1>Code Harmony</h1> */}
      {/* <hr /> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={handleBurger} aria-label="menu">
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
                <Link to="/messages">Messages</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                <Link to="/requests">Friend Requests</Link>
                </MenuItem>
              </Paper>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/home" className="h1">Code Harmony</Link>
            </Typography>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <IconButton onClick={handleMenu} aria-label="user">
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                >
                  <Paper>
                    <MenuItem >
                      <ListItemIcon>
                        <AccountCircleOutlinedIcon/>
                      </ListItemIcon>
                      <Link to="/myProfile"> My Profile</Link>
                    </MenuItem> 
                    <MenuItem>
                      <ListItemIcon>
                        <ManageAccountsIcon/>
                      </ListItemIcon>
                      <Link to="/updateProfile"> Edit Profile</Link>
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
