const db = require('../models');
const Doctor = db.doctor;
const validPres = (req,res,next) =>{
    if(!req.body.presciptionName){
        res.status(404).send({
            message : "Enter Presciption - Name"
        });
        return;
    }
    if(!req.body.amount || req.body.amount < 0 ){
        res.status(404).send({
            message : "Enter Valid Amount"
        });
        return;
    }
    if(!req.body.doctorId){
        res.status(404).send({
            message : " Please Enter doctorId "
        });
        return;
    }
    if(req.body.doctorId){
        Doctor.findByPk(req.body.doctorId).then(doctors=>{
            if(!doctors){
                res.status(404).send({
                    message : " doctorId is not valid, please enter valid Id"
                });
                return;
            }
            next();
        })
    }
}
module.exports = {
    valid : validPres
}