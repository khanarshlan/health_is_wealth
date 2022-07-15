const controller = require('../controllers/user_C');
const isDuplicate = require('../middlewares/duplicateCheck');
const validFrom = require('../middlewares/validation_4_user');
module.exports = (app)=>{
    app.post('/healthiswealth/a7/users/signup',[validFrom.valid,isDuplicate.user,isDuplicate.email],controller.signup);
    app.post('/healthiswealth/a7/users/signin',controller.signin);
}