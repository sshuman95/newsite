import React from 'react';
import './Contact.css'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


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
      return (
        <div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       <Typography variant='h5'>Contact me at Sidney.shuman95@gmail.com</Typography>
       <Typography variant='h6'>Or fill out the form below</Typography>
        </div>
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} onSubmit={this.handleSubmit}> 
        <TextField
        id="standard-dense"
        label="Name"
        name='name' value={this.state.name} onChange={this.handleChange} required
      />
      <TextField
        id="standard-dense"
        label="Email"
        name='email' value={this.state.email} onChange={this.handleChange} required
      />
      <TextField
        id="standard-dense"
        label="Message"
        lines='4'
        name='message' value={this.state.message} onChange={this.handleChange} required
      />
          <Button variant="contained" type='submit' id='btn'>
           Submit
      </Button>
        </form>
        </div>
      )
    }
  
  }
  
  export default Contact;