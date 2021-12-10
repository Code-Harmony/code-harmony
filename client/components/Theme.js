import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#258ea6',
      contrastText: '#eaf3ea',
    },
    secondary: {
      main: '#f9a03f',
      dark: '#f9a03f',
    },
    background: {
      default: '#e9e9e9',
      paper: '#f7f7f7',
    },
    success: {
      main: '#1F8A70',
    },
    text: {
      primary: '#3d3d3d',
    },
    info: {
      main: '#bf820f',
    },
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          size : "large",
          edge : "start",
          color: "inherit",
          mr: 2 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          font: "small"
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
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
        }
      },
    },
  MuiMenu: {
    styleOverrides: {
      root:{
        transformOrigin:{
          horizontal: "right", 
          vertical: "top"
        },
        anchorOrigin:{
          horizontal: "right", 
          vertical: "bottom"
        }
      }
    },  
  },
  },
});


export default theme