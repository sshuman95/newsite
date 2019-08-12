import React from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core';

const styles={
    container:{
      display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'top',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundImage:"url(https://i.imgur.com/MPL1LGb.png)",
    height:1200,
    },
    input:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    },
    form:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      marginBottom:20,
      
    },
    card:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      textAlign:'center',
      width:300,
      margin:'0 auto'
    },
    typography:{
      '@media (max-width:550px)': {
        fontSize: 20
      },
    }
}

class VoteForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        comments: [],
        userComment:''
      }
      this.handleClickAdd=this.handleClickAdd.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount() {
      fetch('/api/comments')
        .then(response => {
          return response.json();
        })
        .then((comments) => { 
          this.setState({ comments:comments }); 
        });
  }
    handleClickAdd(event){
      event.preventDefault();
      let found = (event.target.parentElement.value);
      let test =  this.state.comments.find(comment=>comment._id===found);
      test.upvotes +=1;
      this.setState({
       comments:[...this.state.comments]
      });
      fetch(`/api/comments/${found}`)
      };


  handleSubmit(event){
    event.preventDefault();
    event.target.reset();
    let userComment=this.state.userComment;
    fetch('/api/comments/',{method:'post' ,headers: {'Content-Type':'application/json'},
    body:JSON.stringify({
      comment:userComment
    })})
    .then(()=>{
      fetch('/api/comments')
        .then(response => {
          return response.json();
        })
        .then((comments) => { 
          this.setState({ comments:comments}); 
        });
    })
    .catch(err=>{
      console.log(err.code)
    })
  };

  handleChange(event){
    event.preventDefault()
    this.setState({
      userComment:event.target.value
    })
  };

  

    render(){
      const {classes} =this.props;
      return (
        <div className={classes.container}>
      <div className={classes.input}>
        <Typography variant='h5' style={{fontFamily:'Oswald'}}>Leave some feedback about the site</Typography>
        <form onSubmit={this.handleSubmit} className={classes.form} >
           <TextField
        className={classes.textField}
        label="FeedBack"
       
        name='newComment' value={this.state.newComment} onChange={this.handleChange} required
      />
      <br/>
           <Button variant="contained" type='submit' id='btn'>
           Submit
      </Button>
       </form>
       </div>
       <div>
         {this.state.comments.map(comment=>{
           return (
             <div key={comment._id} id='comments'>
               <Card className={classes.card}>
                  <CardContent >
                  <Typography style={{fontFamily:'Oswald'}}>{comment.comment}</Typography>
                  <br/>
                  <Typography style={{fontFamily:'Oswald'}}>Number of Votes: {comment.upvotes}</Typography>
                </CardContent>
                <CardActions>
                <Button value={comment._id} onClick={this.handleClickAdd} id='plusOne'>+</Button>
                </CardActions>
            </Card>
           </div>
           )
         })}
       </div>
       </div>
      )
    }
  
  }
  
  export default withStyles(styles)(VoteForm);