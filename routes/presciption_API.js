const controller = require('../controllers/presciption_C');
const validPre = require('../middlewares/validation_4_presciption');

module.exports = (app)=>{

    app.post('/healthiswealth/a7/presciptions',[validPre.valid],controller.create);
    app.get('/healthiswealth/a7/presciptions/:id',controller.find);
    app.get('/healthiswealth/a7/presciptions',controller.filter);
    app.put('/healthiswealth/a7/presciptions/:id',controller.update);
    app.delete('/healthiswealth/a7/presciptions/:id',controller.delete);

}