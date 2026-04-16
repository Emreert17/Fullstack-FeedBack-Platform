const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/jwtMiddleware");
const commentController = require("../controllers/commentController");

// Create comment
router.post("/create", authMiddleware, commentController.addComment);

// Delete Comment
router.post("/delete", authMiddleware, commentController.deleteComment);

module.exports = router;
