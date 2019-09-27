import React from 'react';
import './Contact.css';
import Typography from '@material-ui/core/Typography';




class Contact extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name:'',
        email:'',
        message:'',
        sent:false,
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
      event.preventDefault();
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
        this.setState({
          sent:true
        })
      })
      .catch(err=>{
        console.log(err.code)
      })
    };

    render(){
      return (
        <div id='container'>
          {!this.state.sent?
          <div className='form-container'>
       <h1 style={{fontFamily:'Overwatch',color:'white'}}>Contact me at Sidney.shuman95@gmail.com</h1>
       <h2  style={{fontFamily:'Overwatch',color:'white'}}>Or fill out the form below</h2>
       <form onSubmit={this.handleSubmit}> 
        <input
        className='contact-form-input'
        placeholder='Name'
        name='name' value={this.state.name} onChange={this.handleChange} required
      />
      <input
      className='contact-form-input'
        placeholder="Email"
        name='email' value={this.state.email} onChange={this.handleChange} required
      />
      <input
      className='contact-form-input'
        placeholder="Message"
        name='message' value={this.state.message} onChange={this.handleChange} required
      />
          <button type='submit'>SUBMIT</button>
        </form> 
        </div>
        :
      <Typography variant='h3' style={{fontFamily:'Overwatch',color:'white',marginTop:250, textAlign:'center'}}>Thank you for your input!</Typography>}
        </div>
      )
    }
  
  }
  
  export default Contact;

  /*        <form onSubmit={this.handleSubmit} id='form'> 
        <input
        label="Name"
        name='name' value={this.state.name} onChange={this.handleChange} required
      />
      <input
        label="Email"
        name='email' value={this.state.email} onChange={this.handleChange} required
      />
      <input
        label="Message"
        lines='4'
        name='message' value={this.state.message} onChange={this.handleChange} required
      />
          <button type='submit'>SUBMIT</button>
        </form> */