const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/jwtMiddleware");
const feedbackController = require("../controllers/feedbackController");

// POST create feedback
router.post("/", authMiddleware, feedbackController.addFeedback);

// GET all feedbacks
router.get("/", authMiddleware, feedbackController.getFeedback);

// GET my feedbacks
router.get("/my", authMiddleware, feedbackController.getMyFeedback);

module.exports = router;
