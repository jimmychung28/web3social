import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
        light: '#ffcad7',
        main: '#C4A484',
        dark: '#96714c',
        contrastText: '#C4A484',
      },
      primary: {
        light: '#dafff8',
        main: '#964B00',
        dark: '#96714c',
        contrastText: '#C4A484',
      },
    },
});

export default theme;
