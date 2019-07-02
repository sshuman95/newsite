import React from 'react';
import './Contact.css'


class Contact extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name:'',
        email:'',
        message:''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
      event.preventDefault();
        console.log(event.target)
        this.setState({[event.target.name]:event.target.value})
    }


    render(){
      return (
        <div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       <h3>Contact me at Sidney.shuman95@gmail.com</h3>
       <h5>or fill out the form below</h5>
        </div>
        <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}action='/api/email' method='post'> 
          <label for='name'>Name: </label>
          <input type='text' name='name' onChange={this.handleChange} required></input>
          <label for='email'>Email: </label>
          <input type='text' name='email' onChange={this.handleChange} required></input>
          <label for='message'>Message: </label>
          <textarea name='message' onChange={this.handleChange} required></textarea>
          <input type='submit' id='submit'/>
        </form>
        </div>
      )
    }
  
  }
  
  export default Contact;