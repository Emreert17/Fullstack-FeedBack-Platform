const User = require("../models/userModel");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userID).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server Error!" });
  }
};

exports.completeProfile = async (req, res) => {
  try {
    const allowedFields = [
      "jobtitle",
      "department",
      "companyname",
      "companysize",
      "country",
      "city",
      "bio",
    ];
    const updates = {};
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "At least one field required!" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userID,
      {
        ...updates,
        isProfileComplete: true,
      },
      { returnDocument: "after", select: "-password" },
    );
    if (!updatedUser) {
      return res.status(401).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Server Error!" });
  }
};
