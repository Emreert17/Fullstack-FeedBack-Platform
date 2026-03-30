const express = require("express");
const router = express.Router();
const autMiddleware = require("../middleware/jwtMiddleware");
const accountController = require("../controllers/accountController");

router.post("/update", autMiddleware, accountController.updatePassword);

module.exports = router;
