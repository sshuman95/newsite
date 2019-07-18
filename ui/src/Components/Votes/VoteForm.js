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
        comments: []
      }
      this.handleClickAdd=this.handleClickAdd.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount() {
      fetch('/api/comments')
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then((comments) => { 
          this.setState({ comments:comments }); 
        });
  }
    handleClickAdd(event){
      event.preventDefault();
     let found = (event.target.parentElement.value);
     console.log(found);
    let test =  this.state.comments.find(comment=>comment._id===found);
      test.upvotes +=1;
     this.setState({
       comments:[...this.state.comments]
     });
    fetch(`/api/comments/${found}`)
    };


    handleChange(event){
      event.preventDefault();
      this.setState({
        [event.target.name]:event.target.value
      })
     };

    render(){
      return (
        <div className='final'>
      <div>
        <h3>What Should I build next?</h3>
       <form action='/api/comments' method='post' id='form'>
       <TextField
        id="standard-dense"
        label="Comment"
        margin="dense"
        value={this.state.userComment}
        onChange={this.handleChange}
        name='userComment'
      />
           <button type='submit'>Submit</button>
       </form>
       </div>
       <div>
         {this.state.comments.map(comment=>{
           return (
             <div key={comment._id} id='comments'>
               <Card className='card'>
                  <CardContent>
                  <Typography>{comment.comment}</Typography>
                  <Typography>Number of Votes: {comment.upvotes}</Typography>
                </CardContent>
                <CardActions>
                <Button value={comment._id} onClick={this.handleClickAdd}>+</Button>
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