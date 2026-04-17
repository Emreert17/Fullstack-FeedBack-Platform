const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/jwtMiddleware");
const commentController = require("../controllers/commentController");

// Get comment
router.get("/:id/comment", authMiddleware, commentController.getComment);

// Add comment
router.post("/:id/comment/add", authMiddleware, commentController.addComment);

// Delete Comment
router.post(
  "/:id/comment/delete",
  authMiddleware,
  commentController.deleteComment,
);

module.exports = router;
