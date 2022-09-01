
var db = require('../models');
const { check, validationResult  } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");


module.exports = {
    async index(req, res) {
        try {
            const data = await db.Authentication.findAll();
            res.status(201).json(data);
          } catch (err) {
            console.log(err);
            res.status(400).send("Data Not Find");
          }
          
    },

    async LogIn(req, res) {
    
        const {password, email} = req.body;
        
        let userExist = await db.Authentication.findOne({
            where: {email: email}
        });
        if(!userExist){
            return res.status(400).json({
                 "errors":[
                     {"msg": "Invalid Credentials"}
                 ]
             })
         };
    // it take 2 parameter first one is userprovide password and the second one is the hashedpassword   
    let isMatch = bcrypt.compare(password, userExist.password);
         
         if(!isMatch){
            return res.status(400).json({
                 "errors":[
                     {"msg": "Invalid Credentials"}
                 ]
             })
         };
         
         const token = await JWT.sign({
            email
        }, "alkajs786sdjfh34kjh34", {
            expiresIn: 3600000
        })
        res.json({
            token
        })

  },
  };
  