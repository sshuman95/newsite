import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment:({name:'User',comment:''}),
      comments:[{name:'Sidney',comment:'Hello'}],
      status:'projects'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAppChange = this.handleAppChange.bind(this);
    this.handleApp = this.handleApp.bind(this);
  }

  handleChange(event){
    event.preventDefault();
      this.setState({
        comment:({name:'User',comment:event.target.value})
      })
  }

  handleSubmit(event){
    event.preventDefault();
    if(!this.state.comment.comment){
        this.setState({
          comments:[...this.state.comments,{name:'Mod',comment:'Please enter a comment'}]
        })
    } else {
      this.setState({
        comments:[...this.state.comments,this.state.comment]
      })
    }
  }

handleAppChange(event){
  event.preventDefault();
  this.setState({
    status:event.target.id
  })
}

handleApp(){
  switch(this.state.status) {
    case 'contact':
      return <Contact/>
      break;
    case 'projects':
      return <Projects/>
      break;
    default:
      return
  }
}

  render(){
  return (
    <div className="App">
      <div className='header'>
      <div className='profile'>
        <div className='player-icon'>
        <img src='https://cdn.iconscout.com/icon/free/png-512/overwatch-2-569226.png' id='add-player'/>
        </div>
        <div className='divider'></div>
        <div className='player-main'>
          <h2 className='name'>Sidney Shuman</h2>
          <div className='level'>
              12
          </div>
          <div className='star-container'>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
            <span className='star'>&#9733;</span>
          </div>
        </div>
      </div>
      </div>
      <div id='grid'>
      <h1 className='portfolio'>Portfolio</h1>
        <div className='projects'>
          <h3 style={{fontFamily:'Overwatch'}} onClick={this.handleAppChange} id='projects'>Projects</h3>
        </div>

        <div className='resume'>
          <h3 style={{fontFamily:'Overwatch'}} onClick={this.handleAppChange} id='resume'>Resume</h3>
        </div>

        <div className='contact'>
          <h3 style={{fontFamily:'Overwatch'}} onClick={this.handleAppChange} id='contact'>Contact</h3>
        </div>

        <div className='about-me'>
          <p>About</p>
        </div>
        <div className='linkedIn'>
          <p>LinkedIn</p>
        </div>
        <div className='Github'>
          <p>Github</p>
        </div>
        <div className='content'>
          {this.handleApp()}
        </div>
        <div id='chatContainer'>
          <div className='chat'>
          {this.state.comments.map((comment,i)=>{
          if(comment.name==='Mod'){
            return (
            <p  key={i} style={{color:'red'}}>[{comment.name}]: {comment.comment}</p>
            )
          } else {
            return (
              <p key={i}>[{comment.name}]: {comment.comment}</p>
            )
          }
          })}
          </div>
          <form onSubmit={this.handleSubmit} id='form'>
        <input className='form-submit' type='text' value={this.state.comment.comment} name='comment' onChange={this.handleChange}/>
        </form>
        </div>
      </div>
    </div>
  )};
}

export default App;

/*
 <img src='https://i.pinimg.com/originals/a4/00/39/a40039d16016face7aade4f7661c0d16.jpg' className='main-img'/>
*/