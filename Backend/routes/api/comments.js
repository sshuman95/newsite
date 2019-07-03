const Comment = require("../../commentsModel");

module.exports = app => {
	app.get("/comment", (req, res) => {
		Comment.find()
			.sort({ upvotes: -1 })
			.then(comments => {
				res.json(comments);
			});
	});
	app.get("/comment/:id", function(req, res) {
		Comment.update({ _id: req.params.id }, { $inc: { upvotes: 1 } }, function(
			err,
			count
		) {
			res.send();
		});
	});
	app.post("/comment", (req, res) => {
		const newComment = new Comment({
			comment: req.body.comment
		});
		newComment.save().then(comment => res.json(comment));
		res.redirect("back");
	});
};

/*router.put('/:id',(req,res,next)=>{
    let id = req.params.id;
    Comment.findOne({_id:id, function(err,foundObject){
        if(err){
            console.log(err);
            res.status(500).send()
        }else{
            if(!foundObject){
                res.status(404).send();
            } else{
                if(req.body.upvotes){
                    foundObject.upvotes = req.body.upvotes;
                }
                foundObject.save(function(err, updatedObject){
                    if(err){
                        console.log(err);
                        res.status(500)
                    } else {
                        res.send(updatedObject)
                    }
                })
            }
        }
    }})
})*/
