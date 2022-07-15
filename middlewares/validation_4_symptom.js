
const validSymptoms = (req, res, next)=>{
    if(!req.body.symptomName){
        res.status(404).send({
            message : "Please Enter Symptom Name"
        });
        return;
    }
    if(!req.body.symptomDate){
        res.status(404).send({
            message : "Please Enter How Old Your Symptoms"
        });
        return;
    }
    next();
}


module.exports = {
    valid : validSymptoms
};