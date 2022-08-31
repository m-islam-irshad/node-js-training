const express = require("express");

const companyController = require("../controller/company");

const router = express.Router();

router.get("/allcompanies", companyController.index);
router.post("/add-companies", companyController.AddCompany);

module.exports = router;