import { createTheme } from '@mui/material/styles';
 

const theme = createTheme({
  palette: {
    primary: {
      main: '#0000CD', // amarelo (equiv. Tailwind bg-yellow-400)
      contrastText: '#000', // texto preto
    },
    secondary: {
      main: '#6366f1', // roxo (ex: Tailwind indigo-500)
      contrastText: '#fff',
    },
  },
});

export default theme;