const express = require("express");
const AddJobs = require("../middleware/addJobs")

const jobController = require("../controller/jobs");

const router = express.Router();

router.get("/alljobs", jobController.index);
router.post("/jobpost", AddJobs.index ,jobController.AddJobs);

module.exports = router;
