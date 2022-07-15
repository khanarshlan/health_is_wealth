const db = require('../models');
const Presciption = db.presciption;
const Doctors = db.doctor;

// Handler for create 
exports.create = (req, res)=>{

    const preBody = {
        presciptionName : req.body.presciptionName,
        amount : req.body.amount,
        date : req.body.date,
        doctorId : req.body.doctorId
    }

    Presciption.create(preBody).then(presciptios=>{
        res.status(201).send(presciptios)
    }).catch(err=>{
        res.status(500).send({
            message : "Internal Error !"
        });
    });

}
// Handler for find by Id

exports.find = (req,res)=>{
    const byId = req.params.id;
    Presciption.findByPk(byId).then(presciptios=>{
        res.status(200).send(presciptios)
    }).catch(err=>{
        res.status(500).send({
            message : "Internal Error !"
        });
    });
}

// Handler find using filter
exports.filter = (req,res)=>{
    const bydate = req.query.date;
    if(bydate){
        Presciption.findAll({where :{date : bydate}}).then(presciptios=>{
            res.status(200).send(presciptios)
        }).catch(err=>{
            res.status(500).send({
                message : "Internal Error !"
            });
        });
    }
    else{
        Presciption.findAll().then(presciptios=>{
            res.status(200).send(presciptios)
        }).catch(err=>{
            res.status(500).send({
                message : "Internal Error !"
            });
        });
    }
}

// handler for Update

exports.update = (req,res)=>{
    const byId = req.params.id;
    const updatedBody = {
        presciptionName : req.body.presciptionName,
        amount : req.body.amount,
        date : req.body.date,
        doctorId : req.body.doctorId
    }
    Presciption.update(updatedBody,{where : {
                                        id : byId
                                    },
                                    returning : true
    }).then(()=>{
        res.status(201).send({
            message : "Updated"
        })
    }).catch(err=>{
        res.status(500).send({
            message : "Internal Error !"
        });
    });
}

// Handler for Delete

exports.delete = (req,res) =>{
    const byId = req.params.id;
    Presciption.destroy({where : {id : byId}}).then(()=>{
        res.status(201).send({
            message : "Deleted.. "
        })
    }).catch(err=>{
        res.status(500).send({
            message : "Internal Error !"
        });
    });
}