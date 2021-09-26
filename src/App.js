import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import { 
  Header, 
  Footer, 
  Inicio, 
  Integrantes, 
  Mision, 
  Vision
} from './components'

import './App.css'

const OpenSans = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap'

const theme = createTheme({
  palette: {
    primary: {
      light:'#d1d1e9',
      main: '#6246ea',
      // dark:
    },
    secondary: {
      // light:'#d1d1e9',
      main: '#e45858',
      // dark:
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    allVariants: {
      color: '#2b2c34'
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${OpenSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <section className="panel" id="inicio">
          <Inicio />
        </section>
        <section className="panel" id="integrantes">
          <Integrantes />
        </section>
        <section className="panel" id="mision">
          <Mision />
        </section>
        <section className="panel" id="vision">
          <Vision />
        </section>
        <section className="panel">
          <Container maxWidth="100%" sx={{height: '100%'}}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sx={{marginBottom: '1.25rem'}}>
                <Box sx={{
                  padding: '2.5rem',
                  bgcolor: 'primary.light',
                  // '&:hover': {
                  //   backgroundColor: 'primary.main',
                  //   opacity: [0.9, 0.8, 0.7],
                  // },
                }}>
                  <Typography variant="h6" component="h1">
                    Inicio....Un texto de ejemplo...
                  </Typography>
                  <Typography variant="h6" component="h1">
                    Un texto de ejemplo...
                  </Typography>
                  <Button variant="contained">Hello World</Button>
                  <Button variant="contained" color="secondary">Hello World</Button>
                </Box>
              </Grid>  
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing="1.25rem"
            >
              <Grid item xs={6}>
                <Paper sx={{
                  padding: '2.5rem',
                  // bgcolor: 'primary.light',
                }}>
                  <Typography variant="h6" component="h1">
                    Inicio....Un texto de ejemplo...
                  </Typography>
                  <Typography variant="h6" component="h1">
                    Un texto de ejemplo...
                  </Typography>
                  <Button variant="contained">Hello World</Button>
                  <Button variant="contained" color="secondary">Hello World</Button>
                </Paper>
              </Grid> 
              <Grid item xs={6}>
                <Paper sx={{
                  padding: '2.5rem',
                }}>
                  <Typography variant="h6" component="h1">
                    Inicio....Un texto de ejemplo...
                  </Typography>
                  <Typography variant="h6" component="h1">
                    Un texto de ejemplo...
                  </Typography>
                  <Button variant="contained">Hello World</Button>
                  <Button variant="contained" color="secondary">Hello World</Button>
                </Paper>
              </Grid>  
            </Grid>
          </Container>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
