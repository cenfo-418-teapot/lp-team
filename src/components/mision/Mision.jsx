import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function Mision() {
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
          <div>
            <img className="img-responsive" src="images/mision.png" alt="418 Teapot - Misión" />
          </div>
        </Grid> 
        <Grid item xs={6}>
          <Typography variant="h4" component="h1" sx={{ color: 'primary.main', fontWeight: 'bold', marginBottom: '2rem' }}>
            Misión
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: '30rem' }}>
            Somos una empresa dedicada a crear soluciones integrales, brindando un servicio de calidad y experiencia, generando valor para la empresa y la sociedad.
          </Typography>
        </Grid>  
      </Grid>
    </Container>
  )
}

export default Mision
