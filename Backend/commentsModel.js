const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = Comment = mongoose.model('Comment',CommentSchema)