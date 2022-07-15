const db = require('../models');
const User = db.user;
const Doctor = db.doctor;
const valid = (req,res,next) =>{
    if(!req.body.userId){
        res.status(404).send({
            message : "Enter userId "
        });
        return;
    }
    if(!req.body.doctorId){
        res.status(404).send({
            message : "Enter doctorId "
        });
        return;
    }
    if(!req.body.date){
        res.status(404).send({
            message : "Please Enter Date "
        });
        return;
    }
    
    if(req.body.userId){
        User.findByPk(req.body.userId).then(users=>{
            if(!users){
                res.status(404).send({
                    message : "The userId is not valid !"
                });
                return;
            }
            if(req.body.doctorId){
                Doctor.findByPk(req.body.doctorId).then(doctors=>{
                    if(!doctors){
                        res.status(404).send({
                            message : "The doctorId is not Valid !"
                        });
                        return; 
                    }
                    next();
                })
            }
        })
    }
}

module.exports = {
    valid : valid
}