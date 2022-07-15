const controller = require('../controllers/hospital_C');
const validation = require('../middlewares/validation_4_hospital');
const auth = require('../middlewares/authentication');

module.exports = (app) =>{

    app.post('/healthiswealth/a7/hospitals',[validation.valid,auth.auth,auth.admin],controller.create);
    app.get('/healthiswealth/a7/hospitals',controller.find);
    app.put('/healthiswealth/a7/hospitals/:id',[validation.valid,auth.auth,auth.admin],controller.update);
    app.delete('/healthiswealth/a7/hospitals/:id',[validation.valid,auth.auth,auth.admin],controller.delete);

}