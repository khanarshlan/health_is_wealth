const invalidHospital = (req,res,next)=>{
    if(!req.body.hospitalName){
        res.status(404).send({
            message : "Please Enter Hospital Name"
        })
        return;
    }
    if(!req.body.address){
        res.status(404).send({
            message : "Please Enter Address"
        })
        return;
    }
    if(!req.body.city){
        res.status(404).send({
            message : "Please Enter City"
        })
        return;
    }
    if(!req.body.state){
        res.status(404).send({
            message : "Please Enter State"
        })
        return;
    }
    if(!req.body.zipCode){
        res.status(404).send({
            message : "Please Enter zidCode"
        })
        return;
    }
    if(!req.body.phone){
        res.status(404).send({
            message : "Please Enter Phone"
        })
        return;
    }
    next();
}

module.exports = {
    valid : invalidHospital
}