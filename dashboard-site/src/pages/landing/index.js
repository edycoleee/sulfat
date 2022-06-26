import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  TextField,
  Container,
  InputBase,
  Hidden,
  Button,
  IconButton,
  Link,
  Paper,
  MenuItem,
  Menu,
  CardContent,
  Card,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Showcase from "../../assets/showcase.svg";
import ComputerIcon from "@material-ui/icons/Computer";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#2E3B55",
    color: "#ffffff",
  },
  image: {
    width: "350px",
    height: "350px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
  },
  news: {
    boxShadow: "none",
    backgroundColor: "#2196f3",
    color: "#ffffff",
  },
  paperGrid: {
    height: 140,
    width: 100,
    backgroundColor: "orange",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2E3B55",
    color: "#ffffff",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Index() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Navbar-------------- */}
      <AppBar position="relative" className={classes.root}>
        <Container maxWidth="md">
          <Toolbar>
            <CameraIcon />
            <Box ml={2}>
              <Typography variant="h6" noWrap>
                Album layout
              </Typography>
            </Box>
            <Hidden xsDown>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box ml={5}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault}
                    color="inherit"
                  >
                    What You'll Learn
                  </Link>
                </Box>
                <Box ml={5}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault}
                    color="inherit"
                  >
                    Questions
                  </Link>
                </Box>
                <Box ml={5}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault}
                    color="inherit"
                  >
                    Instructors
                  </Link>
                </Box>
              </Box>
            </Hidden>
            <Hidden smUp>
              <Box ml={25} display="flex" flexDirection="row-reverse">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  MENU
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>What You'll Learn</MenuItem>
                  <MenuItem onClick={handleClose}>Questions</MenuItem>
                  <MenuItem onClick={handleClose}>Instructors</MenuItem>
                </Menu>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Showcase -------------- */}
      <Box className={classes.root} mt={-3}>
        <Box p={1} />
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>
                <h1>
                  Ayo Sinau Web <span class="text-warning"> Bareng2 </span>
                </h1>
                <p class="lead my-4">
                  NodeJs, ReactJs, Firebase Google, Github, MaterialUI, Gaspoll, RemBlong
                </p>
                <div>
                  <Button variant="contained" color="primary">
                    Start The Enrollment
                  </Button>
                </div>
              </div>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={Showcase} alt="" />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
      {/* Newsletter-------------- */}
      <Box className={classes.news} mt={-3} p={1}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={1}
              >
                <Typography variant="h5">Sign Up For Our Newsletter</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <TextField id="standard-basic" variant="filled" />
                <Box ml={1} />
                <Button variant="contained">Submit</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Boxes--------------cardGrid */}
      <Box mt={2} />
      <Container maxWidth="md">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4} justifyContent="center">
            <Card className={classes.card}>
              <Box style={{ textAlign: "center" }} p={2}>
                <ComputerIcon fontSize="large" />
              </Box>
              <CardContent
                className={classes.cardContent}
                style={{ textAlign: "center" }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Virtual
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" color="primary" variant="contained">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} justifyContent="center">
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button variant="contained" size="small" color="primary">
                  My button
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} justifyContent="center">
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Container> */}
      {/* Navbar-------------- */}
      {/* Navbar-------------- */}
    </div>
  );
}

export default Index;
