const express = require("express");
const router = express.Router();
const convertionController = require("../controllers/convertionController");

router.get("/", convertionController.)
router.post("/celciustofahrenheit", convertionController.celciusToFahrenheit);

module.exports = router;