const Comment = require("../models/commentModel");
const Feedback = require("../models/feedbackModel");

exports.getComment = async (req, res) => {
  try {
    const feedbackId = req.params.id;
    const feedback = await Feedback.findById(feedbackId);
    if (!feedback) {
      return res.status(400).json({ error: "Feedback not found!" });
    }
    const comment = await Comment.find({ feedbackId })
      .sort({ createdAt: -1 })
      .populate("userId", "username");
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ error: "Server Error!" });
  }
};

exports.addComment = async (req, res) => {
  const currentUserId = req.user.userID;
  const feedbackId = req.params.id; // Getting params :id
  const { text } = req.body;

  const feedback = await Feedback.findById(feedbackId);

  if (!feedback) {
    return res.status(400).json({ error: "Feedback not found!" });
  }

  if (text === "" || !text) {
    return res.status(400).json({ error: "Comment cannot be empty!" });
  }

  const comment = await Comment.create({
    text,
    feedbackId,
    userId: currentUserId,
  });
  await comment.populate("userId", "username");
  const count = await Comment.countDocuments({ feedbackId });

  res.status(201).json({
    comment,
    commentCount: count,
  });
};

exports.deleteComment = async (req, res) => {
  const commentId = req.params.commentId;

  const comment = await Comment.findById(commentId);
  if (!comment) {
    return res.status(404).json({ error: "Comment not found!" });
  }
  if (comment.userId.toString() === req.user.userID) {
    // Only that user delete it's own feedback
    await Comment.findByIdAndDelete(commentId);
    const count = await Comment.countDocuments({
      feedbackId: comment.feedbackId,
    });
    return res.status(204).json({ commentCount: count });
  } else {
    return res.status(403).json({ error: "Forbidden" });
  }
};
