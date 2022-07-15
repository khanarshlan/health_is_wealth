const express = require('express');
// Express give lots of library to make our project easy
const app = express();

const bodyParser = require('body-parser');
// Here body-parser  convert data to JSON to JS Obj
app.use(bodyParser.json());

const db = require('./models');
// Sequelize talk to Data-Base and create tables
db.sequelize.sync({force:true}).then(()=>{
    createRoles();
    console.log(" table is created on database ");
}).catch(err=>{
    console.log("Error while Creating database");
});
// Create Roles 
const Role = db.role;
function createRoles(){
    Role.create({
        id : 1,
        role : 'admin'
    });
    Role.create({
        id : 2,
        role : 'patient'
    });
}
// Here i am requiring all API 
require('./routes/user_API')(app);
require('./routes/doctor_API')(app);
require('./routes/hospital_API')(app);
require('./routes/appointment_API')(app);
require('./routes/presciption_API')(app);
require('./routes/trackRecord_API')(app);
require('./routes/symptoms_API')(app);

// Here i am handling in which port this application run...
app.listen(1010,()=>{

    console.log("server is started...");

});