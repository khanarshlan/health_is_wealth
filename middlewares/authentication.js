const db = require('../models');
const jwt = db.jwt;
const Key = db.KEY;
const User = db.user;
// Check user is putting accessToken or not Then check Token is valid or not
const accessToken = (req,res,next) =>{
    const headers = req.headers['x-access-token'];
    if(!headers){
        res.status(201).send({
            message : "Enter accessToken !"
        });
        return;
    }
    // checking is this token is valid 
    if(headers){
        jwt.verify(headers,Key,(err,decodeToken)=>{
            if(err){
                res.status(401).send({
                    message : "accessToken is not valid, Please try another !"
                });
                return;
            }
            req.userId = decodeToken.id;
            next();
        });
    }
}

const isAdmin = (req,res,next)=>{

    User.findByPk(req.userId).then(users=>{

        users.getRoles().then(roles=>{
            for(let i=0; i<roles.length; i++){
                if(roles[i].role == 'admin'){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message : "Sorry ,Only Hospital Admin allow !"
            })
            return;
        })
    }).catch(err=>{
        console.log(err);
        res.status(403).send({
            message : "Oops Error while checking Roles !"
        })
    })
}

module.exports = {

    auth : accessToken,
    admin : isAdmin

}