const express = require('express');
const router = express.Router();

const Comment = require('../../commentsModel');

router.get('/',(req,res)=>{
    Comment.find()
    .sort({upvotes:-1})
    .then(comments =>{
        res.json(comments)
    })
});

router.get('/:id', function(req, res) {
    Comment.update({_id: req.params.id}, {$inc: {upvotes: 1}}, function(err, count) {
        res.send();
    });
});

router.post('/',(req,res)=>{
   const newComment = new Comment({
       comment: req.body.comment
   });
   newComment.save().then(comment=>res.json(comment));
});




module.exports = router;

