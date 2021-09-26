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
          <Box sx={{height: '100%'}}>
            <Typography variant="h6" component="h1">
              Vision....Un texto de ejemplo...
            </Typography>
            <Typography variant="h6" component="h1">
              Un texto de ejemplo...
            </Typography>
          </Box>
        </Grid>  
      </Grid>
    </Container>
  )
}

export default Vision