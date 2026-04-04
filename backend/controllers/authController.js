const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.authControl = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Existing User" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.loginControl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign(
      // Creating token
      { userID: user._id, email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret Key
      { expiresIn: process.env.JWT_EXPIRES_IN }, // Secret Key
    );
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.routeProtection = async (req, res) => {
  if (!req.user) return res.status(403).json({ message: "Forbidden" });
  console.log(req.user);
  const user = await User.findById(req.user.userID).select("-password");
  console.log(user);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  res.json(user);
};
