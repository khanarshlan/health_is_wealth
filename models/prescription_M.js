module.exports = (sequelize, Sequelize)=>{
    const Presciption = sequelize.define('presciptions',{
        presciptionName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        amount : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        date : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return Presciption;
}