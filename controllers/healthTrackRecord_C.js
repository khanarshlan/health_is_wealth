const db = require('../models');
const HealthTrack = db.heathTrack;

// handler for Create
exports.create = (req, res)=>{

    const health = {
        visitPurpose : req.body.visitPurpose,
        height : req.body.height,
        weight : req.body.weight,
        userId : req.userId         // take req.userId from when user is login means user have token 
                                    // and when we decode that token we get decodeToken id that is nothing but that is userId
    }

    HealthTrack.create(health).then(records=>{
        
        res.status(201).send(records);

    }).catch(err=>{
        res.status(500).send({
            message : "Error while creating HealthTrack"
        });
    });

}

// Handler for Find by Id
exports.find = (req,res) =>{
    const byId = req.params.id;
    
    HealthTrack.findByPk(byId).then(records=>{
        
        res.status(200).send(records);

    }).catch(err=>{
        res.status(500).send({
            message : " Oops Internal Error !"
        });
    });
}

// Handler for update
exports.update = (req,res) =>{
    const byId = req.params.id;
    const updateHealth = {
        visitPurpose : req.body.visitPurpose,
        height : req.body.height,
        weight : req.body.weight
    }

    HealthTrack.update(updateHealth,{where : {id :byId}}).then(()=>{
        
        res.status(201).send({
            message : "Records Updated"
        });

    }).catch(err=>{
        res.status(500).send({
            message : " Error while updating "
        });
    });
}

// Handler for delete 
exports.delete = (req, res)=>{
    const byId = req.params.id;
    HealthTrack.destroy({where : { id : byId}}).then(()=>{
        
        res.status(201).send({
            message : " Records Deleted "
        });

    }).catch(err=>{
        res.status(500).send({
            message : "Error while delete record"
        });
    });
}