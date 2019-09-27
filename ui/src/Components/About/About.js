import React from 'react';
import './about.css';
import Pdf from '../Resume/Sidney Shuman Resume current.pdf';
import {withStyles,Typography} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Projects from '../Projects/Projects';


const styles={
  container:{
    marginTop:15,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
    height:300,
    marginBottom:0,
    '@media (min-width:550px)': {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    },
  },
  typography:{
    fontFamily:'Oswald',
  },
  logoContainer:{
    marginTop:20
  }
}


class AboutMe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked:false
    }
  };

    componentDidMount(){
      this.setState({
        checked:true
      })
    }


    render(){
 
      const {classes}=this.props;

      return (
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography className={classes.typography} variant='h2'>Sidney Shuman</Typography>
          <br/>
          <Typography className={classes.typography}>Development Portfolio</Typography>
          </div>
          <Typography  className={classes.typography}>I am a Front End developer living in Richmond, Virginia</Typography>
          <div className={classes.logoContainer}>
          <Fade in={this.state.checked} timeout={1200}>
          <img src="https://img.icons8.com/ios/50/000000/javascript.png" className={classes.logo}/>
          </Fade>
          <Fade in={this.state.checked} timeout={2400}>
          <img src="https://img.icons8.com/ios/50/000000/css.png" className={classes.logo}></img>
          </Fade>
          <Fade in={this.state.checked} timeout={3600}>
          <img src="https://img.icons8.com/ios/50/000000/html.png" className={classes.logo}></img>
          </Fade>
          <Fade in={this.state.checked} timeout={4800}>
          <img src="https://img.icons8.com/ios-filled/50/000000/react-native.png" className={classes.logo}></img>
          </Fade>
          </div>
          <br/>
          </div>
      )
    }
  
  }
  
  export default withStyles(styles)(AboutMe);


  /*  
  '&:hover':{
    display:'flex
  },
  "-moz-transition": "4s ease-in",
    "-webkit-transition": "4s ease-in",
    transition: "4s ease-in", */