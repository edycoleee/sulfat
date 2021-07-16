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
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Showcase from "../../assets/showcase.svg";
import SearchIcon from "@material-ui/icons/Search";
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
}));

function Index() {
  const classes = useStyles();
  return (
    <div>
      {/* Navbar-------------- */}
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <CameraIcon />
          <Box ml={2}>
            <Typography variant="h6" noWrap>
              Album layout
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Showcase -------------- */}
      <Box className={classes.root} mt={-3}>
        <Box p={1} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <h1>
                Become a <span class="text-warning"> Web Developer </span>
              </h1>
              <p class="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
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
      </Box>
      {/* Newsletter-------------- */}
      <Box className={classes.news} mt={-3} p={1}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Responsive h5</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Textfield
              variant=""
              placeholder="Search Google Maps"
              styles={{ backgroundColor: "#FFFFFF" }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      {/* Navbar-------------- */}
      {/* Navbar-------------- */}
      {/* Navbar-------------- */}
    </div>
  );
}

export default Index;
