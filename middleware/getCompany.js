const JWT = require("jsonwebtoken");
const db = require("../models");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(400).json({
      errors: [
        { msg: "No token found" }
      ]
    });
  }
  try {
    const user = await JWT.verify(token, "alkajs786sdjfh34kjh34");
    const data = await db.User.findOne({
      where: { email: user.email }
    });
    console.log(data);
    if (data.type === "admin") {
      next();
    } else {
      return res.status(400).json({
        errors: [
          { msg: "You are not Admin" }
        ]
      });
    }
  } catch (error) {
    return res.status(400).json({
      errors: [
        { msg: "Invalid Token" }
      ]
    });
  }
};
