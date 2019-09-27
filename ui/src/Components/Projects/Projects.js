import React from 'react';
import './projects.css';



class Projects extends React.Component{
    render(){
      return (
        <div id='cardContainer'>
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
                   <button>Visit</button>
                   <button>Github</button>
                   </div>
              </div>
      </div>
      )
    }
  
  }
  
  export default Projects;