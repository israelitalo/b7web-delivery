import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fc3434',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#74a4a4',
      contrastText: '#FFF',
    },
    text: {
      primary: '#0f1016',
      secondary: '#0f1016',
      disabled: '#555',
    },
    error: {
      main: '#fb7684',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});