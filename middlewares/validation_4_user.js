const validation = (req,res,next)=>{
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
    if(!req.body.username){
        res.status(400).send({
            message : "Please, Enter username ! "
        });
        return;
    }
    if(!req.body.email){
        res.status(400).send({
            message : "Please, Enter email ! "
        });
        return;
    }
    if(!req.body.password){
        res.status(400).send({
            message : "Please, Enter password ! "
        });
        return;
    }
    if(req.body.phone.length != 10) {
        return res.status(400).send({message: `Invalid phone number  , check once !!!`});
    }
    
    next();
}
module.exports={
    valid : validation
}