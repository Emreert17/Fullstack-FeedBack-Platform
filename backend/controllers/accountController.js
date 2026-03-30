const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.updatePassword = async (req, res) => {
  try {
    const { password, newpassword, confirmpassword } = req.body;

    if (!password || !newpassword || !confirmpassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }
    if (newpassword !== confirmpassword) {
      // NewPassword and ConfirmPassword match control.
      return res.status(400).json({ error: "Passwords are not match" });
    }
    const user = await User.findById(req.user.userID);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Current Password control.
      return res.status(400).json({ error: "Current password is wrong!" });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);
    await User.findByIdAndUpdate(req.user.userID, {
      password: hashedPassword,
    });
    res.status(200).json({ success: "Password Updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
