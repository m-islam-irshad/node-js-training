const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
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
  },

  async SignUp(req, res) {
    const {
      firstName, lastName, email, phoneNumber, type, password
    } = req.body;
    // Validate the Input
    console.log(password, email);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const emailExist = await db.User.findOne({
      where: { email }
    });

    if (emailExist) {
      return res.status(400).json({
        errors: [
          { msg: "This User already exist" }
        ]
      });
    }
    // it will take the first parameter is password and the second parameter is how many character will be added in your password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword, "This is our hashpassowrd");

    await db.User.create({
      firstName, lastName, email, phoneNumber, type, password: hashedPassword
    });
    // token have the 3 part first one is header it have the json information 2 type of information, ya kiss type ka token ha and and the second is algorathem which algorethem is used for segnature. (HS256) HMAC SHA 256 (hashed message authentication code), RSA etc.
    // 2nd part is payload: it's claim based data. user information, is main hm apni seceret information ni dalyn gy
    // 3rd part is signature:
    // in token first parameter will be the Data/payload and the second parameter will be the self generate key/Verify Signature or Seceret code and the third parameter is object is when it'll be expired // is main hm ny algorathem ni btaya k wo kon sa use kry
    const token = await JWT.sign({
      email
    }, "alkajs786sdjfh34kjh34", {
      expiresIn: 3600000
    });
    res.json({
      token
    });
    // when token is created then blow line is commented
    // res.send("Validation Past")

    // post the request and then copy the token and check on the website
  },
};
