import React from 'react';
import './projects.css';

const project1 =   
<div className='card'>
<div className='card-top'>
  <img src='https://i.imgur.com/ugnRzYl.png'/>
  </div>
  <h1 style={{fontFamily:'Overwatch',textAlign:'center',color:'white'}}>Home History</h1>
<div className='card-bottom'>
   <div className='details'>
     <h2>Details</h2>
     <p>This a full stack application built with React, Express, Node, and Firebase. Users can query firebase to retrieve data about their home. Service professionals can login and post reports to firebase.</p>
   </div>
   <div className='stack'>
      <h2>Stack</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>JS</p>
      <p>React</p>
      <p>Node</p>
      <p>Firebase</p>
      <p>Express</p>
   </div>
   <div className='links'>
     <h2>Links</h2>
     <a href='https://homehistory.org/' target='_blank'>
     <button>Visit</button>
     </a>
     <a href='https://homehistory.org/' target='_blank'>
     <button>Github</button>
     </a>
     </div>
</div>
</div>

const project2 =  
<div className='card'>
<div className='card-top'>
  <img src='https://i.imgur.com/kGYsrFd.png'/>
  </div>
  <h1 style={{fontFamily:'Overwatch',textAlign:'center',color:'white'}}>Upstream</h1>
<div className='card-bottom'>
   <div className='details'>
     <h2>Details</h2>
     <p>   This project is a mock-up of a front-end application that was built in React and uses the Stripe API to complete orders. It will be used to sell the gym's merchandise.</p>
   </div>
   <div className='stack'>
      <h2>Stack</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>JS</p>
      <p>React</p>
      <p>Stripe API</p>
   </div>
   <div className='links'>
     <h2>Links</h2>
     <a href='https://sshuman95.github.io/upstream/' target='_blank'>
     <button>Visit</button>
     </a>
     <a href='https://github.com/sshuman95/upstream' target='_blank'>
     <button>Github</button>
     </a>
     </div>
</div>
</div>

const project3 =  
<div className='card'>
<div className='card-top'>
  <img src='https://i.imgur.com/0oUC7As.png'/>
  </div>
  <h1 style={{fontFamily:'Overwatch',textAlign:'center',color:'white'}}>Ravenous</h1>
<div className='card-bottom'>
   <div className='details'>
     <h2>Details</h2>
     <p>This project was built in React and uses the Yelp API to fetch data, including location, ratings, and reviews. It can be queried using 'Best Match', 'Highest Rated', or 'Most Reviewed'</p>
   </div>
   <div className='stack'>
      <h2>Stack</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>JS</p>
      <p>React</p>
      <p>Yelp API</p>
      <p>Express</p>
      <p>Node</p>
   </div>
   <div className='links'>
     <h2>Links</h2>
     <a href='https://wrong-cherries.surge.sh' target='_blank'>
     <button>Visit</button>
     </a>
     <a href='https://github.com/sshuman95/ravenous' target='_blank'>
     <button>Github</button>
     </a>
     </div>
</div>
</div>

const project4 =  
<div className='card'>
<div className='card-top'>
  <img src='https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'/>
  </div>
  <h1 style={{fontFamily:'Overwatch',textAlign:'center',color:'white'}}>Portfolio</h1>
<div className='card-bottom'>
   <div className='details'>
     <h2>Details</h2>
     <p>This site was built using HTML, CSS, JS, React and uses MongoDB, Node, and Express.</p>
   </div>
   <div className='stack'>
      <h2>Stack</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>JS</p>
      <p>React</p>
      <p>MongoDB</p>
      <p>Express</p>
      <p>Node</p>
   </div>
   <div className='links'>
     <h2>Links</h2>
     <a href='https://github.com/sshuman95/newsite' target='_blank'>
     <button>Github</button>
     </a>
     </div>
</div>
</div>

const projectArray = [project1,project2,project3,project4]

class Projects extends React.Component{  
  constructor (props) {
    super(props);
    this.state = {
      projects:projectArray,
      currentCardIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }
  
  nextSlide(event){
    var currentCard = this.state.currentCardIndex;
    event.preventDefault();
    if(currentCard === this.state.projects.length-1){
      this.setState({
        currentCardIndex:0
      })
    } else {
    this.setState({
      currentCardIndex:currentCard+1
    })
  }
  }


  prevSlide(event){
    var currentCard = this.state.currentCardIndex;
    event.preventDefault();
    if(currentCard === 0){
      this.setState({
        currentCardIndex:3
      })
    } else {
    this.setState({
      currentCardIndex:currentCard-1
    })
  }
}


  render(){
      return (
        <div className='cardContainer'>
          <a className="prev" onClick={this.prevSlide}>&#10094;</a>
        {this.state.projects[this.state.currentCardIndex]}
    <a className="next" onClick={this.nextSlide}>&#10095;</a>
</div>

      )
    }
  
  }
  
  export default Projects;