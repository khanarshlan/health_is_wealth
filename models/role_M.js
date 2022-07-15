module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define('roles',{
        id : {
            type : Sequelize.INTEGER,
            allowNull : false,
            primaryKey : true
        },
        role : {
            type : Sequelize.STRING
        }
    });
    return Role;
}