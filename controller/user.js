
var db = require('../models');


module.exports = {
    async index(req, res) {


        try {
            const data = await db.User.findAll({
              include:[{model:db.Company, as: "companies"}]
            });
            res.status(201).json(data);
          } catch (err) {
            console.log(err);
            res.status(400).send("Data Not Find");
          }
          
    },

    AddUser(req, res) {
    //   req={
    //     firstName: "Muhammad",
    //     lastName:"Qasim",
    //     email: "muhammadbinqasim@gmail.com",
    //     phoneNumber: "03002323223",
    //     type: "seeker"
    //  };
      const user = {
        firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          type: req.body.type
    };
    console.log("Here is the body....", user)
    db.User.create(user).then(data=>{res.status(200).send(data)})
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  },
  };
  