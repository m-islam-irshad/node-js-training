const db = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const data = await db.User.findAll({
        include: [{ model: db.Company, as: "companies" }]
      });
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).send("Data Not Find");
    }
  }
};
