const express = require("express");
const router = express.Router();
const autMiddleware = require("../middleware/jwtMiddleware");
const profileController = require("../controllers/profileController");

router.get("/", autMiddleware, profileController.getProfile);

router.post("/", autMiddleware, profileController.completeProfile);

module.exports = router;
