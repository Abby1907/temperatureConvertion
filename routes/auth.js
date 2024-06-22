const express = require("express");
const router = express.Router();
const convertionController = require("../controllers/convertionController");

router.get("/", convertionController.home);
router.post("/celciustofahrenheit", convertionController.celciusToFahrenheit);

module.exports = router;