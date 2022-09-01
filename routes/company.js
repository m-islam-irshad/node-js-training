const express = require("express");

const companyController = require("../controller/company");
const addCompany = require("../middleware/addCompany");
const checkAuth = require("../middleware/checkAuth");
const getCompany = require("../middleware/getCompany")
const router = express.Router();

router.get("/allcompanies", checkAuth ,companyController.index);
// router.get("/allcompanies", getCompany.index, companyController.index);
router.post("/add-companies", addCompany.index ,companyController.AddCompany);

module.exports = router;