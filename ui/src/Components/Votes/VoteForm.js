import React from 'react';
import './Vote.css';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

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
      return (
        <div className='final'>
      <div>
        <Typography variant='h5' id='feedback'>Leave some feedback about the site</Typography>
        <form onSubmit={this.handleSubmit} id='form'>
           <TextField
        id="standard-dense"
        label="FeedBack"
        name='newComment' value={this.state.newComment} onChange={this.handleChange} required
      />
           <Button variant="contained" type='submit' id='btn'>
           Submit
      </Button>
       </form>
       </div>
       <div>
         {this.state.comments.map(comment=>{
           return (
             <div key={comment._id} id='comments'>
               <Card id='card'>
                  <CardContent >
                  <Typography>{comment.comment}</Typography>
                  <br/>
                  <Typography>Number of Votes: {comment.upvotes}</Typography>
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
  
  export default VoteForm;