var db = require("../models")
module.exports = {
    
    
    async index(req, res, next){

        let data = await db.User.findOne({
            where: {type: "admin"}
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