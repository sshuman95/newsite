const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const comments = require('./routes/api/comments');
const emails = require('./routes/api/email');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*let mongo_uri = 'mongodb+srv://Buster:Upstreambjj@cluster0-cwzms.mongodb.net/test?retryWrites=true&w=majority'

mongoose
.connect(mongo_uri,{ useNewUrlParser: true })
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Buster:Upstreambjj@cluster0-cwzms.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use('/api/comments',comments)
app.use('/api/email',emails)

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('/build'));
    app.get('*', (request, response) => {
        response.sendFile(path.join('newsite', '/build', 'index.html'));
    });
}

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`Server started on port ${port}`));




