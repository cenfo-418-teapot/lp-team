import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardMedia from "@mui/material/CardMedia";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: 'white',
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

function Inicio() {
  return (    
    <Container maxWidth="100%" sx={{height: '100%'}}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{height: '100%'}}
      >
        <Grid item>
          <Box
          sx={{
            bgcolor: 'prima/ry.light',
            display: 'grid',
            gridAutoColumns: 'repeat(2, 1fr)',
            gap: 1,
          }}>
            <Item sx={{ gridRow: '1', gridColumn: 'span 2' }}>
              <Box 
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'white',
                  p: 1,
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%'
                }}
              >
                <CardMedia
                  component="img"
                  src={process.env.PUBLIC_URL + "vintage-teapot.svg"}
                  alt={"Teapot logo"}
                />
              </Box>
              <Typography variant="h6" component="h1">
                Equipo 418 Teapot
              </Typography>
            </Item>
            <Item sx={{ gridRow: '1', gridColumn: '4 / 5' }}>
              <Typography variant="h4" component="h2">
                Bienvenidos
              </Typography>
              <Typography variant="h5" component="h5">
                Somos un equipo de desarrolladores de software
                que se enfoca en proyectos de aplicaciones 
                móviles con Android.
              </Typography>
            </Item>
          </Box>
        </Grid>  
      </Grid>
    </Container>
  )
}

export default Inicio