const db = require('../models');
const Hospital = db.hospital;
const validiDation = (req,res,next)=>{
    if(!req.body.firstName){
        res.status(400).send({
            message : "Please, Enter firstName ! "
        });
        return;
    }
    if(!req.body.lastName){
        res.status(400).send({
            message : "Please, Enter lastName ! "
        });
        return;
    }
    if(req.body.phone.length != 10) {
        return res.status(400).send({message: `Invalid phone number  , check once !!!`});
    }
    if(!req.body.hospitalId){
        return res.status(400).send({message: `Invalid Hospital Id`});
    }
    if(req.body.hospitalId){
        Hospital.findByPk(req.body.hospitalId).then(hospitals=>{
            if(!hospitals){
                res.status(400).send({message: `Hospital Id is not present, Enter Valid Id`});
                return;
            }
            next();
        })
    }
}

module.exports = {
    valid : validiDation
}