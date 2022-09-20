const db = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const data = await db.Job.findAll();
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).send("Data Not Find");
    }
  },

  AddJobs(req, res) {
    const job = {
      title: req.body.title,
      salary: req.body.salary,
      location: req.body.location,
      description: req.body.description,
      userId: req.body.userId,
      companyId: req.body.companyId,
      categoryId: req.body.categoryId
    };
    console.log("Here is the body....", job);
    db.Job.create(job).then((data) => { res.status(200).send(data); })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  },
};
