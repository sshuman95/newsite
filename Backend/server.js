const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const comments = require('./routes/api/comments');
const emails = require('./routes/api/email');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose
.connect('mongodb+srv://Buster:Upstreambjj@cluster0-cwzms.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));

app.use('/api/comments',comments)
app.use('/api/email',emails)

if (process.env.NODE_ENV === "production"){
    // express will serve production assets ( main.js, main.css )
    // look inside client/build to serve assets
    app.use(express.static('Backend/build'));

    // express will serve index.html if it doesnt recognize route
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`Server started on port ${port}`));




