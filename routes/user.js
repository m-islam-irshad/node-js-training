const express = require("express");

const AllUser = require("../middleware/allUsers");

const userController = require("../controller/user");

const router = express.Router();

router.get("/alluser", AllUser, userController.index);

module.exports = router;
