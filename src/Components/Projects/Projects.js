import React from 'react';
import './projects.css';


let ravenous = (<div className='ravenous'>
<h1>Ravenous</h1>
<h3>About</h3>
<p>This project was built in React and uses the Yelp API to fetch data, including location, ratings, and reviews.<br/> It can be queried using 'Best Match', 'Highest Rated', or 'Most Reviewed'</p>
<a style={{color:'white'}} href='https://wrong-cherries.surge.sh'>Click Here To Visit</a>
</div>)

let upstream = (<div className='upstream'>
<h1>Upstream Bjj</h1>
<h3>About</h3>
<p>This project is a front-end application that was built in React and uses the Stripe API to complete orders.<br/>
It will be used to sell the gym's merchandise.</p>
<a style={{color:'white'}} href='https://sshuman95.github.io/upstream/'>Click Here To Visit</a>
</div>)

let tea = (<div className='tea'>
<h1>Soul Smith Kombucha</h1>
<h3>About</h3>
<p>This project was built using HTML, CSS, Javascript, and PHP. </p>
<a style={{color:'white'}} href='http://www.soulsmithkombucha.com/'>Click Here To Visit</a>
</div>)




class Projects extends React.Component{

    render(){
      return (
        <div id='projectContainer'>
          <div>
            {ravenous}
          </div>
          <div>
            {upstream}
            </div>
          <div>
            {tea}
          </div>
        </div>
      )
    }
  
  }
  
  export default Projects;