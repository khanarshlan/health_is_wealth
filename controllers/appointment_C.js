const db = require('../models');
const Appointments = db.appointment;
const User = db.user;
const Doctor = db.doctor;
const Hospital = db.hospital;

// Handler for create
exports.create = (req,res)=>{
    const appoBody = {
        userId : req.body.userId,
        doctorId : req.body.doctorId,
        date : req.body.date,
        time : req.body.time
    };

    Appointments.create(appoBody).then(appointments=>{

        res.status(201).send(appointments);
    }).catch(err=>{
        console.log(err);
        res.status(500).send({
            message : "Internal Error will happained"
        });
    })
}

// Handler for find ID
exports.find = (req, res)=>{
    const byId = req.params.id;
    Appointments.findByPk(byId).then(data=>{
        if(!data){
            res.status(404).send({
                message : "no data exits, please check your id"
            })
            return;
        }
        var userName;
        var doctorName;
        User.findByPk(data.userId).then(users=>{

            userName = users.firstName+" "+users.lastName;
            
            Doctor.findByPk(data.doctorId).then(doctors=>{
                doctorName = doctors.firstName+" "+doctors.lastName;

                res.status(200).send({
                    message : "Appointments Details",
                    UserName : userName,
                    DoctorName : `Dr. ${doctorName}`,
                    Date : data.date,
                    Time : data.time
                });
                //var hosId = doctors.hospitalId
                
                // Hospital.findByPk(hosId).then(hospitals=>{
                //     res.status(200).send({
                //         message : "Appointments",
                //         UserName : userName,
                //         DoctorName : `Dr. ${doctorName}`,
                //         Hospital : hospitals.hospitalName,
                //         City : hospitals.city,
                //         Date : data.date,
                //         Time : data.time
                //     });
                // })
            })
        })  
    }).catch(err =>{
        console.log(err);
        res.status(500).send({
            message : "Sorry Internal Error !"
        })
    })
}

// Handler for query param
exports.findByQuery = (req,res) =>{
    const byQuery = req.query.date;
    if(byQuery){
        Appointments.findAll({where : {
            date : byQuery
        }}).then(appointments=>{

            res.status(200).send(appointments)
        }).catch(err =>{
            console.log(err);
            res.status(500).send({
                message : "Sorry Internal Error !"
            })
        })
    }else{
        Appointments.findAll().then(appointments=>{
            res.status(200).send(appointments)
        }).catch(err =>{
            console.log(err);
            res.status(500).send({
                message : "Oops Internal error !"
            })
        })
    }
}

// Handler for update
exports.update = (req,res) =>{
    const byId = req.params.id;
    const DateTime = {
        date : req.body.date,
        time : req.body.time
    }
    Appointments.update(DateTime,{where : {
        id : byId
    }}).then(()=>{
        res.status(202).send({
            message : "Appointment Updated"
        });
    }).catch(err=>{
        res.status(500).send({
            message : "Updating Error !"
        });
    });
}

// Handler for delete
exports.delete = (req,res)=>{
    const byId = req.params.id;
    Appointments.destroy({where : {
        id : byId
    }}).then(()=>{
        res.status(202).send({
            message : "Appointment Deleted"
        });
    }).catch(err=>{
        res.status(500).send({
            message : "Error while deleting data !"
        });
    });
}