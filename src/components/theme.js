import { createTheme} from '@mui/material/styles';
import { grey } from '@mui/material/colors';




export const theme = createTheme({
    typography:{
      fontFamily:"roboto",
    },
    palette : {
        primary : {
        main: grey[100],
        light: '#000',
        dark: '#1565c0',
        contrastText: '#fff',
          }, 
          // success:{
          //   main:grey[900],
          // }
      },
    
  });
