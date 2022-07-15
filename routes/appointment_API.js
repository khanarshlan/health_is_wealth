const controller = require('../controllers/appointment_C');
const validation = require('../middlewares/validation_4_Appointment');
const validUser = require('../middlewares/authentication');

module.exports = (app)=>{

    app.post('/healthiswealth/a7/appointments',[validUser.auth,validation.valid],controller.create);
    app.get('/healthiswealth/a7/appointments/:id',[validUser.auth],controller.find);
    app.get('/healthiswealth/a7/appointments',[validUser.auth],controller.findByQuery);
    app.put('/healthiswealth/a7/appointments/:id',[validUser.auth,validation.valid],controller.update);
    
}