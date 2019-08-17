import React from 'react';
import './about.css';
import Pdf from '../Resume/Sidney Shuman Resume current.pdf';
import {withStyles,Typography} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';


const styles={
  container:{
    marginTop:0,
    overflow:'hidden',
    display:'flex',
   minHeight:'100%',
    width:'100%',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundImage:'url(https://i.imgur.com/MPL1LGb.png)',
    flexDirection:'column',
    position:'absolute'
  },
 typography:{
  fontFamily:'Oswald',
  textAlign:'center',
 },
 header:{
   display:'flex',
   flexDirection:'column',
   margin:'100px auto 0 auto',
   height:'100%',
   position:'relative',
   marginBottom:20
 },
 logo:{
   height:35,
   width:35
 },
 logoContainer:{
   display:'flex',
   justifyContent:'space-evenly',
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
          <a href={Pdf} style={{margin:'0 auto',color:'black'}}>Resume</a>
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