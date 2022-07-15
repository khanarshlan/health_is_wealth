const controller = require('../controllers/healthTrackRecord_C');
const validUser = require('../middlewares/authentication');
const validRecord = require('../middlewares/validation_4_healthRecord');

module.exports = (app) =>{

    app.post('/healthiswealth/a7/health-track-records',[validUser.auth,validRecord.valid,validRecord.dupli],controller.create);
    app.put('/healthiswealth/a7/health-track-records/:id',[validUser.auth],controller.update);
    app.get('/healthiswealth/a7/health-track-records/:id',[validUser.auth],controller.find);
    app.delete('/healthiswealth/a7/health-track-records/:id',[validUser.auth],controller.delete);

}