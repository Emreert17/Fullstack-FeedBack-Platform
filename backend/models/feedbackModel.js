const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["feature", "bug", "ui", "ux", "enchanment"],
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "planned", "in-progress", "done"],
      default: "open",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    upVotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Feedback", feedbackSchema);
