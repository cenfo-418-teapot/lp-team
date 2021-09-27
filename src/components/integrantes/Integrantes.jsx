import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Item(props) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }} elevation={4}>
        <CardMedia
          component="img"
          src={process.env.PUBLIC_URL + props.src}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {props.role}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Integrantes() {
  return (
    <Container maxWidth="100%" sx={{ height: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={10}
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Item name="Josué Brenes" src="josue.svg" role="Calidad"></Item>
        <Item name="Isaac Miranda" src="isaac.svg" role="Desarrollo"></Item>
        <Item name="Mauricio Poveda" src="mauricio.svg" role="DevOps"></Item>
        <Item
          name="Sebastián Soto"
          src="sebastian.svg"
          role="Scrum Master"
        ></Item>
      </Grid>
    </Container>
  );
}

export default Integrantes;
