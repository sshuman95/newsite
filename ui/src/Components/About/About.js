import React from 'react';
import './about.css';





class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked:false
    }
  };

    render(){
      return (
      <div id='container'>
        <h1>Sidney shuman</h1>
          <h2>Web Developer</h2>
          <p>I am a web developer based out of Richmond, Virginia. I'm skilled in HTML, JS, CSS, and React with a focus on responsive design. I'm currently looking for freelance work or an entry level position.e</p>
          </div>
      )
    }
  
  }
  
  export default About;