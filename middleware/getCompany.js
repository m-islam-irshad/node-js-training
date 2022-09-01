var db = require("../models")
module.exports = {
    
    
    async index(req, res, next){

        let data = await db.User.findOne({
            where: {type: "admins"}
        })
            if(!data){
                return res.status(400).json({
                     "errors":[
                         {"msg": "You are not Admin"}
                     ]
                 })
             }
             else{
                next();
             }
          
          
             
        }  
}