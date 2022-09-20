const express = require("express");

const categoryController = require("../controller/category");

const router = express.Router();

router.get("/allcategories", categoryController.index);
router.post("/addcategory", categoryController.AddCategory);

module.exports = router;
