import React from 'react';
import AboutMe from './Components/About/About.js';
import VoteForm from './Components/Votes/VoteForm.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import {Route,BrowserRouter,Switch,NavLink} from 'react-router-dom';
import {withStyles, AppBar, Toolbar} from '@material-ui/core';
import './App.css';
import Typography from '@material-ui/core/Typography';


const styles={
  nav:{
      display:'flex',
      justifyContent:'space-evenly',
  },
  appBar:{
    backgroundColor:'black'
  },
  navLink:{
    color:'white',
    '@media (max-width:550px)': {
      fontSize: 15
    },
  },
}

class App extends React.Component{
  render(){
    const {classes}=this.props;
    return (
      <BrowserRouter>
       <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.nav}>
        <NavLink className={classes.navLink} exact to='/'><Typography variant="h5" className={classes.navLink}>Home</Typography></NavLink>
        <NavLink className={classes.navLink}  to='/Projects'><Typography variant="h5" className={classes.navLink}>Projects</Typography></NavLink>
        <NavLink className={classes.navLink} to='/Vote'><Typography variant="h5" className={classes.navLink}>Feedback</Typography></NavLink>
        <NavLink className={classes.navLink} to='/Contact'><Typography variant="h5" className={classes.navLink}>Contact</Typography></NavLink>
        </Toolbar>
      </AppBar>
      <Switch>
          <Route exact path='/Vote' component={VoteForm}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/' component={AboutMe} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default withStyles(styles)(App);