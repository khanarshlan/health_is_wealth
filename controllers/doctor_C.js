const db = require('../models');
const Doctor = db.doctor;
// Handler for create Doctor
exports.create = (req,res) =>{
    const doctorBody = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phone : req.body.phone,
        hospitalId : req.body.hospitalId
    }
    Doctor.create(doctorBody).then(doctors=>{
        res.status(201).send(doctors);

    }).catch(err=>{
        res.status(500).send({
            message : "Oops Internal Error !"
        });
    });
}

// Handler for find All Doctors or find by name( using query params ) 
// 1010/healthiswealth/a7/doctors?name = ajay   <- like this

exports.find = (req,res)=>{
    const query = req.query.firstName;
    let promis;
    if(query){
        promis = Doctor.findAll({where : { firstName : query }});
    }
    else{
        promis = Doctor.findAll();
    }
    promis.then(doctors=>{
        res.status(200).send(doctors);
    }).catch(err=>{
        res.status(500).send({
            message : " 404 not found "
        });
    });
}


// Handler for Update 

exports.update = (req,res) =>{
    const byId = req.params.id;
    const newBody = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phone : req.body.phone
    }

    Doctor.update(newBody,{where : {
        id : byId
    }}).then(()=>{
        res.status(201).send({
            message : "Profile Updated"
        });
    }).catch(err=>{
        res.status(500).send({
            message : " something is wrong "
        });
    });
}

// Handler for Delete 

exports.delete = (req,res)=>{
    const byId = req.params.id;
    Doctor.destroy({where : {
        id : byId
    }}).then(()=>{
        res.status(201).send({
            message : " Profile Deleted "
        });
    }).catch(err=>{
        res.status(500).send({
            message : " something is wrong "
        });
    });
}