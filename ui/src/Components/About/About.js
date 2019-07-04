import React from 'react';
import './about.css';
import Pdf from '../Resume/Sidney Shuman resume 6_25.pdf';

class AboutMe extends React.Component{
    render(){
      return (
        <div id='about'>
       <div className='info'>
       <p><span>Hey, I'm Sidney. I am a junior UX/UI web developer and I created this page to show my skills in multiple web tools. </span><br/><br/>
       After graduating from Virginia Commonwealth University, I began my career as an IT project coordinator but decided to follow my passion and pursue a career in web development.<br/><br/>
       When I'm not online you can find me at the local gym, training Jiu-Jitsu, or visiting one of Richmond's many local restuarants.<br/><br/>
       Let me know what you think I should build next by voting or leaving a suggestion in the Vote tab. </p>
      </div>
      <h2>Current Resume:</h2>
      <a href={Pdf} target='_blank' style={{color:'black'}}>Click Here</a>
        </div>
      )
    }
  
  }
  
  export default AboutMe;