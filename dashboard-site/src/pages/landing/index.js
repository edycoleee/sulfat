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
        <Toolbar>
          <CameraIcon />
          <Box ml={2}>
            <Typography variant="h6" noWrap>
              Album layout
            </Typography>
          </Box>
          <Hidden xsDown>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={1}
            >
              <Box ml={5}>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault}
                  color="inherit"
                >
                  Profile
                </Link>
              </Box>
              <Box ml={5}>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault}
                  color="inherit"
                >
                  My account
                </Link>
              </Box>
              <Box ml={5}>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault}
                  color="inherit"
                >
                  Logout
                </Link>
              </Box>
            </Box>
          </Hidden>
          <Hidden smUp>
            <Box ml={25} display="flex" flexDirection="row-reverse">
              <Button variant="contained" color="primary" onClick={handleClick}>
                MENU
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Hidden>
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={1}
            >
              <Typography variant="h5">Responsive h5</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField id="standard-basic" variant="filled" />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
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
