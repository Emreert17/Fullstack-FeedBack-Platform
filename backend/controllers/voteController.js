const Vote = require("../models/voteModel");
const Feedback = require("../models/feedbackModel");

exports.voteControl = async (req, res) => {
  const currentUserId = req.user.userID;
  const feedbackId = req.body.feedbackId;

  const feedback = await Feedback.findById(feedbackId);

  if (!feedback) {
    return res.status(400).json({ error: "Feedback not found" });
  }

  if (feedback.userId.toString() === currentUserId) {
    return res.status(400).json({ error: "Cannot vote your own feedback!" }); // Own feedback vote control
  }

  const existingVote = await Vote.findOne({
    userId: currentUserId,
    feedbackId,
  });

  if (existingVote) {
    await Vote.findOneAndDelete({ userId: currentUserId, feedbackId }); // Click on the second time, removes the vote not increasing.

    const count = await Vote.countDocuments({ feedbackId });
    return res.status(200).json({
      voteCount: count,
      voted: false,
    });
  }

  const vote = await Vote.create({
    userId: currentUserId,
    feedbackId: feedbackId,
  });
  const count = await Vote.countDocuments({ feedbackId });

  res.status(200).json({
    voteCount: count,
    voted: true,
  });
};
