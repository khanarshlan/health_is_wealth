module.exports = (sequelize, Sequelize)=>{
    const DataTypes = Sequelize.DataTypes;
    const HealthTrack = sequelize.define('healthtracks',{

        visitPurpose : {
            type : Sequelize.STRING
        },
        height : {
            type : Sequelize.INTEGER
        },
        weight : {
            type : Sequelize.INTEGER
        },
        date : {
            type : DataTypes.DATE,
            defaultValue : Date.now
        }

    });
    return HealthTrack;
}