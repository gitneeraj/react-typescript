import { createTheme } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#FAFAFA',
          color: '#2C2C2C',
        },
      },
    },
  },
})

export default theme
