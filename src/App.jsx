
import { Box, createTheme, ThemeProvider } from "@mui/material"
import { deepPurple, lime } from "@mui/material/colors"
import AppRouter from "./Router/AppRouter"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bede",
      },
      secondary: {
        main: deepPurple[500],
      },
      error: {
        main: lime["A400"],
      },
      koyuMor: {
        main: deepPurple[500],
        light: deepPurple[300],
        dark: deepPurple[800],
        contrastText: "white",
      },
    },
  })
  return (
    <Box sx={{backgroundColor:"#899adc"}}  >
<ThemeProvider theme={theme}>
<AppRouter />
      </ThemeProvider>
    </Box>
  )
}

export default App
