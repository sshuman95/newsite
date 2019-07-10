import React from 'react';
import './projects.css';


let ravenous = (
<div className='project'>
  <div>
<h1>Ravenous</h1>
<img src='https://i.imgur.com/0oUC7As.png' alt='Ravenous Page Example' className='siteExample'/>
</div>
<div className="about">
<h3>About</h3>
<p>This project was built in React and uses the Yelp API to fetch data, including location, ratings, and reviews.<br/> It can be queried using 'Best Match', 'Highest Rated', or 'Most Reviewed'</p>
</div>
<div className='buttons'>
<a style={{color:'black'}} href='https://wrong-cherries.surge.sh'>View Site</a>
<a style={{color:'black'}} href='https://github.com/sshuman95/ravenous'>View Code</a>
</div>
</div>)

let upstream = (
<div className='project'>
  <div>
  <h1>Upstream Bjj</h1>
<img src='https://i.imgur.com/kGYsrFd.png' alt='Upstream Page Example' className='siteExample'/>
</div>
<div className="about">
<h3>About</h3>
<p>This project is a front-end application that was built in React and uses the Stripe API to complete orders.<br/>
It will be used to sell the gym's merchandise.</p>
</div>
<div className='buttons'>
<a style={{color:'black'}} href='https://sshuman95.github.io/upstream/'>View Site</a>
<a style={{color:'black'}} href='https://github.com/sshuman95/upstream'>View Code</a>
</div>
</div>)

let portfolio = (<div className='project'>
<div>
<h1>Portfolio</h1>
<img src='https://i.imgur.com/1Em9ZhH.png' alt='Portfolio Page Example' className='siteExample'/>
</div>
<div className="about">
<h3>About</h3>
<p>This site was built in React and uses MongoDB, Node, and Express.</p>
</div>
<div className='buttons'>
<a style={{color:'black'}} href='https://github.com/sshuman95/newsite'>View Code</a>
</div>
</div>)


class Projects extends React.Component{

    render(){
      return (
        <div id='projectContainer'>
            {ravenous}
            {upstream}
            {portfolio}
        </div>
      )
    }
  
  }
  
  export default Projects;