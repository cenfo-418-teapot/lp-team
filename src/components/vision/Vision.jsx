import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Vision() {
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
          <Box sx={{height: "100%"}}>
            <Typography variant="h3" component="h2" align="left"
                        sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Visión
            </Typography>
            <Typography variant="body1"
                        component="p"
                        paragraph="true"
                        align="left"
                        sx={{ fontSize: '16px', marginTop: '16px', fontWeight: 'normal' }}
            >
              Ser una empresa líder de soluciones móviles, desarrollando productos innovadores y
              convertirnos en aliados estratégicos para nuestros clientes.


            </Typography>
          </Box>
        </Grid>  
      </Grid>
    </Container>
  )
}

export default Vision