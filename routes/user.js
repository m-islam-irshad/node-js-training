const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.get("/alluser", userController.index);
router.post("/adduser", userController.AddUser);

module.exports = router;



