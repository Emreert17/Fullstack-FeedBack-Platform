const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/jwtMiddleware");

router.post("/register", authController.authControl);

router.post("/login", authController.loginControl);

router.get("/me", authMiddleware, authController.routeProtection);

module.exports = router;
