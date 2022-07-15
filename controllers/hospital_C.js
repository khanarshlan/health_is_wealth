const db = require('../models');
const Hospital = db.hospital;

// Handler for create 
exports.create = (req,res)=>{
    const hBody = {
        hospitalName : req.body.hospitalName,
        address : req.body.address,
        city : req.body.city,
        state : req.body.state,
        zipCode : req.body.zipCode,
        phone : req.body.phone
    };
    Hospital.create(hBody).then(hospitals=>{
        res.status(201).send(hospitals);
    }).catch(err=>{
        res.status(201).send({
            message : "Oops Internal Error !"
        });
    });
}

// Handler for find All hospitals and find by name (using Query)
exports.find = (req,res)=>{
    let promis;

    if(req.query.hospitalName){
        promis = Hospital.findAll({where:{
            hospitalName : req.query.hospitalName
        }});
    }
    else if(req.query.city){
        promis = Hospital.findAll({where:{
            city : req.query.city
        }});
    }
    else if(req.query.zipCode){
        promis = Hospital.findAll({where:{
            zipCode : req.query.zipCode
        }});
    }
    else{
        promis = Hospital.findAll();
    }
    promis.then(hospitals=>{
        res.status(201).send(hospitals);
    }).catch(err=>{
        res.status(201).send({
            message : "Oops Internal Error !"
        });
    });
}

// Handler for delete
exports.update = (req,res)=>{
    const byId = req.params.id;
    const newHosBody = {
        hospitalName : req.body.hospitalName,
        address : req.body.address,
        city : req.body.city,
        state : req.body.state,
        zipCode : req.body.zipCode,
        phone : req.body.phone
    };
    Hospital.update(newHosBody,{
                        where : {
                            id : byId
                        },
                        returning:true,}).then(hospitals=>{
        res.status(201).send({
            message : "Hospital Data Updated"
        });
    }).catch(err=>{
        res.status(500).send({
            message : "Error while updating hospital"
        });
    });
}

// Handler for Delete 

exports.delete = (req,res) =>{
    const byId = req.params.id;

    Hospital.destroy({where : {
        id : byId
    }}).then(()=>{
        res.status(201).send({
            message : "Hospital Data Deleted"
        });
    }).catch(err=>{
        res.status(500).send({
            message : " something is wrong "
        });
    });
}