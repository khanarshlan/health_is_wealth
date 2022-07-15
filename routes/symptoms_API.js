const controller = require('../controllers/symptoms_C');
const validation = require('../middlewares/validation_4_symptom');

module.exports = (app)=>{

    app.post('/healthiswealth/a7/symptoms',[validation.valid],controller.create);
    app.get('/healthiswealth/a7/symptoms/:id',controller.find);
    app.put('/healthiswealth/a7/symptoms/:id',[validation.valid],controller.update);
    app.delete('/healthiswealth/a7/symptoms/:id',controller.delete);

}