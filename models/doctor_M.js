module.exports = (sequelize, Sequelize)=>{
    const Doctor = sequelize.define('doctors',{
        firstName : {
            type : Sequelize.STRING
        },
        lastName : {
            type : Sequelize.STRING
        },
        phone : {
            type : Sequelize.STRING
        }
    });
    return Doctor;
}


// we use hospital name with the help of relationship