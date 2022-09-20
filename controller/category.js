const db = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const data = await db.Category.findAll({
        include: [{ model: db.Job, as: "JobCategories" }]
      });

      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(404).send("Data Not Find");
    }
  },
  AddCategory(req, res) {
    const category = {
      name: req.body.name
    };
    db.Category.create(category).then((data) => { res.status(200).send(data); })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  },
};
