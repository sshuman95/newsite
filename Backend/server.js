const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const comments = require('./routes/api/comments');
const emails = require('./routes/api/email');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose
.connect('mongodb+srv://Buster:Upstreambjj@cluster0-cwzms.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));

app.use('/api/comments',comments)
app.use('/api/email',emails)

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('newsite/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'app','build','index.html'))
    })
}

const port = process.env.port || 8080;

app.listen(port,()=>console.log(`Server started on port ${port}`));




