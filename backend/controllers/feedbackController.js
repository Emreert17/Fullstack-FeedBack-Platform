const Feedback = require("../models/feedbackModel");
const Vote = require("../models/voteModel");
const Comment = require("../models/commentModel");

exports.addFeedback = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category)
      return res.status(400).json({ message: "Cannot be empty!" });

    const feedback = await Feedback.create({
      title: title,
      description: description,
      category: category,
      userId: req.user.userID,
    });

    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: "Feedback not created!" });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find()
      .sort({ createdAt: -1 })
      .populate("userId", "username");

    const voteandCommentCounted = await Promise.all(
      feedback.map(async (fb) => {
        const voteCount = await Vote.countDocuments({
          feedbackId: fb._id,
        });

        const vote = await Vote.findOne({
          userId: req.user.userID,
          feedbackId: fb._id,
        });

        const commentCount = await Comment.countDocuments({
          feedbackId: fb._id,
        });

        return {
          ...fb.toObject(),
          commentCount: commentCount,
          voteCount: voteCount,
          voted: !!vote,
        };
      }),
    );
    res.json(voteandCommentCounted);
  } catch (err) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
};

exports.getMyFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ userId: req.user.userID });

    const voteCounted = await Promise.all(
      feedback.map(async (fb) => {
        const count = await Vote.countDocuments({
          feedbackId: fb._id,
        });

        return {
          ...fb.toObject(),
          voteCount: count,
        };
      }),
    );
    res.json(voteCounted);
  } catch (err) {
    console.error("ACTUAL ERROR:", err.message); // <-- look at your Node terminal
    res.status(500).json({ message: err.message });
  }
};
