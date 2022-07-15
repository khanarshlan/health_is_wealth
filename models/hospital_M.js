module.exports = (sequelize, Sequelize)=>{
    const Hospital = sequelize.define('hospitals',{
        hospitalName : {
            type : Sequelize.STRING
        },
        address : {
            type : Sequelize.STRING
        },
        city : {
            type : Sequelize.STRING
        },
        state : {
            type : Sequelize.STRING
        },
        zipCode : {
            type : Sequelize.INTEGER
        },
        phone : {
            type : Sequelize.STRING
        }
    });
    return Hospital;
}