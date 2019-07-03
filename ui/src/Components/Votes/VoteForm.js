import React from 'react';
import './Vote.css';

class VoteForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        comments: []
      }
      this.handleClickAdd=this.handleClickAdd.bind(this);
    }

    componentDidMount() {
      fetch('/api/comments')
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then((comments) => { 
          console.log(comments);
          this.setState({ comments:comments }); 
        });
  }
    handleClickAdd(event){
      event.preventDefault();
     let found = (event.target.parentElement.parentElement.firstChild.innerHTML);
     let test =  this.state.comments.find(comment=>comment._id===found);
      test.upvotes +=1;
     this.setState({
       comments:[...this.state.comments]
     });
     fetch(`/api/comments/${found}`)
    };
   

    render(){
      return (
        <div className='final'>
      <div>
        <h3>What Should I build next?</h3>
       <form action='/api/comments' method='post' id='form'>
           <label>Suggestion: </label>
           <textarea name='comment' required/>
           <button type='submit'>Submit</button>
       </form>
       </div>
       <div>
         {this.state.comments.map(comment=>{
           return (
             <div key={comment._id} id='comments'>
               <h1 style={{display:'none'}}>{comment._id}</h1>
           <h1>{comment.comment}</h1>
           <div id='button'>
           <h2>Number of Votes: {comment.upvotes}</h2>
           <h3 style={{color:'black'}} onClick={this.handleClickAdd}>+</h3>
           </div>
           </div>
           )
         })}
       </div>
       </div>
      )
    }
  
  }
  
  export default VoteForm;