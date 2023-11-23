import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#ffcad7',
        main: '#ff385c',
        dark: '#d90033',
        contrastText: '#fff',
      },
      secondary: {
        light: '#dafff8',
        main: '#38ffdb',
        dark: '#00c48b',
        contrastText: '#000',
      },
    },
});

export default theme;
