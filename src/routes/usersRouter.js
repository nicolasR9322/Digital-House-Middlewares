const express = require("express");
const router = express.Router();

// controllers
const {index, register} = require("../controllers/usersController");
const Admins = require("../middlewares/Admins");

router.get("/login", index);
router.get("/admin",Admins ,register)

module.exports = router;