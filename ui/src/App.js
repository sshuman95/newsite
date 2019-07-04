import React from 'react';
import AboutMe from './Components/About/About.js';
import VoteForm from './Components/Votes/VoteForm.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import {Route,BrowserRouter,Switch,NavLink} from 'react-router-dom';
import './App.css';


class App extends React.Component{


  render(){
    return (
      <BrowserRouter>
      <div id='opening'>
        <h1>Sidney Shuman</h1>
        <h3>Development Portfolio</h3>
        <img src='https://i.imgur.com/GfBXMmO.jpg' id='me'/>
        <ul>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink  to='/Projects'>Projects</NavLink>
        <NavLink  to='/Vote'>Vote</NavLink>
        <NavLink  to='/Contact'>Contact</NavLink>
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