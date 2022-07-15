const db = require('../models');
const HeathRecord = db.heathTrack;
const validRecord = (req, res, next)=>{

    if(!req.body.visitPurpose){
        res.status(404).send({
            message : "Please Enter Visiting Purpose !"
        });
        return;
    }
    if(!req.body.height){
        res.status(404).send({
            message : "Please enter your height !"
        });
        return;
    }
    if(!req.body.weight){
        res.status(404).send({
            message : "Please enter your weight !"
        });
        return;
    }
    next();

}
// User should only one Track Record not multiple
const duplicateRecord = (req, res, next) =>{

    if(req.userId){
        HeathRecord.findOne({
            where : {userId : req.userId}
        }).then(users=>{
            if(users){
                res.status(200).send({
                    message : "You have already Track records, Please Update that !"
                });
                return;
            }
            next();
        })
    }
}

module.exports = {
    valid : validRecord,
    dupli : duplicateRecord
}