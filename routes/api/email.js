const express = require('express');
const router = express.Router();

const Email = require('../../emailModel');


router.post('/',(req,res)=>{
    const newEmail = new Email({
        name: req.body.name,
        email:req.body.email,
        message:req.body.message
    });
    newEmail.save().then(comment=>res.json(comment));
    res.redirect('back');
 });


module.exports = router