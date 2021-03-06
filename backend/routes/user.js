const express = require("express");
const router = express.Router();
//const auth = require("../middleware/auth");
const users = require("../controllers/users");

router.post("/login", users.login);
router.post("/register", users.create);

module.exports = router;
