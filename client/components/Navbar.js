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
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={burgerEl}
                open={openBurger}
                onClose={handleCloseBurger}
                onClick={handleCloseBurger}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 10,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 87,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                      sx: {
                        p: 50,
                      }
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
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
              </Menu>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/home">Code Harmony</Link>
              </Typography>
              {isLoggedIn ? (
                <div>
                  {/* The navbar will show these links after you log in */}
                  <IconButton
                    onClick={handleMenu}
                    size="large"
                    aria-label="user"
                    color="inherit"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    className="test"
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <div>
                  {/* The navbar will show these links before you log in */}
                  <Button color="inherit">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button color="inherit">
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
