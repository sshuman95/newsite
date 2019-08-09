import React from 'react';
import AboutMe from './Components/About/About.js';
import VoteForm from './Components/Votes/VoteForm.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import {Route,BrowserRouter,Switch,NavLink} from 'react-router-dom';
import './App.css';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <div id='opening'>
      <Typography  variant="h4">
            Sidney Shuman
            </Typography>
            <Typography  variant="h5">
            Development Portfolio
            </Typography>
        
        <ul>
        <NavLink exact to='/'><Typography variant="h5">Home</Typography></NavLink>
        <NavLink  to='/Projects'><Typography variant="h5">Projects</Typography></NavLink>
        <NavLink  to='/Vote'><Typography variant="h5">Feedback</Typography></NavLink>
        <NavLink  to='/Contact'><Typography variant="h5">Contact</Typography></NavLink>
        </ul>
      </div>
      <Switch>
          <Route exact path='/Vote' component={VoteForm}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/' component={AboutMe}/>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;



/*<ul>
          <li onClick = {this.changeStatus} className={this.state.status==='Home'?'Black':''}>Home</li>
          <li onClick = {this.changeStatus } className={this.state.status==='Projects'?'Black':''}>Projects</li>
          <li onClick = {this.changeStatus} className={this.state.status==='Vote'?'Black':''}>Vote</li>
          <li onClick = {this.changeStatus} className={this.state.status==='Contact'?'Black':''}>Contact</li>
          {this.state.status ==='Home'?<AboutMe/>:(this.state.status==='Vote')?<VoteForm/>:<AboutMe/>}
        </ul> 
        
        
        
          constructor(props){
    super(props);
    this.state = {
      status:'Home'
    }
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(event){
    let target = event.target.innerHTML;
    this.setState({
      status:target
    })
    console.log(target)
  }*/