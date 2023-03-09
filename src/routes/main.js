const express = require("express");
const router = express.Router();

// controllers
const {index} = require("../controllers/mainController");

router.get("/", index);

module.exports = router;