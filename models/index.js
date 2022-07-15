const config = require('../configs/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,{
        host : config.HOST,
        dialect : config.dialect
    }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require('./user_M')(sequelize, Sequelize);
db.role = require('./role_M')(sequelize, Sequelize);
db.hospital = require('./hospital_M')(sequelize, Sequelize);
db.doctor = require('./doctor_M')(sequelize, Sequelize);
db.KEY = "secrate";
db.jwt = require('jsonwebtoken');
db.bcrypt = require('bcryptjs');
db.appointment = require('./appointments_M')(sequelize, Sequelize);
db.presciption = require('./prescription_M')(sequelize, Sequelize);
db.heathTrack = require('./healthTrackRecord_M')(sequelize, Sequelize);
db.symptom = require('./symptoms_M')(sequelize, Sequelize);

// Reletionship between tables
// A Hospital has Many Doctors
db.hospital.hasMany(db.doctor);

// A Doctor has Many Presciption
db.doctor.hasMany(db.presciption);

// A user has One Heath Track Record
db.user.hasOne(db.heathTrack);

// A user has Many Roles and A role has Many Users
db.user.belongsToMany(db.role,{
    through : 'user_role',
    foreignKey : 'userId',
    otherKey : 'roleId'
});
db.role.belongsToMany(db.user,{
    through : 'user_role',
    foreignKey : 'roleId',
    otherKey : 'userId'
});

module.exports = db;