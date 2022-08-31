const express = require("express");

const jobController = require("../controller/jobs");

const router = express.Router();

router.get("/alljobs", jobController.index);
router.post("/jobpost", jobController.AddJobs);

module.exports = router;
