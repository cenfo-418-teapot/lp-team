import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
            <Box
                sx={{
                  display: 'grid',
                  gridAutoColumns: 'repeat(2, 1fr)',
                  gap: 1,
                  height: '100%',
                  maxWidth: 700,
                }}>
              <Item sx={{ gridRow: '1', gridColumn: 'span 2' }}>

                <Card sx={{ maxWidth: 345, bgcolor: 'primary.main', }} elevation={5}>
                  <Box
                      sx={{
                        // bgcolor: 'secondary.main',
                        color: 'white',
                        p: 2,
                        m: 2,
                        width: '120px',
                        height: '120px',
                        // borderRadius: '50%',
                        alignItems: 'center'
                      }}
                  >
                    <CardMedia
                        component="img"
                        src={process.env.PUBLIC_URL + "vintage-teapot-red.svg"}
                        alt={"Teapot logo"}
                    />
                    {/* <SvgIcon
                    color="success"
                    sx={{ width: "100%",  height: '100%', color: 'secondary.main',}}
                  >
                    <Teapot/>
                  </SvgIcon> */}
                  </Box>

                  <CardContent>
                    <Typography
                        variant="caption"
                        component="h1"
                        sx={{ bgcolor: 'secondary.main', color: 'white',}}
                    >
                      418 Teapot Team
                    </Typography>
                  </CardContent>
                </Card>


              </Item>
              <Item sx={{ gridRow: '1', gridColumn: '4 / 5' }}>
                <Typography
                    variant="h3"
                    component="h2"
                    align='left'
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  Visión
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    paragraph="true"
                    align='left'
                    sx={{ fontSize: '16px', marginTop: '16px', fontWeight: 'normal' }}
                >
                  Ser una empresa líder de soluciones web, desarrollando productos innovadores y
                  convertirnos en aliados estratégicos para nuestros clientes.
                </Typography>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Container>
  )
}

export default Vision
