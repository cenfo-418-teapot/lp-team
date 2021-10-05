import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Vision() {
  return (    
    <Container sx={{height: '100%'}}>
      <Grid
        sx={{height: '100%'}}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="1.25rem"
      >
        <Grid item xs={6}>
          <Typography variant="h4" component="h1" sx={{ color: 'primary.main', fontWeight: 'bold', marginBottom: '2rem' }}>
            Visión
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: '30rem' }}>
          Ser una empresa líder de soluciones móviles, desarrollando productos innovadores y convertirnos en aliados estratégicos para nuestros clientes.
          </Typography>
        </Grid>  
        <Grid item xs={6}>
          <div>
            <img className="img-responsive" src="images/vision.png" alt="418 Teapot - Visión" />
          </div>
        </Grid> 
      </Grid>
    </Container>
  )
}

export default Vision
