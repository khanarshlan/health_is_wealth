const db = require('../models');
const User = db.user;
const jwt = db.jwt;
const KEY = db.KEY;
const bcrypt = db.bcrypt;
const Role = db.role;
const Op = db.Sequelize.Op;

// handler for sign up 
exports.signup = (req,res) =>{
    const userBody = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        username : req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8),  // hashing password
        phone : req.body.phone,
        role : req.body.role
    }
    User.create(userBody).then(users=>{
        if(req.body.role){
            Role.findOne({where : {
                role : {
                    [Op.or] : req.body.role
                }
            }}).then(role=>{
                users.setRoles(role).then(()=>{
                    res.status(201).send({
                        message : users.username + " Registration SuccessFul"
                    })
                })
            })
        }
        else{
            users.setRoles([2]).then(()=>{
                res.status(201).send({
                    message : users.username + " Registration SuccessFul"
                })
            })
        }
    }).catch(err=>{
        res.status(201).send({
            message : "Internal Error"
        });
    });
};

//  handler for  sign in
exports.signin = (req,res)=>{
   const byemail = req.body.email;
   User.findOne({where:{email : byemail}}).then(users=>{
       if(!users){
           res.status(404).send({
               message : "email not exist"
           })
           return;
       }
       var pass = bcrypt.compareSync(req.body.password,users.password);
       if(!pass){
            res.status(404).send({
                message : "Enter valid password"
            })
            return;
       }
       var token = jwt.sign({id : users.id},KEY,{expiresIn:200});
       var auth = [];
        users.getRoles().then(roles=>{
            for(let i=0; i<roles.length; i++){
                auth.push(" "+roles[i].role);
            }
            res.status(200).send({
                message : `Welcome , ${users.username} `,
                roles : auth,
                accessToken : token
            })
        })
       }).catch(err=>{
        res.status(201).send({
            message : "Internal Error"
        });
    });
}