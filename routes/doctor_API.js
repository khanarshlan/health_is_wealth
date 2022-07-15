const controller = require('../controllers/doctor_C');
const validation = require('../middlewares/validation_4_doctor');
const auth = require('../middlewares/authentication');
module.exports = (app)=>{
    app.post('/healthiswealth/a7/doctor/profiles',[validation.valid,auth.auth,auth.admin],controller.create);
    app.get('/healthiswealth/a7/doctor/profiles',controller.find);
    app.put('/healthiswealth/a7/doctor/profiles/:id',[validation.valid,auth.auth,auth.admin],controller.update);
    app.delete('/healthiswealth/a7/doctor/profiles/:id',[validation.valid,auth.auth,auth.admin],controller.delete);
}