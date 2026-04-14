const Feedback = require("../models/feedbackModel");
const Vote = require("../models/voteModel");

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

    const voteCounted = await Promise.all(
      feedback.map(async (fb) => {
        const count = await Vote.countDocuments({
          feedbackId: fb._id,
        });

        const vote = Vote.findOne({
          userId: req.user.userID,
          feedbackId: fb._id,
        });

        return {
          ...fb.toObject(),
          voteCount: count,
          voted: !!vote,
        };
      }),
    );
    res.json(voteCounted);
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
