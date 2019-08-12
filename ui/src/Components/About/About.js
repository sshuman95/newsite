import React from 'react';
import './about.css';
import Pdf from '../Resume/Sidney Shuman Resume 7_5.pdf';
import {withStyles,Typography} from '@material-ui/core';


const styles={
  container:{
    marginTop:0,
    height:1000,
    width:'100%',
    display:'flex',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundImage:'url(https://i.imgur.com/MPL1LGb.png)',
  },
 typography:{
  fontFamily:'Oswald',
  textAlign:'center'
 },
 header:{
   display:'flex',
   flexDirection:'column',
   margin:'0 auto',
   justifyContent:'center'
 }
}


class AboutMe extends React.Component{
    render(){
 
      const {classes}=this.props;

      return (
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography className={classes.typography} variant='h2'>Sidney Shuman</Typography>
          <br/>
          <Typography className={classes.typography}>Development Portfolio</Typography>
          </div>
      </div>
      )
    }
  
  }
  
  export default withStyles(styles)(AboutMe);

  /*<Slide direction="down" mountOnEnter unmountOnExit in={true}>
          <Paper className={classes.paper}>
        
          </Paper>
        </Slide> */