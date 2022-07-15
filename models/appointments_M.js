module.exports = (sequelize, Sequelize)=>{
    const DataTypes = Sequelize.DataTypes;
    const Appointments = sequelize.define('appointments',{
        userId : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        doctorId : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        date : {
            type : Sequelize.STRING,
        },
        time : {
            type : Sequelize.STRING
        }
    });
    return Appointments;
}