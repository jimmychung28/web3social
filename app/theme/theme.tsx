import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
        light: '#ffcad7',
        main: '#ff385c',
        dark: '#d90033',
        contrastText: '#000',
      },
      primary: {
        light: '#dafff8',
        main: '#38ffdb',
        dark: '#e20d34',
        contrastText: '#000',
      },
    },
});

export default theme;
