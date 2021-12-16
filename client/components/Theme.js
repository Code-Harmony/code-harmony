import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#258ea6",
      contrastText: "#eaf3ea",
    },
    secondary: {
      main: "#f9a03f",
      dark: "#f9a03f",
    },
    background: {
      default: "#e9e9e9",
      paper: "#f7f7f7",
    },
    success: {
      main: "#1F8A70",
    },
    text: {
      primary: "#3d3d3d",
    },
    info: {
      main: "#bf820f",
    },
    cardIcon: {
      main: "blue",
    },
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    h1: {
      fontFamily: ["Spartan", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["Spartan", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Spartan", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Spartan", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Spartan", "sans-serif"].join(","),
    },
    h6: {
      fontFamily: ["Spartan", "sans-serif"].join(","),
    },
    body1: {
      fontFamily: ["Jost", "sans-serif"].join(","),
    },
    body2: {
      fontFamily: ["Jost", "sans-serif"].join(","),
    }
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          size: "large",
          edge: "start",
          color: "inherit",
          mr: 2,
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
          font: "small",
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "home" },
          style: {
            background: "#258ea6",
          },
        },
      ],
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
              },
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          transformOrigin: {
            horizontal: "right",
            vertical: "top",
          },
          anchorOrigin: {
            horizontal: "right",
            vertical: "bottom",
          },
        },
      },
    },
  },
});

export default theme;
