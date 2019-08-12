import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core';

const styles = {
container:{
  display: 'flex',
    flexDirection: 'column',
    
    alignItems:'center',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundImage:"url(https://i.imgur.com/MPL1LGb.png)",
    height:950
},
form:{
  display:'flex',
  flexDirection:'column',
  fontFamily:'Oswald'
},
main:{
  marginTop:200,
  textAlign:'center'
}
}


class Contact extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name:'',
        email:'',
        message:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
      event.preventDefault();
        console.log(event.target)
        this.setState({[event.target.name]:event.target.value})
    }


    handleSubmit(event){
      event.preventDefault();
      let userName=this.state.name;
      let userEmail=this.state.email;
      let userMessage=this.state.message;
      fetch('/api/email/',{method:'post' ,headers: {'Content-Type':'application/json'},body:JSON.stringify({
        name:userName,
        email:userEmail,
        message:userMessage
      })})
      .then(()=>{
        alert('Thank you! Your message has been received.')
      })
      .catch(err=>{
        console.log(err.code)
      })
    };

    render(){
      const {classes} = this.props;
      return (
        <div className={classes.container}>
          <div className={classes.main}>
       <Typography variant='h5' style={{fontFamily:'Oswald'}}>Contact me at Sidney.shuman95@gmail.com</Typography>
       <Typography variant='h6' style={{fontFamily:'Oswald'}}>Or fill out the form below</Typography>
        </div>
        <form onSubmit={this.handleSubmit} className={classes.form}> 
        <TextField
        
        label="Name"
        name='name' value={this.state.name} onChange={this.handleChange} required
      />
      <br/>
      <TextField
        className="standard-dense"
        label="Email"
        name='email' value={this.state.email} onChange={this.handleChange} required
      />
      <br/>
      <TextField
        className="standard-dense"
        label="Message"
        lines='4'
        name='message' value={this.state.message} onChange={this.handleChange} required
      />
      <br/>
          <Button variant="contained" type='submit' id='btn'>
           Submit
      </Button>
        </form>
        </div>
      )
    }
  
  }
  
  export default withStyles(styles)(Contact);