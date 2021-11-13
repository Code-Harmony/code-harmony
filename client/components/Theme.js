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
});


export default theme