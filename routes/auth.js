const express = require("express");
const { check, validationResult } = require("express-validator");

const AllUser = require("../middleware/allUsers");

const signupController = require("../controller/signup");
const loginController = require("../controller/login");

const router = express.Router();

router.post("/signup", [
  // in check method first parameter is that which we want to check and the second parameter will be the message which we want to display
  check("email", "Please Provide the Valid Email").isEmail(),
  check("password", "Please provide the password that is greater than 6 character").isLength({
    min: 6
  })
], signupController.SignUp);

router.get("/signupallusers", AllUser, signupController.index);

router.post("/login", loginController.LogIn);

module.exports = router;
