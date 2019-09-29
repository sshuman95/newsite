import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Pdf from './Components/Resume/sidney_shuman_resume.pdf';


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
    this.handleAbout = this.handleAbout.bind(this);
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
      case 'about':
        return <About/>
        break;
    default:
      return
  }
};

handleAbout(){
  this.setState({
    status:"about"
  })
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
        <a href={Pdf} target='_blank'><h3 style={{fontFamily:'Overwatch'}} id='resume'>Resume</h3></a>
        </div>

        <div className='contact'>
          <h3 style={{fontFamily:'Overwatch'}} onClick={this.handleAppChange} id='contact'>Contact</h3>
        </div>

        <div className='about-me'>
          <p onClick={this.handleAbout}>About</p>
        </div>
        <div className='linkedIn'>
          <p><a href='https://www.linkedin.com/in/sidney-shuman-604966160/' target='_blank'>LinkedIn</a></p>
        </div>
        <div className='Github'>
        <p><a href='https://github.com/sshuman95' target='_blank'>Github</a></p>
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
 <img src='https://cdn.imgbin.com/25/4/5/imgbin-characters-of-overwatch-tracer-sombra-rendering-jeux-Z9u7KRC8z0ztAwxhvt8W4fMAF.jpg' className='main-img'/>
*/