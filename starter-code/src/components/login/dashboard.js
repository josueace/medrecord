import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Switch, Route } from 'react-router-dom';
import {  Redirect } from 'react-router'

import Leftmenu from './leftmenu.js'
import OpenCase from './opencase.js'
import Visit from './visit.js'
import Hospital2  from './hospital2.js'
import Doctor2  from './doctor2.js'
import Lab  from './lab.js'

import Menu from './menu.js'

import logo from './fav.ico'



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {

  alert('dash2 '+JSON.stringify(props));
 

  
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 

  const drawer = (
    <div>
      <img src={logo}  height="75" width="75"></img>
      <div className={classes.toolbar} />
      
      
      <Divider />
      <Leftmenu {...props}/>
     
    </div>
  );

  return (
    <div className={classes.root}>

      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          
          <Menu {...props} loggedInUser={props.loggedInUser}/>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          
        <Route
              path='/dashboard/lab'
              render={(props) => <Lab {...props}  myuser={props.loggedInUser} />}
             />
          
          <Route
              path='/dashboard/visit'
              render={(props) => <Visit {...props}  myuser={props.loggedInUser} />}
             />
        

        <Route
              path='/dashboard/hospital'
              render={(props) => <Hospital2 {...props}  loggedInUser={props.loggedInUser} />}
             />
        
          <Route
              path='/dashboard/doctor'
              render=
              {
                 (container) => <Doctor2 {...props}   loggedInUser2={props.loggedInUser} coco={props.loggedInUser} />
               
             }
             />

        </Switch>


      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
