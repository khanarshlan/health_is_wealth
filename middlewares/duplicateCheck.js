const db = require('../models');
const User = db.user;

// Handler for duplicate user name
const duplicateUserName = (req,res,next)=>{
    if(req.body.username){
        User.findOne({where : {username : req.body.username}}).then(users=>{
            if(users){
                res.status(400).send({
                    message : ` username < ${users.username} > already exist`
                });
                return;
            }
            next();
        });
    }
}

// Handler for duplicate email id
const duplicateEmail = (req,res,next)=>{
    if(req.body.email){
        User.findOne({where : {email : req.body.email}}).then(mail=>{
            if(mail){
                res.status(400).send({
                    message : `email < ${mail.email} > already exist`
                });
                return;
            }
            next();
        })
    }
}
module.exports = {
    user  : duplicateUserName,
    email : duplicateEmail
}
