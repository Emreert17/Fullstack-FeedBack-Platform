const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/jwtMiddleware");
const analyticsController = require("../controllers/analyticsController");

router.get("/", authMiddleware, analyticsController.getAnalyticsData);

module.exports = router;
