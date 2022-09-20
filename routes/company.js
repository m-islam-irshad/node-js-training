const express = require("express");

const companyController = require("../controller/company");
const addCompany = require("../middleware/addCompany");
const getCompany = require("../middleware/getCompany");

const router = express.Router();

// router.get("/allcompanies", checkAuth ,companyController.index);
router.get("/allcompanies", getCompany, companyController.index);
router.post("/add-companies", addCompany, companyController.AddCompany);

module.exports = router;
