const db = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const data = await db.Company.findAll({
        include: [{ model: db.Job }]
      });
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).send("Data Not Find");
    }
  },

  AddCompany(req, res) {
    const company = {
      companyName: req.body.companyName,
      address: req.body.address,
      aboutCompany: req.body.aboutCompany,
      userId: req.body.userId
    };
    console.log("Here is the body....", company);
    db.Company.create(company).then((data) => { res.status(200).send(data); })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  },
};
