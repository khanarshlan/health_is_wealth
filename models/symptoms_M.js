module.exports = (sequelize, Sequelize)=>{
    const Symptom = sequelize.define('symptoms',{
        symptomName : {
            type : Sequelize.STRING
        },
        symptomDate : {
            type : Sequelize.STRING
        }
    });
    return Symptom;
}