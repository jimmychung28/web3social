import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
        light: '#ffcad7',
        main: '#C4A484',
        dark: '#96714c',
        contrastText: '#000',
      },
      primary: {
        light: '#dafff8',
        main: '#964B00',
        dark: '#e20d34',
        contrastText: '#000',
      },
    },
});

export default theme;
