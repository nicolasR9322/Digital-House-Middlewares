const express = require("express");
const router = express.Router();

// controllers
const {index, design} = require("../controllers/servicesController");

router.get("/", index);

router.get("/design", design);

module.exports = router;