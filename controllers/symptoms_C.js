const db = require('../models');
const Symptom = db.symptom;
// Handler for create symptoms
exports.create = (req, res)=>{
    const symptomsBody = {
        symptomName : req.body.symptomName,
        symptomDate : req.body.symptomDate
    };

    Symptom.create(symptomsBody).then(symptoms=>{
        res.status(201).send(symptoms);
    }).catch(err=>{
        res.status(500).send({
            message : "Oops internal problems"
        });
    });
}

// Handler for find symptoms
exports.find = (req, res)=>{
    const byId = req.params.id;

    Symptom.findByPk(byId).then(symptoms=>{
        res.status(200).send(symptoms);
    }).catch(err=>{
        res.status(500).send({
            message : "Oops Error ! while finding "
        });
    });
}

// Handler for update symptoms
exports.update = (req, res)=>{
    const byId = req.params.id;
    const updateSymptoms = {
        symptomName : req.body.symptomName,
        symptomDate : req.body.symptomDate
    };
    Symptom.update(updateSymptoms,{
        where : {id : byId},
        returning : true

    }).then(()=>{
        res.status(200).send({
            message : "Updated"
        });

    }).catch(err=>{
        res.status(500).send({
            message : "Oops Error ! while updating data "
        });
    });
}

// Handler for delete symptoms
exports.delete = (req, res)=>{
    const byId = req.params.id;

    Symptom.destroy({
        where : {id : byId}
    }).then(()=>{
        res.status(200).send({
            message : "Deleted"
        });
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error happained ! "
        });
    });
}